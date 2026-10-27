import React from 'react';
import { ShieldCheck, Sparkles, ArrowRight, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pricingData.ts';
import { ASSETS } from '../assets/images.ts';

export const Hero: React.FC = () => {
  const scrollToPresupuesto = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('presupuesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden w-full">
      {/* Background Image with dark vignette and scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="Punto Shine Detailing estética vehicular en La Plata"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-115"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40" />
        <div className="absolute inset-0 bg-radial-at-c from-blue-950/20 via-neutral-950/50 to-neutral-950/95" />
      </div>

      {/* Ambient Deep Blue Radial Glow Aura (Rich Royal Blue, not celeste) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[350px] sm:h-[450px] bg-blue-700/20 rounded-full blur-[130px] pointer-events-none animate-aura z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Kicker Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-600/40 bg-neutral-950/80 backdrop-blur-md text-xs font-medium text-neutral-300 mb-6 shadow-lg shadow-blue-950/60">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
          <span>Estética Vehicular de Precisión · La Plata</span>
          <span className="text-neutral-600">|</span>
          <span className="text-blue-400 font-semibold">Turnos Programados</span>
        </div>

        {/* Headline (No logo in Hero, strong pure blue accents) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-white uppercase max-w-4xl mx-auto leading-[1.08] text-balance">
          Tratamientos Cerámicos 9H &{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500">
            Corrección de Pintura
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-sm sm:text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed text-balance">
          Cuidamos cada milímetro de tu vehículo con productos importados y maquinaria orbital Rupes. Cotizá en 1 minuto con valores actualizados en La Plata.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full max-w-md mx-auto">
          <a
            href="#presupuesto"
            onClick={scrollToPresupuesto}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-xl shadow-blue-600/35 border border-blue-500/50 transition-all transform hover:-translate-y-0.5 active:scale-95 cursor-pointer animate-specular"
          >
            <span>Calcular Presupuesto</span>
            <ArrowRight size={17} />
          </a>

          <a
            href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
              'Hola Punto Shine! Quisiera hacer una consulta personalizada para mi auto.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 rounded-xl transition-all hover:border-emerald-500/50 active:scale-95"
          >
            <MessageCircle size={17} className="text-emerald-400" />
            <span>Consultar WhatsApp</span>
          </a>
        </div>

        {/* Quality Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <ShieldCheck size={15} className="text-blue-500" />
            <span>Garantía Escrita Punto Shine</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles size={15} className="text-blue-500" />
            <span>Productos Oficiales Gyeon, Rupes & CarPro</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-500 font-bold">12x</span>
            <span>Cuotas y Transferencia Bancaria</span>
          </div>
        </div>

        {/* Metrics Row */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl mx-auto">
          <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tabular-nums">
              +850
            </div>
            <div className="text-[10px] sm:text-xs text-neutral-400 mt-0.5 uppercase tracking-wider">
              Autos Detallados
            </div>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-blue-500 tabular-nums text-glow">
              9H
            </div>
            <div className="text-[10px] sm:text-xs text-neutral-400 mt-0.5 uppercase tracking-wider">
              Dureza Cerámica
            </div>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-white tabular-nums">
              5.0 ★
            </div>
            <div className="text-[10px] sm:text-xs text-neutral-400 mt-0.5 uppercase tracking-wider">
              Google Reviews
            </div>
          </div>

          <div className="p-3 rounded-xl bg-neutral-950/60 border border-neutral-800/80 backdrop-blur-sm">
            <div className="text-2xl sm:text-3xl font-extrabold font-display text-blue-500 tabular-nums">
              100%
            </div>
            <div className="text-[10px] sm:text-xs text-neutral-400 mt-0.5 uppercase tracking-wider">
              Satisfacción
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
