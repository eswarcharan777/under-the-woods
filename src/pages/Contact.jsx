import { FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaClock, FaLeaf } from 'react-icons/fa'
import { STORE } from '../data'

export default function Contact() {
  return (
    <div className="pt-28 pb-16 px-6 bg-beige min-h-screen">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-brown mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Visit Us
        </h1>
        <div className="flex items-center justify-center gap-3 mb-14">
          <div className="h-px w-12 bg-olive/30"></div>
          <FaLeaf className="text-olive text-sm" />
          <div className="h-px w-12 bg-olive/30"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
          {[
            { icon: <FaPhoneAlt className="text-olive text-lg" />, title: "Phone", value: STORE.phone, href: `tel:${STORE.phone.replace(/\s/g, '')}` },
            { icon: <FaClock className="text-olive text-lg" />, title: "Hours", value: STORE.hours },
            { icon: <FaMapMarkerAlt className="text-olive text-lg" />, title: "Address", value: STORE.address },
            { icon: <FaWhatsapp className="text-green-600 text-lg" />, title: "WhatsApp", value: "Message us on WhatsApp", href: `https://wa.me/91${STORE.whatsapp}` },
          ].map((c, i) => (
            <div key={i} className="bg-cream border border-cream-mid rounded-xl p-8 text-center hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-olive/10 flex items-center justify-center mx-auto mb-4">
                {c.icon}
              </div>
              <h3 className="text-brown font-semibold text-lg mb-2">{c.title}</h3>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noopener noreferrer" className="text-brown-muted hover:text-olive no-underline transition-colors font-light">
                  {c.value}
                </a>
              ) : (
                <p className="text-brown-muted font-light leading-relaxed">{c.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-cream-mid shadow-sm max-w-3xl mx-auto mb-12">
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

        <a
          href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation at Under The Woods.`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 bg-olive hover:bg-olive-dark text-cream px-12 py-4 rounded-full font-semibold text-lg no-underline transition-colors shadow-md"
        >
          <FaWhatsapp className="text-xl" />
          <span>Reserve via WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
