import React from 'react';

export default function Footer({ openModal }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-slate-900 text-slate-300 dark:bg-navy-950 border-t border-slate-800 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          <div class="lg:col-span-2 space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold">
                <i class="fa-solid fa-chart-line"></i>
              </div>
              <span class="text-xl font-extrabold text-white">
                Sandoval <span class="text-brand-400 font-light">Consultoría</span>
              </span>
            </div>
            <p class="text-sm text-slate-400 max-w-sm leading-relaxed">
              Firma especializada en servicios corporativos, consultoría estratégica y transformación digital para empresas exigentes.
            </p>
            <div class="flex space-x-4 pt-2">
              <a href="#" aria-label="LinkedIn" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Twitter / X" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <i class="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://wa.me/34600112233" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition-colors">
                <i class="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Navegación</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="#inicio" class="hover:text-brand-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" class="hover:text-brand-400 transition-colors">Nuestros Servicios</a></li>
              <li><a href="#sobre-nosotros" class="hover:text-brand-400 transition-colors">Sobre Nosotros</a></li>
              <li><a href="#por-que-elegirnos" class="hover:text-brand-400 transition-colors">Ventajas Competitivas</a></li>
              <li><a href="#contacto" class="hover:text-brand-400 transition-colors">Contacto Directo</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Servicios</h4>
            <ul class="space-y-2.5 text-sm">
              <li><a href="#servicios" class="hover:text-brand-400 transition-colors">Consultoría Estratégica</a></li>
              <li><a href="#servicios" class="hover:text-brand-400 transition-colors">Transformación Digital</a></li>
              <li><a href="#servicios" class="hover:text-brand-400 transition-colors">Asesoría Legal & Fiscal</a></li>
              <li><a href="#servicios" class="hover:text-brand-400 transition-colors">Branding & Posicionamiento</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-sm font-bold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul class="space-y-2.5 text-sm">
              <li>
                <button type="button" onClick={() => openModal('modalAvisoLegal')} class="hover:text-brand-400 transition-colors text-left">
                  Aviso Legal
                </button>
              </li>
              <li>
                <button type="button" onClick={() => openModal('modalPrivacidad')} class="hover:text-brand-400 transition-colors text-left">
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button type="button" onClick={() => openModal('modalCookies')} class="hover:text-brand-400 transition-colors text-left">
                  Política de Cookies
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {currentYear} Sandoval Consultoría Corporativa. Todos los derechos reservados.</p>
          <p class="flex items-center gap-1">
            <span>Diseñado con excelencia profesional</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
