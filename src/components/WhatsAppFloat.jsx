import { FaWhatsapp } from 'react-icons/fa'
import { STORE } from '../data'

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/91${STORE.whatsapp}?text=Hi! I'd like to make a reservation at Under The Woods.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg transition-transform hover:scale-110 no-underline"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}
