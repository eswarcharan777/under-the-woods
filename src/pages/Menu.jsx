import { MENU } from '../data'

export default function Menu() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">Our Menu</h1>
        <p className="text-center text-gray-text mb-12">A curated selection of pure vegetarian delights</p>

        {MENU.map((cat, ci) => (
          <div key={ci} className="mb-12">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b border-white/10 pb-3">
              {cat.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {cat.items.map((item, ii) => (
                <div key={ii} className="bg-dark-card border border-white/5 rounded-xl p-5 hover:border-primary/30 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-semibold">{item.name}</h3>
                    <span className="text-primary font-bold whitespace-nowrap ml-2">₹{item.price}</span>
                  </div>
                  <p className="text-gray-text text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
