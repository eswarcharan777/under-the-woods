import { FaLeaf } from 'react-icons/fa'
import { MENU } from '../data'
import LogoBg from '../components/LogoBg'

export default function Menu() {
  return (
    <div style={{ position: 'relative', paddingTop: '100px', paddingBottom: '60px', padding: '100px 24px 60px', backgroundColor: '#f7f3ed', minHeight: '100vh', overflow: 'hidden' }}>
      <LogoBg size={450} opacity={0.1} />
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: '#3e2723', marginBottom: '8px' }}>
          Our Menu
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(46,90,30,0.3)' }}></div>
          <FaLeaf style={{ color: '#2e5a1e', fontSize: '12px' }} />
          <div style={{ height: '1px', width: '48px', backgroundColor: 'rgba(46,90,30,0.3)' }}></div>
        </div>

        {MENU.map((cat, ci) => (
          <div key={ci} style={{ marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '28px', color: '#2e5a1e', marginBottom: '24px' }}>
              {cat.category}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {cat.items.map((item, ii) => (
                <div key={ii} style={{ backgroundColor: 'rgba(250,245,239,0.95)', border: '1px solid #e8dcc8', borderRadius: '12px', padding: '24px', textAlign: 'center' }}>
                  <h3 style={{ color: '#3e2723', fontWeight: 600, fontSize: '17px', marginBottom: '8px' }}>{item.name}</h3>
                  <span style={{ display: 'inline-block', color: '#2e5a1e', fontWeight: 700, backgroundColor: 'rgba(46,90,30,0.1)', padding: '4px 16px', borderRadius: '50px', fontSize: '14px', marginBottom: '12px' }}>
                    ₹{item.price}
                  </span>
                  <p style={{ color: '#8d6e63', fontSize: '13px', fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p style={{ color: '#8d6e63', fontSize: '13px', fontWeight: 300, fontStyle: 'italic', marginTop: '16px' }}>
          All dishes are 100% vegetarian. Prices are inclusive of taxes.
        </p>
      </div>
    </div>
  )
}
