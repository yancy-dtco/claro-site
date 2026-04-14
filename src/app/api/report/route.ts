import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin, TIER_LIMITS } from '@/lib/supabase'
import { generateReport } from '@/lib/report-engine'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { shop_url, product_category, email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }

    if (!shop_url && !product_category) {
      return NextResponse.json({ error: 'Shop URL or product category required' }, { status: 400 })
    }

    // Check if user exists, if not create via waitlist flow
    let userId: string

    const { data: existingProfile } = await supabaseAdmin
      .from('profiles')
      .select('id')
      .eq('email', email.toLowerCase())
      .single()

    if (existingProfile) {
      userId = existingProfile.id
    } else {
      // Create anonymous user record for free tier
      const { data: newUser, error: userError } = await supabaseAdmin.auth.admin.createUser({
        email: email.toLowerCase(),
        email_confirm: true,
        user_metadata: { source: 'free_report' },
      })

      if (userError || !newUser?.user) {
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
      }
      userId = newUser.user.id

      // Add to waitlist
      await supabaseAdmin.from('waitlist').upsert({
        email: email.toLowerCase(),
        shop_url: shop_url || null,
        product_category: product_category || null,
        source: 'homepage',
      })
    }

    // Check report limits
    const { data: sub } = await supabaseAdmin
      .from('subscriptions')
      .select('tier, reports_used_this_month, reports_limit')
      .eq('user_id', userId)
      .single()

    const tier = sub?.tier || 'free'
    const used = sub?.reports_used_this_month || 0
    const limit = TIER_LIMITS[tier as keyof typeof TIER_LIMITS]

    if (limit !== -1 && used >= limit) {
      return NextResponse.json({
        error: 'Report limit reached',
        tier,
        upgrade_url: '/pricing',
      }, { status: 429 })
    }

    // Create shop record if needed
    let shopId: string | null = null
    if (shop_url) {
      const { data: shop } = await supabaseAdmin
        .from('shops')
        .insert({
          user_id: userId,
          etsy_shop_url: shop_url,
          shop_name: shop_url.split('/').pop() || shop_url,
          is_primary: true,
        })
        .select('id')
        .single()
      shopId = shop?.id || null
    }

    // Create report record
    const { data: report, error: reportError } = await supabaseAdmin
      .from('reports')
      .insert({
        user_id: userId,
        shop_id: shopId,
        input_shop_url: shop_url || null,
        input_category: product_category || null,
        input_raw: JSON.stringify({ shop_url, product_category, email }),
        status: 'pending',
        tier_at_generation: tier,
      })
      .select('id')
      .single()

    if (reportError || !report) {
      return NextResponse.json({ error: 'Failed to create report' }, { status: 500 })
    }

    // Kick off generation async (don't await — respond immediately)
    generateReport(report.id).catch(console.error)

    return NextResponse.json({
      report_id: report.id,
      status: 'processing',
      poll_url: `/api/report/${report.id}`,
      estimated_seconds: 120,
    })

  } catch (err) {
    console.error('[POST /api/report]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
