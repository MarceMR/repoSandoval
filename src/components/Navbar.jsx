import React, { useState } from 'react';

export default function Navbar({ isDark, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Ventajas', href: '#por-que-elegirnos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header class="sticky top-0 z-50 w-full glass-panel border-b border-slate-200/60 dark:border-slate-800/80 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#inicio" class="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 via-brand-600 to-accent-teal flex items-center justify-center text-white shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform duration-300">
              <i class="fa-solid fa-chart-line text-lg"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                Sandoval <span class="text-brand-600 dark:text-brand-400 font-light">Consultoría</span>
              </span>
              <span class="text-[10px] font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">Servicios Corporativos</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                class="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Theme Switcher */}
          <div class="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Cambiar Tema"
              class="p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {isDark ? (
                <i class="fa-solid fa-sun text-lg text-amber-400"></i>
              ) : (
                <i class="fa-solid fa-moon text-lg"></i>
              )}
            </button>

            <a
              href="#contacto"
              class="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 rounded-xl shadow-md shadow-brand-600/25 hover:shadow-lg hover:shadow-brand-600/35 transition-all duration-300 transform active:scale-95"
            >
              <i class="fa-solid fa-calendar-check mr-2"></i> Pedir Cita
            </a>
          </div>

          {/* Mobile Buttons */}
          <div class="flex items-center space-x-2 md:hidden">
            <button
              onClick={toggleTheme}
              type="button"
              aria-label="Cambiar Tema Móvil"
              class="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
            >
              {isDark ? (
                <i class="fa-solid fa-sun text-base text-amber-400"></i>
              ) : (
                <i class="fa-solid fa-moon text-base"></i>
              )}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              class="p-2.5 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <i class={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div class="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-navy-900/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl transition-all">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              class="block px-4 py-3 rounded-xl text-base font-medium text-slate-800 dark:text-slate-200 hover:bg-brand-50 dark:hover:bg-slate-800/80 hover:text-brand-600"
            >
              {link.name}
            </a>
          ))}
          <div class="pt-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              class="flex items-center justify-center w-full py-3 px-5 text-base font-semibold text-white bg-brand-600 hover:bg-brand-700 rounded-xl shadow-md"
            >
              <i class="fa-solid fa-calendar-check mr-2"></i> Pedir Cita / Contactar
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
