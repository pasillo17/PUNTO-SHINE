import React from 'react';
import { Droplet, Gauge, Sparkles, Award } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Lavado Técnico & Descontaminado',
    icon: Droplet,
    description:
      'Lavado de dos baldes con shampoo pH neutro, espumado Snow Foam y cepillos suaves de cerdas naturales. Descontaminado férrico en llantas y pasada de Clay Bar en toda la carrocería para extraer alquitrán y lluvia ácida.',
  },
  {
    step: '02',
    title: 'Diagnóstico & Micrómetro Digital',
    icon: Gauge,
    description:
      'Medimos el espesor de la laca en micras con instrumental digital en cada panel del vehículo para determinar con precisión la profundidad segura de corte y evitar desgastar la capa transparente original.',
  },
  {
    step: '03',
    title: 'Corrección Roto-Orbital Rupes',
    icon: Sparkles,
    description:
      'Enmascarado protector de molduras, gomas y plásticos. Pulido multi-etapa con máquinas orbitales Rupes BigFoot y compuestos de última generación para eliminar el 80-95% de rayas, marcas de agua y swirls.',
  },
  {
    step: '04',
    title: 'Sellado Cerámico & Curado',
    icon: Award,
    description:
      'Desengrase total con panel wipe para remover aceites residuales. Aplicación minuciosa del tratamiento cerámico 9H o sellador acrílico, y tiempo de curado térmico para fijar la máxima dureza y brillo espejo.',
  },
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section id="proceso" className="py-20 bg-neutral-900/40 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <span>Metodología de Trabajo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Cómo Trabajamos en Punto Shine
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Un protocolo artesanal y riguroso ejecutado en nuestro taller de La Plata, asegurando el máximo cuidado de cada milímetro de tu vehículo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="relative bg-neutral-950 p-6 sm:p-7 rounded-2xl border border-neutral-800/80 hover:border-blue-500/40 transition-all shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl sm:text-4xl font-black font-display text-blue-500/90">
                      {s.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-blue-400">
                      <Icon size={20} />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-3">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-900 text-[11px] text-neutral-500 uppercase tracking-widest font-semibold">
                  Paso {s.step} del protocolo
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
