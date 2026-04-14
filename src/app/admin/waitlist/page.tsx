import { supabaseAdmin } from '@/lib/supabase'

async function getWaitlist() {
  const { data } = await supabaseAdmin
    .from('waitlist')
    .select('*')
    .order('created_at', { ascending: false })

  return data || []
}

export default async function WaitlistPage() {
  const entries = await getWaitlist()
  const convertedCount = entries.filter((e: Record<string, unknown>) => e.converted).length

  return (
    <div>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '36px', marginBottom: '4px' }}>Waitlist</h1>
        <p style={{ fontSize: '15px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>
          {entries.length} total · {convertedCount} converted · {entries.length - convertedCount} unconverted
        </p>
      </div>

      <div style={{ background: 'var(--ice)', border: '1px solid var(--sky)', borderRadius: '12px', overflow: 'hidden' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 2fr 1fr 100px',
          padding: '14px 24px',
          background: 'var(--midnight)',
          gap: '16px',
        }}>
          {['Email', 'Shop / Category', 'Source', 'Status'].map((h) => (
            <span key={h} style={{ fontSize: '12px', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: 'var(--sky)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{h}</span>
          ))}
        </div>

        {entries.length === 0 ? (
          <div style={{ padding: '48px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>No waitlist signups yet.</p>
          </div>
        ) : (
          entries.map((entry: Record<string, unknown>, i: number) => (
            <div
              key={entry.id as string}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 2fr 1fr 100px',
                padding: '14px 24px',
                gap: '16px',
                borderTop: i > 0 ? '1px solid var(--sky)' : 'none',
                background: i % 2 === 0 ? 'var(--ice)' : 'var(--warm-white)',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '14px', color: 'var(--midnight)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                {entry.email as string}
              </span>

              <span style={{ fontSize: '13px', color: 'var(--ink)', fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {entry.shop_url as string || entry.product_category as string || '—'}
              </span>

              <span style={{ fontSize: '12px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                {entry.source as string || 'homepage'}
              </span>

              <span style={{
                fontSize: '11px',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '6px',
                background: entry.converted ? 'rgba(76,175,80,0.15)' : 'rgba(74,122,181,0.15)',
                color: entry.converted ? '#4caf50' : 'var(--horizon)',
                display: 'inline-block',
              }}>
                {entry.converted ? 'Converted' : 'Waiting'}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
