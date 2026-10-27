import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿Qué diferencia hay entre una protección acrílica y un tratamiento cerámico 9H?',
    answer:
      'La protección acrílica es un sellador polimérico que se adhiere a los microporos de la laca con una durabilidad de 6 a 8 meses, ideal como opción accesible para uso diario. El tratamiento cerámico es una cristalización líquida de nanopartículas de sílice (SiO2) que genera una capa rígida permanente de dureza 9H con duración de hasta 3 años, brindando mucha mayor resistencia química, efecto hidrofóbico superior y brillo espejo de exposición.',
  },
  {
    question: '¿El pulido elimina todas las rayas de mi auto?',
    answer:
      'Elimina entre el 80% y el 95% de las rayas superficiales (swirls de lavados incorrectos, marcas de secado y opacidad). Aquellas rayas profundas que hayan traspasado la laca transparente hasta la chapa o la base de color no pueden eliminarse por completo mediante pulido para no comprometer la integridad estructural de la pintura, pero se disimulan drásticamente.',
  },
  {
    question: '¿Cuánto tiempo tiene que quedar el vehículo en el taller de Punto Shine?',
    answer:
      'Para un tratamiento cerámico completo o corrección multi-paso, el tiempo promedio es de 48 a 72 horas. Esto incluye el proceso de descontaminado profundo, enmascarado, horas intensivas de pulido técnico panel por panel, aplicación en ambiente climatizado y el tiempo de curado inicial obligatorio libre de humedad.',
  },
  {
    question: '¿Cómo debo lavar el auto después del tratamiento cerámico?',
    answer:
      'Recomendamos lavar con el método de los dos baldes, guante de microfibra de pelo largo y shampoo con pH neutro. Evitá totalmente los lavaderos automáticos con rodillos y espumas agresivas con soda cáustica. En Punto Shine también te asesoramos con los productos adecuados de mantenimiento.',
  },
  {
    question: '¿Qué medios de pago aceptan?',
    answer:
      'Aceptamos efectivo, transferencias bancarias directas, tarjetas de débito y tarjetas de crédito en cuotas. Al reservar el turno se solicita una seña para congelar el valor del presupuesto y reservar el espacio en taller.',
  },
  {
    question: '¿Cómo coordino el turno una vez que coticé en la web?',
    answer:
      'Hacé clic en el botón verde "Enviar Presupuesto por WhatsApp" en el cotizador interactivo. Te abrirá directamente una conversación con nosotros en Punto Shine con el desglose exacto de lo que elegiste para coordinar el día de ingreso.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-neutral-900/50 border-t border-neutral-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <HelpCircle size={14} />
            <span>Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Todo lo que Necesitás Saber
          </h2>
          <p className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed">
            Resolvemos las dudas más habituales sobre nuestros tratamientos y cuidados posteriores en Punto Shine.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-neutral-950 rounded-xl border border-neutral-800/80 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-5 sm:px-6 py-4.5 flex items-center justify-between gap-4 text-white hover:text-blue-400 transition-colors cursor-pointer"
                >
                  <span className="font-semibold text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-blue-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-900">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
