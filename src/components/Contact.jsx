import React, { useState } from 'react';

export default function Contact({ openPrivacyModal, onFormSubmitSuccess }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
    politica: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmitSuccess();
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: '',
      politica: false,
    });
  };

  return (
    <section id="contacto" class="py-20 md:py-28 bg-white dark:bg-navy-900 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="px-3.5 py-1.5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
            ¿Hablamos?
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Solicita tu cita o presupuesto sin compromiso
          </h2>
          <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Déjanos tu consulta y nos pondremos en contacto contigo en menos de 24 horas laborables.
          </p>
        </div>

        <div class="grid lg:grid-cols-12 gap-12">
          
          {/* Direct Contact Info */}
          <div class="lg:col-span-5 space-y-8">
            <div class="bg-slate-50 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-200/80 dark:border-slate-700/60 space-y-6">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-4">
                Información de Contacto
              </h3>

              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Teléfono y WhatsApp</p>
                  <a href="https://wa.me/34600112233" target="_blank" rel="noopener noreferrer" class="text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    +34 600 11 22 33
                  </a>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Atención rápida por WhatsApp</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 rounded-xl bg-accent-teal text-white flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Correo Electrónico</p>
                  <a href="mailto:contacto@tudominio.com" class="text-base font-bold text-slate-900 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                    contacto@tudominio.com
                  </a>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Respuesta comercial en 24h</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Oficina Principal</p>
                  <p class="text-base font-bold text-slate-900 dark:text-white">Paseo de la Castellana 120, Madrid</p>
                  <p class="text-xs text-slate-500 dark:text-slate-400">España</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-clock"></i>
                </div>
                <div>
                  <p class="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Horario de Atención</p>
                  <p class="text-sm font-semibold text-slate-800 dark:text-slate-200">Lunes a Viernes: 09:00 - 19:00 h</p>
                  <p class="text-xs text-slate-500 dark:text-slate-400">Fines de semana con cita previa</p>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div class="lg:col-span-7">
            <form onSubmit={handleSubmit} class="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
              
              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Nombre Completo <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <i class="fa-solid fa-user"></i>
                    </span>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                      placeholder="Ej. Carlos Mendoza"
                      class="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Correo Electrónico <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <i class="fa-solid fa-envelope"></i>
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="carlos@empresa.com"
                      class="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="telefono" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Teléfono de Contacto
                  </label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <i class="fa-solid fa-phone"></i>
                    </span>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      placeholder="+34 600 000 000"
                      class="w-full pl-10 pr-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="servicio" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Servicio de Interés <span class="text-red-500">*</span>
                  </label>
                  <div class="relative">
                    <span class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-slate-400">
                      <i class="fa-solid fa-list-check"></i>
                    </span>
                    <select
                      id="servicio"
                      name="servicio"
                      required
                      value={formData.servicio}
                      onChange={handleChange}
                      class="w-full pl-10 pr-8 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all appearance-none"
                    >
                      <option value="" disabled>Selecciona una opción</option>
                      <option value="Consultoría Estratégica">Consultoría Estratégica & Negocios</option>
                      <option value="Transformación Digital">Transformación Digital & Cloud</option>
                      <option value="Asesoría Legal y Fiscal">Asesoría Legal & Fiscal</option>
                      <option value="Branding y Marketing">Branding & Posicionamiento</option>
                      <option value="Otro">Otro servicio / Consulta general</option>
                    </select>
                    <span class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none text-slate-400">
                      <i class="fa-solid fa-chevron-down text-xs"></i>
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" class="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Mensaje / Detalle de la Consulta <span class="text-red-500">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="4"
                  required
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos brevemente las necesidades de tu empresa..."
                  class="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                ></textarea>
              </div>

              <div class="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="politica"
                  name="politica"
                  required
                  checked={formData.politica}
                  onChange={handleChange}
                  class="mt-1 h-4 w-4 text-brand-600 rounded border-slate-300 focus:ring-brand-500"
                />
                <label htmlFor="politica" class="text-xs text-slate-600 dark:text-slate-400">
                  He leído y acepto la{' '}
                  <button
                    type="button"
                    onClick={openPrivacyModal}
                    class="text-brand-600 dark:text-brand-400 underline"
                  >
                    Política de Privacidad
                  </button>{' '}
                  y el tratamiento de mis datos para responder a la consulta.
                </label>
              </div>

              <button
                type="submit"
                class="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 rounded-xl shadow-lg shadow-brand-600/30 hover:shadow-brand-600/40 transition-all duration-300"
              >
                <i class="fa-solid fa-paper-plane mr-2"></i> Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
