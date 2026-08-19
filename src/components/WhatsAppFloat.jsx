import React from 'react';

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/34600112233?text=Hola,%20quisiera%20solicitar%20información%20sobre%20sus%20servicios."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      class="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
    >
      <span class="absolute right-16 px-3 py-1.5 bg-slate-900 text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block">
        ¡Hola! ¿En qué podemos ayudarte?
      </span>

      <div class="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 animate-pulse-glow">
        <i class="fa-brands fa-whatsapp text-3xl"></i>
      </div>
    </a>
  );
}
