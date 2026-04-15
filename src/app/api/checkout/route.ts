import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-03-31.basil',
})

const PRICE_TO_TIER: Record<string, string> = {
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_T1!]: 'tier1',
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_T2!]: 'tier2',
  [process.env.NEXT_PUBLIC_STRIPE_PRICE_T3!]: 'tier3',
}

export async function POST(req: NextRequest) {
  try {
    const { price_id, user_id, email } = await req.json()

    if (!price_id || !email) {
      return NextResponse.json({ error: 'price_id and email required' }, { status: 400 })
    }

    // Get or create Stripe customer
    let customerId: string | undefined

    if (user_id) {
      const { data: sub } = await supabaseAdmin
        .from('subscriptions')
        .select('stripe_customer_id')
        .eq('user_id', user_id)
        .single()

      customerId = sub?.stripe_customer_id || undefined
    }

    if (!customerId) {
      const customer = await stripe.customers.create({
        email,
        metadata: { user_id: user_id || '' },
      })
      customerId = customer.id
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer: customerId,
      payment_method_types: ['card'],
      line_items: [{ price: price_id, quantity: 1 }],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://meetclaro.ai'}/dashboard?upgraded=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://meetclaro.ai'}/pricing`,
      metadata: {
        user_id: user_id || '',
        tier: PRICE_TO_TIER[price_id] || 'tier1',
      },
      subscription_data: {
        metadata: {
          user_id: user_id || '',
          tier: PRICE_TO_TIER[price_id] || 'tier1',
        },
      },
    })

    return NextResponse.json({ url: session.url })

  } catch (err) {
    console.error('[Checkout]', err)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
