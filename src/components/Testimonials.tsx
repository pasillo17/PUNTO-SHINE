import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

interface Review {
  name: string;
  vehicle: string;
  city: string;
  rating: number;
  date: string;
  service: string;
  comment: string;
}

const REVIEWS: Review[] = [
  {
    name: 'Facundo Rossi',
    vehicle: 'Volkswagen Vento 2.0 TSI (Negro Profundo)',
    city: 'La Plata',
    rating: 5,
    date: 'Marzo 2026',
    service: 'Tratamiento Cerámico 9H + Showroom Detail',
    comment:
      'El auto tenía muchas marcas circulares de lavados anteriores en estaciones de servicio. En Punto Shine me explicaron paso a paso con el micrómetro cómo iban a trabajarlo. El resultado final fue una locura: el negro quedó como un espejo líquido sin un solo holograma.',
  },
  {
    name: 'Gonzalo Benítez',
    vehicle: 'Toyota Hilux SRX 4x4',
    city: 'City Bell, La Plata',
    rating: 5,
    date: 'Febrero 2026',
    service: 'Cerámico Completo + Vano Motor + Interior',
    comment:
      'La uso bastante en el campo y tierra. El cerámico de Punto Shine hace que la lave con una hidrolavadora rápida y el barro caiga solo sin frotar. Además el vano motor quedó como recién salido de fábrica. Super recomendables.',
  },
  {
    name: 'Matías Larrea',
    vehicle: 'Audi A3 Sportback',
    city: 'La Plata Centro',
    rating: 5,
    date: 'Enero 2026',
    service: 'Corrección 2 Pasos + Sellado de Cristales',
    comment:
      'Cotice en la web, les mandé el WhatsApp y al día siguiente ya tenía turno reservado. Cumplieron exactamente con los tiempos prometidos de entrega en el taller. La atención y prolijidad son inmejorables.',
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <ShieldCheck size={14} />
            <span>Opiniones Verificadas</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            La confianza de los amantes de los autos en La Plata respalda nuestro compromiso diario con la excelencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-neutral-900/40 p-6 sm:p-7 rounded-2xl border border-neutral-800/80 hover:border-blue-500/30 transition-all flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="text-amber-400 fill-amber-400"
                    />
                  ))}
                  <span className="text-xs font-bold text-neutral-400 ml-2">
                    5.0 / 5.0
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-800/80">
                <div className="font-bold text-white text-sm">{rev.name}</div>
                <div className="text-xs text-blue-400 font-medium mt-0.5">
                  {rev.vehicle}
                </div>
                <div className="flex items-center justify-between text-[11px] text-neutral-400 mt-2">
                  <span>{rev.city}</span>
                  <span>{rev.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
