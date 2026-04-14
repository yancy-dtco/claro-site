import Link from 'next/link'
import { Logo } from '@/components/Logo'

const navItems = [
  { label: 'Dashboard', href: '/admin' },
  { label: 'Users', href: '/admin/users' },
  { label: 'Reports', href: '/admin/reports' },
  { label: 'Waitlist', href: '/admin/waitlist' },
]

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--warm-white)' }}>
      {/* Sidebar */}
      <aside style={{
        width: '240px',
        background: 'var(--midnight)',
        padding: '32px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        flexShrink: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        overflowY: 'auto',
      }}>
        <div style={{ padding: '0 24px 24px', borderBottom: '1px solid var(--ink)' }}>
          <span style={{ fontSize: '20px', color: 'var(--warm-white)' }}>
            <Logo />
          </span>
          <p style={{ fontSize: '11px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif', marginTop: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Admin
          </p>
        </div>

        <nav style={{ padding: '16px 0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'block',
                padding: '10px 24px',
                fontSize: '14px',
                fontFamily: 'Inter, system-ui, sans-serif',
                color: 'var(--sky)',
                textDecoration: 'none',
                transition: 'background 150ms',
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', padding: '16px 24px', borderTop: '1px solid var(--ink)' }}>
          <Link href="/" style={{ fontSize: '13px', color: 'var(--horizon)', fontFamily: 'Inter, system-ui, sans-serif' }}>
            ← Back to site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: '240px', flex: 1, padding: '40px', minWidth: 0 }}>
        {children}
      </main>
    </div>
  )
}
