import { FaStar, FaLeaf, FaHeart, FaQuoteLeft } from 'react-icons/fa'
import { STORE } from '../data'
import LogoBg from '../components/LogoBg'

export default function About() {
  return (
    <div style={{ position: 'relative', paddingTop: '100px', paddingBottom: '60px', padding: '100px 24px 60px', backgroundColor: '#f7f3ed', minHeight: '100vh', overflow: 'hidden' }}>
      <LogoBg size={450} opacity={0.1} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#3e2723', marginBottom: '8px' }}>
          Our Story
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(46,90,30,0.3)' }}></div>
          <FaLeaf style={{ color: '#2e5a1e', fontSize: '12px' }} />
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(46,90,30,0.3)' }}></div>
        </div>

        <div style={{ backgroundColor: 'rgba(250,245,239,0.95)', border: '1px solid #e8dcc8', borderRadius: '20px', padding: '48px 32px', marginBottom: '32px', textAlign: 'center' }}>
          <FaQuoteLeft style={{ color: 'rgba(46,90,30,0.15)', fontSize: '28px', marginBottom: '20px' }} />
          <p style={{ color: '#3e2723', lineHeight: 1.8, fontSize: '17px', fontWeight: 300, marginBottom: '20px' }}>{STORE.about}</p>
          <p style={{ color: '#3e2723', lineHeight: 1.8, fontSize: '17px', fontWeight: 300 }}>
            Whether you're celebrating a special occasion, enjoying a family meal, or simply craving delicious vegetarian food, Under The Woods welcomes you with warm hospitality and unforgettable flavors.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {[
            { icon: <FaStar style={{ fontSize: '20px', color: '#f59e0b' }} />, label: `${STORE.rating} Stars`, sub: `${STORE.reviews} reviews` },
            { icon: <FaLeaf style={{ fontSize: '20px', color: '#2e5a1e' }} />, label: "Pure Veg", sub: "100% vegetarian" },
            { icon: <FaHeart style={{ fontSize: '20px', color: '#ef4444' }} />, label: "All You Can Eat", sub: "Unlimited buffet" },
          ].map((s, i) => (
            <div key={i} style={{ backgroundColor: 'rgba(250,245,239,0.95)', border: '1px solid #e8dcc8', borderRadius: '12px', padding: '28px 16px', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#eae5db', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                {s.icon}
              </div>
              <p style={{ color: '#3e2723', fontWeight: 600, fontSize: '16px', marginBottom: '4px' }}>{s.label}</p>
              <p style={{ color: '#8d6e63', fontSize: '13px', fontWeight: 300 }}>{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
