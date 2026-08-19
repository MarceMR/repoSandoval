import React from 'react';

export default function Services() {
  const servicesList = [
    {
      id: 1,
      title: "Consultoría Estratégica & Negocios",
      description: "Diagnóstico integral de la empresa, planes de viabilidad, reestructuración operativa y estrategias de escalabilidad acelerada.",
      icon: "fa-chart-line",
      iconBg: "bg-brand-600 shadow-brand-600/30",
      checkColor: "text-brand-500",
      features: [
        "Análisis de mercado competitivo",
        "Optimización de costes operativos",
        "Planes de expansión a 3-5 años"
      ],
      whatsappText: "Hola, quisiera solicitar información sobre el servicio de Consultoría Estratégica y Negocios."
    },
    {
      id: 2,
      title: "Transformación Digital & Cloud",
      description: "Digitalización de flujos de trabajo, automatización de procesos internos y migración segura a infraestructuras en la nube.",
      icon: "fa-laptop-code",
      iconBg: "bg-accent-teal shadow-teal-500/30",
      checkColor: "text-accent-teal",
      features: [
        "Implementación de sistemas ERP/CRM",
        "Automatización de flujos de trabajo",
        "Ciberseguridad y protección de datos"
      ],
      whatsappText: "Hola, quisiera solicitar información sobre el servicio de Transformación Digital."
    },
    {
      id: 3,
      title: "Asesoría Legal & Fiscal",
      description: "Planificación tributaria óptima, cumplimiento normativo (RGPD), auditorías preventivas y blindaje legal para pymes y corporaciones.",
      icon: "fa-shield-halved",
      iconBg: "bg-indigo-600 shadow-indigo-600/30",
      checkColor: "text-indigo-500",
      features: [
        "Planificación y optimización fiscal",
        "Auditoría mercantil y laboral",
        "Compliance y contratos corporativos"
      ],
      whatsappText: "Hola, quisiera solicitar información sobre el servicio de Asesoría Legal y Fiscal."
    },
    {
      id: 4,
      title: "Branding & Posicionamiento",
      description: "Desarrollo de identidad corporativa memorable, estrategias de marketing B2B y campañas orientadas a la captación directa de clientes.",
      icon: "fa-bullseye",
      iconBg: "bg-amber-600 shadow-amber-600/30",
      checkColor: "text-amber-500",
      features: [
        "Rediseño e identidad de marca",
        "Estrategias de captación B2B",
        "Posicionamiento SEO corporativo"
      ],
      whatsappText: "Hola, quisiera solicitar información sobre el servicio de Branding y Posicionamiento."
    }
  ];

  return (
    <section id="servicios" class="py-20 md:py-28 bg-white dark:bg-navy-900 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span class="px-3.5 py-1.5 rounded-full bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300 text-xs font-bold uppercase tracking-wider">
            Soluciones Especializadas
          </span>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Nuestros Servicios Principales
          </h2>
          <p class="text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Diseñados para responder a los retos clave del mercado actual con máxima precisión, seguridad y retorno de inversión.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.id}
              class="group relative bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-7 border border-slate-200/80 dark:border-slate-700/60 hover:border-brand-500 dark:hover:border-brand-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <div class={`w-14 h-14 rounded-2xl ${service.iconBg} text-white flex items-center justify-center text-2xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <i class={`fa-solid ${service.icon}`}></i>
                </div>
                
                <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p class="text-sm text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul class="space-y-2.5 mb-8 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {service.features.map((feat, idx) => (
                    <li key={idx} class="flex items-center gap-2">
                      <i class={`fa-solid fa-check ${service.checkColor}`}></i>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/34600112233?text=${encodeURIComponent(service.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-100/70 dark:bg-emerald-950/60 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all duration-300 border border-emerald-300/50 dark:border-emerald-800/60"
              >
                <i class="fa-brands fa-whatsapp text-lg mr-2"></i>
                <span>Consultar por WhatsApp</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
