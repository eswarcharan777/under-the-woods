import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { STORE } from '../data'

export default function Contact() {
  return (
    <div className="pt-24 pb-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-2">Contact Us</h1>
        <p className="text-center text-gray-text mb-12">We'd love to hear from you</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {[
            { icon: <FaPhone className="text-primary text-xl" />, title: "Phone", value: STORE.phone, href: `tel:${STORE.phone.replace(/\s/g, '')}` },
            { icon: <FaClock className="text-primary text-xl" />, title: "Hours", value: STORE.hours },
            { icon: <FaMapMarkerAlt className="text-primary text-xl" />, title: "Address", value: STORE.address },
            { icon: <FaWhatsapp className="text-green-400 text-xl" />, title: "WhatsApp", value: "Message us on WhatsApp", href: `https://wa.me/91${STORE.whatsapp}` },
          ].map((c, i) => (
            <div key={i} className="bg-dark-card border border-white/5 rounded-xl p-6 flex gap-4 items-start">
              <div className="mt-1">{c.icon}</div>
              <div>
                <h3 className="text-white font-semibold mb-1">{c.title}</h3>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-primary no-underline transition-colors">
                    {c.value}
                  </a>
                ) : (
                  <p className="text-gray-300">{c.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl overflow-hidden border border-white/5">
          <iframe
            src={STORE.mapEmbed}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Under The Woods Location"
          />
        </div>

        <div className="text-center mt-10">
          <a
            href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation at Under The Woods.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-3.5 rounded-lg font-semibold text-lg no-underline transition-colors"
          >
            <FaWhatsapp className="text-xl" /> Reserve via WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
