import React from 'react';

export default function Hero() {
  return (
    <section id="inicio" class="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden hero-gradient">
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/10 dark:bg-brand-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-1/3 right-10 w-80 h-80 bg-accent-teal/10 dark:bg-accent-teal/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text */}
          <div class="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 dark:bg-brand-950/60 border border-brand-200/80 dark:border-brand-800/60 text-brand-700 dark:text-brand-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span class="flex h-2 w-2 rounded-full bg-accent-emerald animate-pulse"></span>
              <i class="fa-solid fa-shield-halved text-brand-500"></i>
              <span>Líderes en Soluciones Estratégicas y Consultoría Corporativa</span>
            </div>

            <h1 class="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Impulsamos el crecimiento y la <span class="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-teal bg-clip-text text-transparent">rentabilidad de tu empresa</span>
            </h1>

            <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Brindamos consultoría estratégica a medida, asesoría profesional y soluciones tecnológicas integrales diseñadas para optimizar procesos y maximizar tus resultados de negocio.
            </p>

            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#contacto" class="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-brand-600 to-brand-700 hover:from-brand-500 hover:to-brand-600 rounded-xl shadow-xl shadow-brand-600/30 hover:shadow-brand-600/40 hover:-translate-y-0.5 transition-all duration-300">
                <span>Solicitar Asesoría Gratuita</span>
                <i class="fa-solid fa-arrow-right ml-3"></i>
              </a>
              <a href="#servicios" class="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 rounded-xl shadow-sm hover:shadow transition-all duration-300">
                <i class="fa-solid fa-cubes text-brand-500 mr-2.5"></i>
                <span>Ver Servicios</span>
              </a>
            </div>

            <div class="pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              <div>
                <p class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">+500</p>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Proyectos Exitosos</p>
              </div>
              <div>
                <p class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">99%</p>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Satisfacción Cliente</p>
              </div>
              <div>
                <p class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">12+</p>
                <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">Años Experiencia</p>
              </div>
            </div>

          </div>

          {/* Right Card Visual */}
          <div class="lg:col-span-5 relative">
            <div class="relative mx-auto max-w-md lg:max-w-none">
              <div class="absolute -inset-1.5 bg-gradient-to-r from-brand-600 to-accent-teal rounded-3xl blur opacity-30 dark:opacity-50"></div>
              
              <div class="relative bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 dark:border-slate-800 space-y-6">
                
                <div class="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <i class="fa-solid fa-chart-pie text-lg"></i>
                    </div>
                    <div>
                      <h3 class="font-bold text-slate-900 dark:text-white text-sm">Rendimiento Corporativo</h3>
                      <p class="text-xs text-slate-500 dark:text-slate-400">Actualizado en tiempo real</p>
                    </div>
                  </div>
                  <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300">
                    +34.8% Crecimiento
                  </span>
                </div>

                <div class="space-y-3">
                  <div class="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <span>Estrategia & Optimización</span>
                    <span class="text-slate-900 dark:text-white font-bold">98/100</span>
                  </div>
                  <div class="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div class="h-full bg-gradient-to-r from-brand-600 to-accent-teal rounded-full w-[94%] transition-all duration-1000"></div>
                  </div>
                </div>

                <div class="space-y-3 pt-2">
                  <div class="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <i class="fa-solid fa-circle-check text-brand-500 text-lg"></i>
                    <span class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">Auditoría inicial de procesos sin coste</span>
                  </div>
                  <div class="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <i class="fa-solid fa-circle-check text-brand-500 text-lg"></i>
                    <span class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">Asignación de consultor sénior dedicado</span>
                  </div>
                  <div class="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                    <i class="fa-solid fa-circle-check text-brand-500 text-lg"></i>
                    <span class="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">Respuesta garantizada en menos de 24 horas</span>
                  </div>
                </div>

                <a href="#contacto" class="flex items-center justify-center w-full py-3 text-sm font-semibold text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/60 hover:bg-brand-100 dark:hover:bg-brand-900/60 rounded-xl transition-colors">
                  <span>Agendar primera sesión de diagnóstico</span>
                  <i class="fa-solid fa-chevron-right ml-2 text-xs"></i>
                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
