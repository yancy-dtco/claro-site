import { supabaseAdmin } from '@/lib/supabase'
import Link from 'next/link'

async function getUsers() {
  const { data } = await supabaseAdmin
    .from('admin_user_overview')
    .select('*')
    .order('joined_at', { ascending: false })

  return data || []
}

const tierColors: Record<string, string> = {
  free: 'var(--horizon)',
  tier1: '#4caf50',
  tier2: 'var(--gold)',
  tier3: '#9c27b0',
}

const tierLabels: Record<string, string> = {
  free: 'Free',
  tier1: 'T1 · $49',
  tier2: 'T2 · $79',
  tier3: 'T3 · $149',
}

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '36px', marginBottom: '4px' }}>Users</h1>
          <p style={{ fontSize: '15px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>{users.length} total</p>
        </div>
      </div>

      <div style={{ background: 'var(--ice)', border: '1px solid var(--sky)', borderRadius: '12px', overflow: 'hidden' }}>
        {/* Table header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 80px',
          padding: '14px 24px',
          background: 'var(--midnight)',
          gap: '16px',
        }}>
          {['User', 'Tier', 'Reports', 'Shop', 'Joined', 'Action'].map((h) => (
            <span key={h} style={{ fontSize: '12px', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 600, color: 'var(--sky)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{h}</span>
          ))}
        </div>

        {/* Rows */}
        {users.length === 0 ? (
          <div style={{ padding: '48px 24px', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>No users yet. They&apos;ll appear here when the first report is generated.</p>
          </div>
        ) : (
          users.map((user: Record<string, unknown>, i: number) => (
            <div
              key={user.id as string}
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr 80px',
                padding: '16px 24px',
                gap: '16px',
                borderTop: i > 0 ? '1px solid var(--sky)' : 'none',
                background: i % 2 === 0 ? 'var(--ice)' : 'var(--warm-white)',
                alignItems: 'center',
              }}
            >
              <div>
                <p style={{ fontSize: '14px', color: 'var(--midnight)', fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}>{user.email as string}</p>
                {user.full_name ? <p style={{ fontSize: '12px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>{String(user.full_name)}</p> : null}
              </div>

              <span style={{
                fontSize: '12px',
                fontFamily: 'Inter, system-ui, sans-serif',
                fontWeight: 700,
                padding: '4px 10px',
                borderRadius: '6px',
                background: `${tierColors[user.tier as string]}20`,
                color: tierColors[user.tier as string],
                display: 'inline-block',
              }}>
                {tierLabels[user.tier as string] || user.tier as string}
              </span>

              <span style={{ fontSize: '14px', color: 'var(--ink)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                {user.total_reports as number || 0}
              </span>

              <span style={{ fontSize: '13px', color: 'var(--ink)', fontFamily: 'Inter, system-ui, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {user.shop_name as string || user.etsy_shop_url as string || '—'}
              </span>

              <span style={{ fontSize: '13px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>
                {new Date(user.joined_at as string).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </span>

              <Link
                href={`/admin/users/${user.id}`}
                style={{
                  fontSize: '13px',
                  color: 'var(--cobalt)',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 500,
                  textDecoration: 'none',
                }}
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
