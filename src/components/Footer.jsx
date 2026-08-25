import { FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { STORE } from '../data'

export default function Footer() {
  return (
    <footer className="bg-dark-nav border-t border-white/10 py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
        <div>
          <h3 className="text-primary font-bold text-lg mb-3">{STORE.name}</h3>
          <p>{STORE.tagline}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="flex items-center gap-2 mb-2"><FaPhone className="text-primary" /> {STORE.phone}</p>
          <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-primary" /> {STORE.address}</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">Hours</h4>
          <p className="mb-3">{STORE.hours}</p>
          <a
            href={`https://wa.me/91${STORE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm no-underline transition-colors"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} {STORE.name}. All rights reserved. | Demo Website
      </div>
    </footer>
  )
}
