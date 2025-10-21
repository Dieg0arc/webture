"use client";

import UseAnimations from "react-useanimations";
import mail from "react-useanimations/lib/mail";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573046565684?text=Hola%20Webture,%20quiero%20informaci%C3%B3n"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg hover:bg-green-600 transition animate-fadeInUp"
      aria-label="Contactar por WhatsApp"
    >
      <UseAnimations
        animation={mail}
        size={24}
        strokeColor="#ffffff"
        autoplay
        loop
        speed={0.5}
      />
      <span>WhatsApp</span>
    </a>
  );
}
