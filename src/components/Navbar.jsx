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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-nav/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="text-xl font-bold text-primary tracking-wide no-underline">
          {STORE.name}
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-wide no-underline transition-colors ${
                pathname === l.to ? 'text-primary' : 'text-gray-300 hover:text-primary'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-xl bg-transparent border-none cursor-pointer"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-dark-nav border-t border-white/10 px-4 pb-4">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm no-underline border-b border-white/5 ${
                pathname === l.to ? 'text-primary' : 'text-gray-300'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
