import { Link } from 'react-router-dom'
import { FaWhatsapp, FaStar, FaLeaf, FaUtensils, FaUsers } from 'react-icons/fa'
import { STORE } from '../data'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center text-center px-4"
        style={{
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1a1a0f 50%, #0f0f0f 100%)',
        }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, #d4a053 0%, transparent 50%), radial-gradient(circle at 80% 50%, #22c55e 0%, transparent 50%)',
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-1.5 rounded-full text-sm mb-6">
            <FaLeaf /> Pure Vegetarian
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white leading-tight">
            {STORE.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-2">{STORE.tagline}</p>
          <p className="text-gray-text mb-8 flex items-center justify-center gap-2">
            <FaStar className="text-yellow-400" /> {STORE.rating} ({STORE.reviews} reviews) &middot; {STORE.priceRange}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-lg font-semibold text-lg no-underline transition-colors"
            >
              <FaWhatsapp className="text-xl" /> Reserve a Table
            </a>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-black px-8 py-3.5 rounded-lg font-semibold text-lg no-underline transition-colors"
            >
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-dark-card">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { icon: <FaLeaf className="text-3xl text-green-400" />, title: "100% Vegetarian", desc: "Pure veg cuisine with the freshest ingredients" },
            { icon: <FaUtensils className="text-3xl text-primary" />, title: "All You Can Eat", desc: "Unlimited buffet with Indian & international dishes" },
            { icon: <FaUsers className="text-3xl text-blue-400" />, title: "Outdoor Seating", desc: "Dine amidst lush greenery and fresh air" },
          ].map((f, i) => (
            <div key={i} className="bg-dark p-8 rounded-xl border border-white/5">
              <div className="mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
              <p className="text-gray-text text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
