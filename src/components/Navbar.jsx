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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-beige/95 backdrop-blur-md border-b border-cream-mid shadow-sm">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <span className="text-xl font-bold text-olive tracking-wide" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {STORE.name}
          </span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium tracking-wide no-underline transition-colors ${
                pathname === l.to
                  ? 'text-olive border-b-2 border-olive pb-0.5'
                  : 'text-brown-muted hover:text-olive'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-olive hover:bg-olive-dark text-cream text-sm font-medium px-5 py-2 rounded-full no-underline transition-colors"
          >
            Reserve Table
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-brown text-xl bg-transparent border-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-beige border-t border-cream-mid px-6 pb-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium no-underline border-b border-cream-dark ${
                pathname === l.to ? 'text-olive' : 'text-brown-muted'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation.`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center bg-olive text-cream text-sm font-medium px-5 py-2.5 rounded-full no-underline"
          >
            Reserve Table
          </a>
        </div>
      )}
    </nav>
  )
}
