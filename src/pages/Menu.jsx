import { FaLeaf } from 'react-icons/fa'
import { MENU } from '../data'

export default function Menu() {
  return (
    <div className="pt-24 pb-16 px-6 bg-beige min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-brown mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Our Menu
        </h1>
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="h-px w-12 bg-olive/30"></div>
          <FaLeaf className="text-olive text-sm" />
          <div className="h-px w-12 bg-olive/30"></div>
        </div>

        {MENU.map((cat, ci) => (
          <div key={ci} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-full bg-olive/10 flex items-center justify-center">
                <FaLeaf className="text-olive text-xs" />
              </div>
              <h2 className="text-2xl text-olive" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {cat.category}
              </h2>
              <div className="flex-1 h-px bg-cream-mid"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.items.map((item, ii) => (
                <div key={ii} className="bg-cream border border-cream-mid rounded-xl p-5 hover:shadow-md hover:border-olive/20 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-brown font-semibold text-base">{item.name}</h3>
                    <span className="text-olive font-bold whitespace-nowrap ml-2 bg-olive/10 px-2 py-0.5 rounded-full text-sm">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-brown-muted text-sm font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-brown-muted text-sm mt-8 font-light italic">
          All dishes are 100% vegetarian. Prices are inclusive of taxes.
        </p>
      </div>
    </div>
  )
}
