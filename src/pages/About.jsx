import { FaStar, FaLeaf, FaHeart, FaQuoteLeft } from 'react-icons/fa'
import { STORE } from '../data'

export default function About() {
  return (
    <div className="pt-24 pb-16 px-6 bg-beige min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-brown mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Our Story
        </h1>
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-olive/30"></div>
          <FaLeaf className="text-olive text-sm" />
          <div className="h-px w-12 bg-olive/30"></div>
        </div>

        <div className="bg-cream border border-cream-mid rounded-2xl p-8 md:p-12 mb-8">
          <FaQuoteLeft className="text-olive/20 text-3xl mb-4" />
          <p className="text-brown leading-relaxed text-lg mb-6 font-light">{STORE.about}</p>
          <p className="text-brown leading-relaxed font-light">
            Whether you're celebrating a special occasion, enjoying a family meal, or simply craving delicious vegetarian food, Under The Woods welcomes you with warm hospitality and unforgettable flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <FaStar className="text-amber-500 text-xl" />, label: `${STORE.rating} Stars`, sub: `${STORE.reviews} reviews` },
            { icon: <FaLeaf className="text-olive text-xl" />, label: "Pure Veg", sub: "100% vegetarian" },
            { icon: <FaHeart className="text-red-400 text-xl" />, label: "All You Can Eat", sub: "Unlimited buffet" },
          ].map((s, i) => (
            <div key={i} className="bg-cream border border-cream-mid rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-beige-dark flex items-center justify-center mx-auto mb-3">
                {s.icon}
              </div>
              <p className="text-brown font-semibold">{s.label}</p>
              <p className="text-brown-muted text-sm font-light">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
