import { FaLeaf } from 'react-icons/fa'
import { MENU } from '../data'

export default function Menu() {
  return (
    <div className="pt-28 pb-16 px-6 bg-beige min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brown mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Our Menu
        </h1>
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="h-px w-12 bg-olive/30"></div>
          <FaLeaf className="text-olive text-sm" />
          <div className="h-px w-12 bg-olive/30"></div>
        </div>

        {MENU.map((cat, ci) => (
          <div key={ci} className="mb-16">
            <h2 className="text-2xl md:text-3xl text-olive mb-8" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {cat.category}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {cat.items.map((item, ii) => (
                <div key={ii} className="bg-cream border border-cream-mid rounded-xl p-6 text-center hover:shadow-md hover:border-olive/20 transition-all">
                  <h3 className="text-brown font-semibold text-lg mb-1">{item.name}</h3>
                  <span className="inline-block text-olive font-bold bg-olive/10 px-4 py-1 rounded-full text-sm mb-3">
                    ₹{item.price}
                  </span>
                  <p className="text-brown-muted text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-brown-muted text-sm mt-4 font-light italic">
          All dishes are 100% vegetarian. Prices are inclusive of taxes.
        </p>
      </div>
    </div>
  )
}
