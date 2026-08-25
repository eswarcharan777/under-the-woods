import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaLeaf, FaClock } from 'react-icons/fa'
import { STORE } from '../data'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2e5a1e', color: '#faf5ef', padding: '56px 24px', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 700, fontSize: '24px', marginBottom: '8px' }}>
          {STORE.name}
        </h3>
        <p style={{ opacity: 0.6, fontWeight: 300, fontSize: '14px', marginBottom: '32px' }}>{STORE.tagline}</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '32px' }}>
          <div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(250,245,239,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <FaPhoneAlt style={{ fontSize: '14px', opacity: 0.7 }} />
            </div>
            <p style={{ fontWeight: 500, fontSize: '14px', marginBottom: '4px', opacity: 0.9 }}>Phone</p>
            <p style={{ opacity: 0.6, fontWeight: 300, fontSize: '13px' }}>{STORE.phone}</p>
          </div>
          <div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(250,245,239,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <FaClock style={{ fontSize: '14px', opacity: 0.7 }} />
            </div>
            <p style={{ fontWeight: 500, fontSize: '14px', marginBottom: '4px', opacity: 0.9 }}>Hours</p>
            <p style={{ opacity: 0.6, fontWeight: 300, fontSize: '13px' }}>{STORE.hours}</p>
          </div>
          <div>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'rgba(250,245,239,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <FaMapMarkerAlt style={{ fontSize: '14px', opacity: 0.7 }} />
            </div>
            <p style={{ fontWeight: 500, fontSize: '14px', marginBottom: '4px', opacity: 0.9 }}>Address</p>
            <p style={{ opacity: 0.6, fontWeight: 300, fontSize: '13px', lineHeight: 1.5, maxWidth: '220px', margin: '0 auto' }}>{STORE.address}</p>
          </div>
        </div>

        <a
          href={`https://wa.me/91${STORE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(250,245,239,0.15)', color: '#faf5ef', padding: '12px 28px', borderRadius: '50px', fontSize: '14px', textDecoration: 'none', fontWeight: 500, border: '1px solid rgba(250,245,239,0.2)', whiteSpace: 'nowrap' }}
        >
          <FaWhatsapp style={{ flexShrink: 0 }} /> WhatsApp Us
        </a>

        <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(250,245,239,0.15)', fontSize: '12px', opacity: 0.35, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <FaLeaf />
          <span>&copy; {new Date().getFullYear()} {STORE.name}. All rights reserved. | Demo Website</span>
        </div>
      </div>
    </footer>
  )
}
