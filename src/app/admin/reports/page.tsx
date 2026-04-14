import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'

async function getReports() {
  const { data } = await supabaseAdmin
    .from('admin_report_overview')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(100)

  return data || []
}

const statusColors: Record<string, string> = {
  pending: 'var(--horizon)',
  processing: 'var(--gold)',
  complete: '#4caf50',
  failed: '#f44336',
}

const tierLabels: Record<string, string> = {
  free: 'Free',
  tier1: 'T1',
  tier2: 'T2',
  tier3: 'T3',
}

export default async function ReportsPage() {
  const reports = await getReports()

  const completedCount = reports.filter(r => r.status === 'complete').length
  const failedCount = reports.filter(r => r.status === 'failed').length
  const processingCount = reports.filter(r => r.status === 'processing' || r.status === 'pending').length

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '4px' }}>Reports</h1>
        <p style={{ fontSize: '15px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>{reports.length} total · {completedCount} complete · {processingCount} in progress · {failedCount} failed</p>
      </div>

      <div style={{ background: 'var(--ice)', border: '1px solid var(--sky)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1.5fr 80px 80px 100px 80px',
          padding: '14px 24px',
          background: 'var(--midnight)',
          gap: '16px',
        }}>
          {['User', 'Shop / Category', 'Tier', 'Signals', 'Status', 'Action'].map((h) => (
            <span key={h} style={{ fontSize: '12px', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: 'var(--sky)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{h}</span>
          ))}
        </div>

        {reports.length === 0 ? (
          <div style={{ padding: '48px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>No reports generated yet.</p>
          </div>
        ) : (
          reports.map((r: Record<string, unknown>, i: number) => (
            <div
              key={r.id as string}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1.5fr 80px 80px 100px 80px',
                padding: '14px 24px',
                gap: '16px',
                borderTop: i > 0 ? '1px solid var(--sky)' : 'none',
                background: i % 2 === 0 ? 'var(--ice)' : 'var(--warm-white)',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '13px', color: 'var(--midnight)', fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {r.user_email as string}
              </span>

              <span style={{ fontSize: '13px', color: 'var(--ink)', fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {r.input_shop_url as string || r.input_category as string || '—'}
              </span>

              <span style={{ fontSize: '12px', fontFamily: 'Inter, system-ui, sans-serif', color: 'var(--horizon)' }}>
                {tierLabels[r.tier_at_generation as string] || r.tier_at_generation as string}
              </span>

              <span style={{ fontSize: '13px', color: 'var(--ink)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                {r.signals_total as number || 0}
              </span>

              <span style={{
                fontSize: '11px',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '6px',
                background: `${statusColors[r.status as string]}20`,
                color: statusColors[r.status as string],
                display: 'inline-block',
              }}>
                {r.status as string}
              </span>

              <Link
                href={`/admin/reports/${r.id}`}
                style={{ fontSize: '13px', color: 'var(--cobalt)', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500, textDecoration: 'none' }}
              >
                View →
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
