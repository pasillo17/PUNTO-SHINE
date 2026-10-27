import React from 'react';
import { Shield, CheckCircle, ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../assets/images.ts';

interface ServiceItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  highlights: string[];
  duration: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 'ceramic',
    title: 'Tratamientos Cerámicos 9H',
    category: 'Protección Extrema',
    image: ASSETS.ceramic,
    description:
      'Coating de dióxido de silicio (SiO2) que genera una capa de cristalización sobre la laca. Brinda resistencia a rayas ligeras, protección química frente a excrementos de pájaros y una hidrofobia extrema que repele el agua.',
    highlights: [
      'Dureza 9H y brillo espejo de profundidad',
      'Efecto autolimpiante con hidrofobia total',
      'Duración certificada de 24 a 36 meses',
      'Garantía escrita y seguimiento semestral',
    ],
    duration: '48 a 72 hs',
  },
  {
    id: 'interior',
    title: 'Detallado Interior Profundo',
    category: 'Restauración de Habitáculo',
    image: ASSETS.interior,
    description:
      'Limpieza integral a vapor seco e inyección-extracción profunda de tapizados de tela y cuero. Desinfección y descontaminación de ductos de climatización, alfombras y paneles con acondicionador mate original.',
    highlights: [
      'Inyección y extracción de manchas en tapizados',
      'Limpieza y nutrición de cuero con terminación original',
      'Desinfección de ductos de aire acondicionado a vapor',
      'Protección UV para tableros y plásticos',
    ],
    duration: '24 a 36 hs',
  },
  {
    id: 'engine',
    title: 'Detallado de Vano Motor',
    category: 'Cuidado Mecánico y Estético',
    image: ASSETS.engine,
    description:
      'Limpieza técnica y desengrase seguro de vano motor mediante vapor y productos dieléctricos que preservan los componentes electrónicos y cableados. Acabado satinado anti-estático que repele la suciedad.',
    highlights: [
      'Protección de sensores, alternador y ECU',
      'Vapor a alta temperatura sin presión agresiva',
      'Acondicionador no graso de efecto satinado',
      'Facilita la detección de pérdidas mecánicas',
    ],
    duration: '4 a 6 hs',
  },
  {
    id: 'correction',
    title: 'Corrección de Pintura Multi-Paso',
    category: 'Perfección de Laca',
    image: ASSETS.paintCorrection,
    description:
      'Proceso minucioso de pulido técnico con pulidoras roto-orbitales Rupes y compuestos Menzerna/Koch Chemie. Eliminamos micro-rayas (swirls), marcas de agua ácida, hologramas y desgaste general de la pintura.',
    highlights: [
      'Medición previa con micrómetro digital de laca',
      'Eliminación de hasta el 95% de defectos visibles',
      'Claridad óptica y definición de reflejo total',
      'Pulido libre de hologramas en atmósfera controlada',
    ],
    duration: '36 a 48 hs',
  },
];

export const ServicesGrid: React.FC = () => {
  const scrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('presupuesto');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <Shield size={13} />
            <span>Servicios Profesionales Punto Shine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Especialistas en Cada Detalle
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Utilizamos maquinaria de precisión y productos químicos importados de Alemania, Japón y Reino Unido para garantizar resultados de concurso.
          </p>
        </div>

        {/* 2x2 Bento-Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="group bg-neutral-900/50 rounded-2xl border border-neutral-800/80 overflow-hidden hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container with subtle zoom */}
                <div className="relative h-64 sm:h-72 overflow-hidden bg-neutral-900">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-neutral-950/80 backdrop-blur-md border border-neutral-700/80 px-3 py-1 rounded-lg text-xs font-semibold text-blue-400">
                    {srv.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-neutral-900/90 text-[11px] text-neutral-300 px-2.5 py-1 rounded border border-neutral-700">
                    {srv.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-neutral-300 border-t border-neutral-800/80 pt-4">
                    {srv.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle size={14} className="text-blue-500 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="px-6 sm:px-7 pb-6 pt-2">
                <a
                  href="#presupuesto"
                  onClick={scrollToCalculator}
                  className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-blue-600 text-white font-semibold text-xs tracking-wide transition-colors group/btn cursor-pointer"
                >
                  <span>Calcular presupuesto para este servicio</span>
                  <ArrowUpRight size={16} className="text-blue-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
