import React from 'react';

export default function About() {
  const points = [
    {
      id: 1,
      title: "1. Experiencia Comprobada & Liderazgo",
      desc: "Contamos con un equipo multidisciplinar con amplia experiencia directiva en sectores clave de la economía.",
      icon: "fa-briefcase",
      bg: "bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-400"
    },
    {
      id: 2,
      title: "2. Rapidez y Atención Personalizada",
      desc: "Sin burocracia innecesaria. Respuestas ágiles, seguimiento directo de tu caso y comunicación fluida en todo momento.",
      icon: "fa-bolt",
      bg: "bg-teal-50 dark:bg-teal-950 text-teal-600 dark:text-teal-400"
    },
    {
      id: 3,
      title: "3. Enfoque 100% Orientado a Resultados",
      desc: "Trabajamos bajo indicadores clave de rendimiento (KPIs) definidos previamente para garantizar un retorno de inversión claro.",
      icon: "fa-arrow-trend-up",
      bg: "bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400"
    }
  ];

  return (
    <section id="sobre-nosotros" class="py-20 md:py-28 bg-slate-50 dark:bg-navy-950 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Image */}
          <div class="lg:col-span-5 relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="Equipo de trabajo consultoría corporativa"
                class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent"></div>

              <div class="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-5 border border-white/20 text-white">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 rounded-xl bg-brand-600 flex items-center justify-center text-white text-xl">
                    <i class="fa-solid fa-award"></i>
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white text-sm">Compromiso de Excelencia</h4>
                    <p class="text-xs text-slate-600 dark:text-slate-300">Asesoramiento transparente y metodología orientada a resultados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Story */}
          <div id="por-que-elegirnos" class="lg:col-span-7 space-y-8">
            <div class="space-y-4">
              <span class="px-3.5 py-1.5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
                Sobre Nosotros & Por Qué Elegirnos
              </span>
              <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Tu aliado estratégico para tomar decisiones inteligentes y rentables
              </h2>
              <p class="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                Somos una firma de consultoría con años de trayectoria guiando a profesionales, pymes y grandes empresas. Combinamos visión analítica, agilidad tecnológica y atención cercana para aportar soluciones concretas y duraderas.
              </p>
            </div>

            <div class="space-y-6">
              {points.map((pt) => (
                <div
                  key={pt.id}
                  class="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div class={`w-12 h-12 rounded-xl ${pt.bg} flex items-center justify-center text-xl shrink-0`}>
                    <i class={`fa-solid ${pt.icon}`}></i>
                  </div>
                  <div>
                    <h3 class="text-lg font-bold text-slate-900 dark:text-white">{pt.title}</h3>
                    <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
