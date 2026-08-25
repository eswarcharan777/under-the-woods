import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaLeaf, FaClock } from 'react-icons/fa'
import { STORE } from '../data'

export default function Footer() {
  return (
    <footer className="bg-olive text-cream py-14 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Brand */}
        <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          {STORE.name}
        </h3>
        <p className="text-cream/60 font-light text-sm mb-8">{STORE.tagline}</p>

        {/* Info grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-sm">
          <div>
            <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center mx-auto mb-3">
              <FaPhoneAlt className="text-cream/70 text-sm" />
            </div>
            <p className="text-cream/90 font-medium mb-1">Phone</p>
            <p className="text-cream/60 font-light">{STORE.phone}</p>
          </div>

          <div>
            <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center mx-auto mb-3">
              <FaClock className="text-cream/70 text-sm" />
            </div>
            <p className="text-cream/90 font-medium mb-1">Hours</p>
            <p className="text-cream/60 font-light">{STORE.hours}</p>
          </div>

          <div>
            <div className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center mx-auto mb-3">
              <FaMapMarkerAlt className="text-cream/70 text-sm" />
            </div>
            <p className="text-cream/90 font-medium mb-1">Address</p>
            <p className="text-cream/60 font-light leading-relaxed max-w-xs mx-auto">{STORE.address}</p>
          </div>
        </div>

        {/* WhatsApp button */}
        <a
          href={`https://wa.me/91${STORE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-cream/15 hover:bg-cream/25 text-cream px-6 py-3 rounded-full text-sm no-underline transition-colors font-medium border border-cream/20"
        >
          <FaWhatsapp /> WhatsApp Us
        </a>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-cream/15 text-xs text-cream/35 flex items-center justify-center gap-2">
          <FaLeaf className="text-cream/20" />
          <span>&copy; {new Date().getFullYear()} {STORE.name}. All rights reserved. | Demo Website</span>
        </div>
      </div>
    </footer>
  )
}
