import { supabaseAdmin, TIER_LABELS } from '@/lib/supabase'

async function getStats() {
  const [
    { count: totalUsers },
    { count: totalReports },
    { count: waitlistCount },
    { data: tierBreakdown },
    { data: recentReports },
  ] = await Promise.all([
    supabaseAdmin.from('profiles').select('*', { count: 'exact', head: true }).eq('is_admin', false),
    supabaseAdmin.from('reports').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('waitlist').select('*', { count: 'exact', head: true }),
    supabaseAdmin.from('subscriptions').select('tier').neq('tier', null),
    supabaseAdmin.from('admin_report_overview').select('*').limit(5),
  ])

  const tierCounts = (tierBreakdown || []).reduce((acc: Record<string, number>, row) => {
    acc[row.tier] = (acc[row.tier] || 0) + 1
    return acc
  }, {})

  return { totalUsers, totalReports, waitlistCount, tierCounts, recentReports }
}

export default async function AdminDashboard() {
  const stats = await getStats()

  const statCards = [
    { label: 'Total Users', value: stats.totalUsers ?? 0, color: 'var(--cobalt)' },
    { label: 'Reports Generated', value: stats.totalReports ?? 0, color: 'var(--horizon)' },
    { label: 'Waitlist', value: stats.waitlistCount ?? 0, color: 'var(--gold)' },
    { label: 'Paid Users', value: (stats.tierCounts['tier1'] || 0) + (stats.tierCounts['tier2'] || 0) + (stats.tierCounts['tier3'] || 0), color: '#4caf50' },
  ]

  return (
    <div>
      <h1 style={{ fontSize: '36px', marginBottom: '8px' }}>Dashboard</h1>
      <p style={{ fontSize: '15px', color: 'var(--horizon)', marginBottom: '40px', fontFamily: 'Inter, system-ui, sans-serif' }}>
        Claro admin overview
      </p>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
        {statCards.map((card) => (
          <div
            key={card.label}
            style={{
              background: 'var(--ice)',
              border: '1px solid var(--sky)',
              borderRadius: '12px',
              padding: '24px',
              borderTop: `3px solid ${card.color}`,
            }}
          >
            <p style={{ fontSize: '13px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif', marginBottom: '8px' }}>{card.label}</p>
            <p style={{ fontSize: '40px', fontFamily: "'DM Serif Display', Georgia, serif", color: 'var(--midnight)', lineHeight: 1 }}>{card.value}</p>
          </div>
        ))}
      </div>

      {/* Tier breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '48px' }}>
        <div style={{ background: 'var(--ice)', border: '1px solid var(--sky)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Tier Breakdown</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {Object.entries(TIER_LABELS).map(([tier, label]) => (
              <div key={tier} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', color: 'var(--ink)', fontFamily: 'Inter, system-ui, sans-serif' }}>{label.split(' (')[0]}</span>
                <span style={{ fontSize: '22px', fontFamily: "'DM Serif Display', Georgia, serif", color: 'var(--midnight)' }}>
                  {stats.tierCounts[tier] || 0}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ background: 'var(--ice)', border: '1px solid var(--sky)', borderRadius: '12px', padding: '24px' }}>
          <h2 style={{ fontSize: '22px', marginBottom: '20px' }}>Recent Reports</h2>
          {(stats.recentReports || []).length === 0 ? (
            <p style={{ fontSize: '14px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>No reports yet</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {(stats.recentReports || []).map((r: Record<string, unknown>) => (
                <div key={r.id as string} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontSize: '13px', color: 'var(--midnight)', fontFamily: 'Inter, system-ui, sans-serif' }}>{r.user_email as string}</p>
                    <p style={{ fontSize: '12px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>{r.input_shop_url as string || r.input_category as string || 'Unknown'}</p>
                  </div>
                  <span style={{
                    fontSize: '11px',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 600,
                    padding: '3px 8px',
                    borderRadius: '6px',
                    background: r.status === 'complete' ? 'rgba(76,175,80,0.15)' : r.status === 'failed' ? 'rgba(244,67,54,0.15)' : 'rgba(74,122,181,0.15)',
                    color: r.status === 'complete' ? '#4caf50' : r.status === 'failed' ? '#f44336' : 'var(--horizon)',
                  }}>
                    {r.status as string}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
