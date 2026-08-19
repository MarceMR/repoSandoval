import React from 'react';

export default function Toast({ show }) {
  if (!show) return null;

  return (
    <div class="fixed top-24 right-6 z-50 max-w-md bg-emerald-600 text-white p-4 rounded-2xl shadow-2xl border border-emerald-500 flex items-start space-x-3 transition-all duration-300 animate-bounce">
      <i class="fa-solid fa-circle-check text-2xl shrink-0"></i>
      <div>
        <h4 class="font-bold text-sm">¡Mensaje Enviado con Éxito!</h4>
        <p class="text-xs opacity-90">Gracias por contactarnos. Un consultor se pondrá en contacto contigo en breve.</p>
      </div>
    </div>
  );
}
