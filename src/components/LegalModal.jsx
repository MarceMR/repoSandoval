import React from 'react';

export default function LegalModal({ isOpen, onClose, modalKey }) {
  if (!isOpen) return null;

  const legalTexts = {
    modalAvisoLegal: {
      title: "Aviso Legal",
      content: (
        <>
          <p><strong>1. Datos Identificativos:</strong> En cumplimiento con el deber de información recogido en la legislación vigente, se informa que este sitio web es propiedad de <em>Sandoval Consultoría Corporativa S.L.</em>, con domicilio en Paseo de la Castellana 120, Madrid, España.</p>
          <p><strong>2. Propiedad Intelectual:</strong> Todos los contenidos (textos, logos, imágenes, estructura) son propiedad de la empresa o de terceros licenciatarios. Queda prohibida la reproducción no autorizada.</p>
          <p><strong>3. Responsabilidad:</strong> La empresa no se hace responsable de posibles errores en los contenidos ni de caídas temporales del servicio por mantenimiento informático.</p>
        </>
      )
    },
    modalPrivacidad: {
      title: "Política de Privacidad",
      content: (
        <>
          <p><strong>1. Responsable del Tratamiento:</strong> Sandoval Consultoría Corporativa S.L.</p>
          <p><strong>2. Finalidad:</strong> Recopilamos sus datos exclusivamente para gestionar las solicitudes de información, citas comerciales y prestación de los servicios contratados.</p>
          <p><strong>3. Legitimación:</strong> Consentimiento explícito del usuario al marcar la casilla de verificación en el formulario de contacto.</p>
          <p><strong>4. Derechos:</strong> Puede ejercitar sus derechos de acceso, rectificación, supresión y oposición enviando un correo a <code>contacto@tudominio.com</code>.</p>
        </>
      )
    },
    modalCookies: {
      title: "Política de Cookies",
      content: (
        <>
          <p>Utilizamos cookies propias y de terceros para mejorar la experiencia de navegación y analizar el tráfico de nuestro sitio web.</p>
          <p><strong>Cookies Técnicas:</strong> Necesarias para el correcto funcionamiento del sitio (ej. guardar su preferencia de modo oscuro/claro).</p>
          <p><strong>Cookies Analíticas:</strong> Nos permiten medir el número de visitantes y analizar estadísticamente el uso de la web.</p>
          <p>Puede cambiar la configuración de cookies en cualquier momento a través de los ajustes de su navegador.</p>
        </>
      )
    }
  };

  const activeModal = legalTexts[modalKey] || { title: '', content: null };

  return (
    <div
      onClick={onClose}
      class="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        class="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 relative"
      >
        <button
          type="button"
          onClick={onClose}
          class="absolute top-6 right-6 text-slate-400 hover:text-slate-600 dark:hover:text-white p-2 text-xl"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>

        <h3 class="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">
          {activeModal.title}
        </h3>

        <div class="text-sm text-slate-600 dark:text-slate-300 space-y-4 leading-relaxed">
          {activeModal.content}
        </div>

        <div class="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            class="px-6 py-2.5 bg-brand-600 text-white font-semibold rounded-xl text-sm hover:bg-brand-700"
          >
            Entendido / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
