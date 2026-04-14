import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

// Poll for report status + retrieve completed report
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params

  const { data: report, error } = await supabaseAdmin
    .from('reports')
    .select(`
      id, status, created_at, completed_at, failed_reason,
      signals_total, tier_at_generation, processing_time_ms,
      input_shop_url, input_category,
      output_buyer_profile, output_buyer_vocabulary,
      output_purchase_triggers, output_purchase_barriers,
      output_content_angles, output_competitor_gaps,
      output_brand_voice, output_positioning,
      output_messaging_pillars, output_content_calendar,
      output_listing_rewrites
    `)
    .eq('id', id)
    .single()

  if (error || !report) {
    return NextResponse.json({ error: 'Report not found' }, { status: 404 })
  }

  return NextResponse.json(report)
}
