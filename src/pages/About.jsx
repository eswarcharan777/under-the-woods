import { FaStar, FaLeaf, FaHeart } from 'react-icons/fa'
import { STORE } from '../data'

export default function About() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">Our Story</h1>
        <p className="text-center text-gray-text mb-12">Where good food meets great memories</p>

        <div className="bg-dark-card border border-white/5 rounded-2xl p-8 md:p-12 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <FaLeaf className="text-green-400 text-2xl" />
            <h2 className="text-2xl font-bold text-white">About {STORE.name}</h2>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">{STORE.about}</p>
          <p className="text-gray-300 leading-relaxed">
            Whether you're celebrating a special occasion, enjoying a family meal, or simply craving delicious vegetarian food, Under The Woods welcomes you with warm hospitality and unforgettable flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { icon: <FaStar className="text-yellow-400 text-xl" />, label: `${STORE.rating} Stars`, sub: `${STORE.reviews} reviews` },
            { icon: <FaLeaf className="text-green-400 text-xl" />, label: "Pure Veg", sub: "100% Vegetarian" },
            { icon: <FaHeart className="text-red-400 text-xl" />, label: "All You Can Eat", sub: "Unlimited buffet" },
          ].map((s, i) => (
            <div key={i} className="bg-dark border border-white/5 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-2">{s.icon}</div>
              <p className="text-white font-semibold">{s.label}</p>
              <p className="text-gray-text text-sm">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
