import { Link } from 'react-router-dom'
import { FaWhatsapp, FaStar, FaLeaf, FaUtensils, FaTree, FaQuoteLeft } from 'react-icons/fa'
import { STORE } from '../data'

function TreeBg() {
  return (
    <svg viewBox="0 0 400 400" className="absolute opacity-[0.04] w-[500px] h-[500px] right-[-100px] top-[50%] -translate-y-1/2 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="200" cy="200" r="190" fill="none" stroke="#2e5a1e" strokeWidth="6"/>
      <path d="M200 350 L200 220" stroke="#2e5a1e" strokeWidth="8" fill="none"/>
      <path d="M200 280 Q160 260 140 230" stroke="#2e5a1e" strokeWidth="5" fill="none"/>
      <path d="M200 260 Q240 240 260 210" stroke="#2e5a1e" strokeWidth="5" fill="none"/>
      <path d="M200 300 Q150 280 130 260" stroke="#2e5a1e" strokeWidth="4" fill="none"/>
      <path d="M200 300 Q250 280 270 260" stroke="#2e5a1e" strokeWidth="4" fill="none"/>
      <ellipse cx="200" cy="160" rx="120" ry="110" fill="#2e5a1e" opacity="0.3"/>
      <circle cx="160" cy="130" r="40" fill="#2e5a1e" opacity="0.25"/>
      <circle cx="240" cy="130" r="40" fill="#2e5a1e" opacity="0.25"/>
      <circle cx="200" cy="100" r="45" fill="#2e5a1e" opacity="0.25"/>
      <circle cx="140" cy="170" r="35" fill="#2e5a1e" opacity="0.2"/>
      <circle cx="260" cy="170" r="35" fill="#2e5a1e" opacity="0.2"/>
      <text x="175" y="175" fontSize="50" fontFamily="Georgia, serif" fill="#2e5a1e" opacity="0.5">U</text>
      <text x="210" y="195" fontSize="50" fontFamily="Georgia, serif" fill="#2e5a1e" opacity="0.5">W</text>
    </svg>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-beige">
        <TreeBg />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 5 Q35 15 30 25 Q25 15 30 5Z' fill='%232e5a1e' opacity='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-olive/10 border border-olive/30 text-olive px-5 py-2 rounded-full text-sm font-medium mb-6">
            <FaLeaf /> Pure Vegetarian
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-brown leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Under The Woods
          </h1>

          <p className="text-lg md:text-xl text-brown-muted mb-2 font-light">
            Fresh, natural, pure vegetarian cuisine
          </p>

          <div className="flex items-center justify-center gap-2 text-brown-muted text-sm mb-8">
            <FaStar className="text-amber-500" />
            <span>{STORE.rating} ({STORE.reviews} reviews)</span>
            <span className="mx-1">&middot;</span>
            <span>{STORE.priceRange}</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-cream px-8 py-3.5 rounded-full font-semibold text-base no-underline transition-colors shadow-md"
            >
              <FaWhatsapp className="text-lg" />
              <span>Reserve a Table</span>
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-olive text-olive hover:bg-olive hover:text-cream px-8 py-3.5 rounded-full font-semibold text-base no-underline transition-colors"
            >
              Explore Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex items-center justify-center py-4 bg-cream-dark">
        <div className="h-px w-16 bg-olive/30"></div>
        <FaLeaf className="text-olive mx-4 text-sm" />
        <div className="h-px w-16 bg-olive/30"></div>
      </div>

      {/* Features */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center text-brown mb-3" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Why dine with us
          </h2>
          <p className="text-center text-brown-muted mb-12 font-light">An experience that goes beyond just food</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <FaLeaf className="text-2xl text-olive" />, title: "100% Vegetarian", desc: "Pure veg cuisine crafted with the freshest seasonal ingredients from local farms" },
              { icon: <FaUtensils className="text-2xl text-olive" />, title: "All You Can Eat", desc: "Unlimited buffet featuring Indian, Chinese, and international dishes to delight every palate" },
              { icon: <FaTree className="text-2xl text-olive" />, title: "Outdoor Seating", desc: "Dine amidst lush greenery and fresh air under the canopy of nature" },
            ].map((f, i) => (
              <div key={i} className="bg-beige border border-cream-mid rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-brown mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{f.title}</h3>
                <p className="text-brown-muted text-sm font-light leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 px-6 bg-olive text-cream text-center">
        <div className="max-w-2xl mx-auto">
          <FaQuoteLeft className="text-3xl mb-4 opacity-40 mx-auto" />
          <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Where every meal is a celebration of nature's finest flavors
          </p>
          <p className="text-cream/70 text-sm tracking-wider uppercase">Under The Woods, Vijayawada</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-beige text-center">
        <h2 className="text-3xl md:text-4xl text-brown mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Ready for a delightful experience?
        </h2>
        <p className="text-brown-muted mb-8 font-light">Join us for an unforgettable dining experience amidst nature</p>
        <a
          href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation at Under The Woods.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-olive hover:bg-olive-dark text-cream px-10 py-4 rounded-full font-semibold text-lg no-underline transition-colors shadow-md"
        >
          <FaWhatsapp className="text-xl" />
          <span>Book via WhatsApp</span>
        </a>
      </section>
    </div>
  )
}
