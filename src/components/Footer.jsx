import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaLeaf } from 'react-icons/fa'
import { STORE } from '../data'

export default function Footer() {
  return (
    <footer className="bg-olive text-cream py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="font-bold text-xl mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {STORE.name}
          </h3>
          <p className="text-cream/70 font-light">{STORE.tagline}</p>
          <div className="flex items-center gap-2 mt-3 text-cream/50 text-xs">
            <FaLeaf /> Farm to table, nature to plate
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-cream/90">Contact</h4>
          <p className="flex items-center gap-2 mb-2 text-cream/70 font-light">
            <FaPhoneAlt className="text-cream/50 text-xs" /> {STORE.phone}
          </p>
          <p className="flex items-start gap-2 text-cream/70 font-light">
            <FaMapMarkerAlt className="text-cream/50 text-xs mt-1 flex-shrink-0" /> {STORE.address}
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-cream/90">Hours</h4>
          <p className="mb-4 text-cream/70 font-light">{STORE.hours}</p>
          <a
            href={`https://wa.me/91${STORE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-cream/20 hover:bg-cream/30 text-cream px-5 py-2.5 rounded-full text-sm no-underline transition-colors font-medium"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-cream/20 text-center text-xs text-cream/40">
        &copy; {new Date().getFullYear()} {STORE.name}. All rights reserved. | Demo Website
      </div>
    </footer>
  )
}
