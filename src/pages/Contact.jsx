import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaLeaf } from 'react-icons/fa'
import { STORE } from '../data'

export default function Contact() {
  return (
    <div style={{ paddingTop: '100px', paddingBottom: '60px', padding: '100px 24px 60px', backgroundColor: '#f7f3ed', minHeight: '100vh' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#3e2723', marginBottom: '8px' }}>
          Visit Us
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(46,90,30,0.3)' }}></div>
          <FaLeaf style={{ color: '#2e5a1e', fontSize: '12px' }} />
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(46,90,30,0.3)' }}></div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '40px' }}>
          {[
            { icon: <FaPhoneAlt style={{ fontSize: '18px', color: '#2e5a1e' }} />, title: "Phone", value: STORE.phone, href: `tel:${STORE.phone.replace(/\s/g, '')}` },
            { icon: <FaClock style={{ fontSize: '18px', color: '#2e5a1e' }} />, title: "Hours", value: STORE.hours },
            { icon: <FaMapMarkerAlt style={{ fontSize: '18px', color: '#2e5a1e' }} />, title: "Address", value: STORE.address },
            { icon: <FaWhatsapp style={{ fontSize: '18px', color: '#16a34a' }} />, title: "WhatsApp", value: "Message us on WhatsApp", href: `https://wa.me/91${STORE.whatsapp}` },
          ].map((c, i) => (
            <div key={i} style={{ backgroundColor: '#faf5ef', border: '1px solid #e8dcc8', borderRadius: '12px', padding: '32px 20px', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(46,90,30,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                {c.icon}
              </div>
              <h3 style={{ color: '#3e2723', fontWeight: 600, fontSize: '18px', marginBottom: '8px' }}>{c.title}</h3>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ color: '#8d6e63', textDecoration: 'none', fontWeight: 300, fontSize: '15px', wordBreak: 'break-word' }}>
                  {c.value}
                </a>
              ) : (
                <p style={{ color: '#8d6e63', fontWeight: 300, fontSize: '15px', lineHeight: 1.6 }}>{c.value}</p>
              )}
            </div>
          ))}
        </div>

        <div style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #e8dcc8', marginBottom: '40px' }}>
          <iframe
            src={STORE.mapEmbed}
            width="100%"
            height="350"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Under The Woods Location"
          />
        </div>

        <a
          href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation at Under The Woods.`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#2e5a1e', color: '#faf5ef', padding: '16px 48px', borderRadius: '50px', fontWeight: 600, fontSize: '18px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(46,90,30,0.3)', whiteSpace: 'nowrap' }}
        >
          <FaWhatsapp style={{ fontSize: '20px', flexShrink: 0 }} />
          <span>Reserve via WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
