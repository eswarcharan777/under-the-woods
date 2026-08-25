import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { STORE } from '../data'

const links = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, backgroundColor: 'rgba(247,243,237,0.97)', backdropFilter: 'blur(8px)', borderBottom: '1px solid #e8dcc8', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        {/* Logo + Name */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo.jpg" alt="Under The Woods Logo" style={{ width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover' }} />
          <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '18px', fontWeight: 700, color: '#2e5a1e', letterSpacing: '0.5px' }}>
            {STORE.name}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="nav-desktop">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                letterSpacing: '0.5px',
                textDecoration: 'none',
                color: pathname === l.to ? '#2e5a1e' : '#8d6e63',
                borderBottom: pathname === l.to ? '2px solid #2e5a1e' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2e5a1e',
              color: '#faf5ef',
              fontSize: '13px',
              fontWeight: 600,
              padding: '10px 24px',
              borderRadius: '50px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              letterSpacing: '0.3px',
            }}
          >
            Reserve Table
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#3e2723', fontSize: '20px', display: 'none' }}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="nav-mobile-menu" style={{ backgroundColor: '#f7f3ed', borderTop: '1px solid #e8dcc8', padding: '8px 24px 16px' }}>
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: '14px',
                fontWeight: 500,
                textDecoration: 'none',
                borderBottom: '1px solid #f0e6d6',
                color: pathname === l.to ? '#2e5a1e' : '#8d6e63',
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block',
              marginTop: '12px',
              textAlign: 'center',
              backgroundColor: '#2e5a1e',
              color: '#faf5ef',
              fontSize: '14px',
              fontWeight: 600,
              padding: '12px 24px',
              borderRadius: '50px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
            }}
          >
            Reserve Table
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
