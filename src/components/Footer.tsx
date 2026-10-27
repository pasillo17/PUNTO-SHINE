import React from 'react';
import { Phone, Instagram, MapPin, ArrowUp, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pricingData.ts';
import { ASSETS } from '../assets/images.ts';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950 border-t border-blue-500/15 text-neutral-400 text-xs relative pb-16 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.logo}
                alt="Punto Shine Detailing Logotipo Oficial"
                className="h-9 sm:h-11 w-auto object-contain logo-glow-subtle"
                referrerPolicy="no-referrer"
              />
              <span className="text-[10px] tracking-widest uppercase font-semibold text-blue-300 border border-blue-500/30 bg-blue-950/50 px-2 py-0.5 rounded">
                LA PLATA
              </span>
            </div>
            <p className="text-neutral-400 max-w-sm leading-relaxed text-xs">
              Centro especializado en estética vehicular premium en La Plata. Tratamientos cerámicos 9H, pulido técnico multi-paso, corrección de defectos e interior detailing.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-md hover:shadow-blue-500/20"
                aria-label="Instagram Punto Shine"
                title="Instagram @punto.shinedetailing"
              >
                <Instagram size={17} />
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-emerald-400 hover:border-emerald-500/50 transition-all shadow-md hover:shadow-emerald-500/20"
                aria-label="WhatsApp Punto Shine"
                title="WhatsApp 221 593-2566"
              >
                <Phone size={17} />
              </a>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 hover:text-blue-400 hover:border-blue-500/50 transition-all shadow-md hover:shadow-blue-500/20"
                aria-label="Google Maps Punto Shine"
                title="Ubicación en Google Maps"
              >
                <MapPin size={17} />
              </a>
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Navegación
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#servicios" className="hover:text-blue-400 transition-colors">
                  Servicios de Detailing
                </a>
              </li>
              <li>
                <a href="#presupuesto" className="hover:text-blue-300 transition-colors text-blue-400 font-semibold">
                  Cotizador de Presupuesto
                </a>
              </li>
              <li>
                <a href="#comparador" className="hover:text-blue-400 transition-colors">
                  Antes y Después
                </a>
              </li>
              <li>
                <a href="#proceso" className="hover:text-blue-400 transition-colors">
                  Protocolo de Trabajo
                </a>
              </li>
              <li>
                <a href="#ubicacion" className="hover:text-blue-400 transition-colors">
                  Ubicación & Turnos
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Datos de Contacto */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Punto Shine La Plata
            </div>
            <div className="space-y-2 text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-blue-400 shrink-0 mt-0.5" />
                <span>La Plata, Buenos Aires</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </div>
              <div className="pt-1">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-blue-400 hover:underline text-[11px]"
                >
                  <span>Ver en Google Maps</span>
                  <ExternalLink size={11} />
                </a>
              </div>
              <div className="text-[11px] text-neutral-400 pt-1">
                {BUSINESS_INFO.hours}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Punto Shine Detailing. Todos los derechos reservados. Presupuestos online referenciales sujetos a inspección ocular previa en taller.
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Action Button on Desktop */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
          'Hola Punto Shine Detailing! Quisiera hacer una consulta o pedir turno para mi vehículo.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp a Punto Shine"
        className="hidden lg:flex fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 p-3.5 rounded-full shadow-2xl shadow-emerald-500/40 transition-transform transform hover:scale-110 active:scale-95 items-center justify-center cursor-pointer animate-specular"
      >
        <Phone size={22} className="fill-neutral-950" />
      </a>
    </footer>
  );
};
