import { Link } from 'react-router-dom'
import { FaWhatsapp, FaStar, FaLeaf, FaUtensils, FaTree, FaQuoteLeft } from 'react-icons/fa'
import { STORE } from '../data'
import LogoBg from '../components/LogoBg'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '24px', backgroundColor: '#f7f3ed', overflow: 'hidden' }}>
        <LogoBg size={450} opacity={0.12} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(46,90,30,0.1)', border: '1px solid rgba(46,90,30,0.3)', color: '#2e5a1e', padding: '8px 20px', borderRadius: '50px', fontSize: '14px', fontWeight: 500, marginBottom: '24px' }}>
            <FaLeaf /> Pure Vegetarian
          </div>

          <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(40px, 8vw, 72px)', fontWeight: 700, color: '#3e2723', marginBottom: '16px', lineHeight: 1.1 }}>
            Under The Woods
          </h1>

          <p style={{ fontSize: '18px', color: '#8d6e63', marginBottom: '8px', fontWeight: 300 }}>
            Fresh, natural, pure vegetarian cuisine
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#8d6e63', fontSize: '14px', marginBottom: '32px' }}>
            <FaStar style={{ color: '#f59e0b' }} />
            <span>{STORE.rating} ({STORE.reviews} reviews)</span>
            <span>&middot;</span>
            <span>{STORE.priceRange}</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center', alignItems: 'center' }}>
            <a
              href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#2e5a1e', color: '#faf5ef', padding: '16px 40px', borderRadius: '50px', fontWeight: 600, fontSize: '16px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(46,90,30,0.3)', whiteSpace: 'nowrap' }}
            >
              <FaWhatsapp style={{ fontSize: '18px', flexShrink: 0 }} />
              <span>Reserve a Table</span>
            </a>
            <Link
              to="/menu"
              style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', border: '2px solid #2e5a1e', color: '#2e5a1e', padding: '16px 40px', borderRadius: '50px', fontWeight: 600, fontSize: '16px', textDecoration: 'none', whiteSpace: 'nowrap' }}
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px 0', backgroundColor: '#f0e6d6' }}>
        <div style={{ height: '1px', width: '60px', backgroundColor: 'rgba(46,90,30,0.3)' }}></div>
        <FaLeaf style={{ color: '#2e5a1e', margin: '0 16px', fontSize: '12px' }} />
        <div style={{ height: '1px', width: '60px', backgroundColor: 'rgba(46,90,30,0.3)' }}></div>
      </div>

      {/* Features */}
      <section style={{ position: 'relative', padding: '80px 24px', backgroundColor: '#faf5ef', textAlign: 'center', overflow: 'hidden' }}>
        <LogoBg size={350} opacity={0.08} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(28px, 4vw, 36px)', color: '#3e2723', marginBottom: '12px' }}>
            Why dine with us
          </h2>
          <p style={{ color: '#8d6e63', marginBottom: '48px', fontWeight: 300 }}>An experience that goes beyond just food</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { icon: <FaLeaf style={{ fontSize: '24px', color: '#2e5a1e' }} />, title: "100% Vegetarian", desc: "Pure veg cuisine crafted with the freshest seasonal ingredients from local farms" },
              { icon: <FaUtensils style={{ fontSize: '24px', color: '#2e5a1e' }} />, title: "All You Can Eat", desc: "Unlimited buffet featuring Indian, Chinese, and international dishes" },
              { icon: <FaTree style={{ fontSize: '24px', color: '#2e5a1e' }} />, title: "Outdoor Seating", desc: "Dine amidst lush greenery and fresh air under the canopy of nature" },
            ].map((f, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(247,243,237,0.9)', border: '1px solid #e8dcc8', borderRadius: '16px', padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(46,90,30,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  {f.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '18px', fontWeight: 600, color: '#3e2723', marginBottom: '12px' }}>{f.title}</h3>
                <p style={{ color: '#8d6e63', fontSize: '14px', fontWeight: 300, lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section style={{ padding: '80px 24px', backgroundColor: '#2e5a1e', color: '#faf5ef', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <FaQuoteLeft style={{ fontSize: '28px', opacity: 0.4, marginBottom: '20px' }} />
          <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(18px, 3vw, 24px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.6, marginBottom: '16px' }}>
            Where every meal is a celebration of nature's finest flavors
          </p>
          <p style={{ opacity: 0.6, fontSize: '13px', letterSpacing: '2px', textTransform: 'uppercase' }}>Under The Woods, Vijayawada</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: 'relative', padding: '80px 24px', backgroundColor: '#f7f3ed', textAlign: 'center', overflow: 'hidden' }}>
        <LogoBg size={300} opacity={0.1} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(28px, 4vw, 36px)', color: '#3e2723', marginBottom: '16px' }}>
            Ready for a delightful experience?
          </h2>
          <p style={{ color: '#8d6e63', marginBottom: '32px', fontWeight: 300 }}>Join us for an unforgettable dining experience amidst nature</p>
          <a
            href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation at Under The Woods.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', backgroundColor: '#2e5a1e', color: '#faf5ef', padding: '16px 48px', borderRadius: '50px', fontWeight: 600, fontSize: '18px', textDecoration: 'none', boxShadow: '0 4px 12px rgba(46,90,30,0.3)', whiteSpace: 'nowrap' }}
          >
            <FaWhatsapp style={{ fontSize: '20px', flexShrink: 0 }} />
            <span>Book via WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  )
}
