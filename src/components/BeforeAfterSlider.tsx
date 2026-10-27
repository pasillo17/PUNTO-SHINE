import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, SlidersHorizontal, Check } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section id="comparador" className="py-20 bg-neutral-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <Sparkles size={13} />
            <span>Resultados Reales de Showroom</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Antes y Después de la Corrección
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Deslizá el cursor para observar cómo el pulido multi-etapa y el sellado cerámico eliminan los micro-rayones (swirls) causados por lavados incorrectos.
          </p>
        </div>

        {/* Interactive Comparison Box */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative h-[360px] sm:h-[460px] md:h-[520px] rounded-2xl overflow-hidden select-none border border-neutral-800 shadow-2xl cursor-ew-resize bg-neutral-900"
          >
            {/* AFTER: Flawless mirror ceramic finish (Full layer) */}
            <div className="absolute inset-0">
              <img
                src="/src/assets/images/paint_correction_swirls_1793062255355.jpg"
                alt="Pintura corregida y sellada cerámicamente en Punto Shine Detailing"
                className="w-full h-full object-cover filter brightness-110 contrast-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-5 right-5 bg-neutral-950/85 backdrop-blur-md border border-neutral-700/80 px-3.5 py-1.5 rounded-lg text-xs font-bold text-blue-400 flex items-center gap-1.5 shadow-lg">
                <Check size={14} className="text-blue-400" />
                <span>DESPUÉS: Punto Shine 9H & Gloss Espejo</span>
              </div>
            </div>

            {/* BEFORE: Dull, swirled paint (Clipped layer) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div
                className="relative h-full"
                style={{
                  width: containerRef.current
                    ? `${containerRef.current.offsetWidth}px`
                    : '100%',
                }}
              >
                <img
                  src="/src/assets/images/paint_correction_swirls_1793062255355.jpg"
                  alt="Pintura con rayas de lavado y desgaste antes del detailing"
                  className="w-full h-full object-cover filter brightness-[0.75] contrast-[0.85] sepia-[0.35] blur-[0.4px]"
                  referrerPolicy="no-referrer"
                />
                {/* Simulated swirl scratches overlay */}
                <div
                  className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.4) 0%, transparent 60%), repeating-radial-gradient(circle at 45% 45%, transparent 0, transparent 4px, rgba(255,255,255,0.18) 5px, transparent 7px)`,
                  }}
                />
              </div>

              <div className="absolute bottom-5 left-5 bg-neutral-950/85 backdrop-blur-md border border-neutral-700/80 px-3.5 py-1.5 rounded-lg text-xs font-bold text-neutral-300 shadow-lg">
                <span>ANTES: Swirls, Opacidad y Micro-Rayas</span>
              </div>
            </div>

            {/* Vertical Divider Line with blue glow handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.8)] cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-neutral-950 border-2 border-blue-500 flex items-center justify-center text-blue-500 shadow-xl shadow-blue-600/40">
                <SlidersHorizontal size={16} />
              </div>
            </div>
          </div>

          {/* Quick preset percentage controls */}
          <div className="mt-4 flex items-center justify-between text-xs text-neutral-400">
            <span>Arrastrá para interactuar</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setSliderPosition(20)}
                className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded hover:border-blue-500 text-neutral-300 transition-colors cursor-pointer"
              >
                20%
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(50)}
                className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded hover:border-blue-500 text-neutral-300 transition-colors cursor-pointer"
              >
                50% (Centro)
              </button>
              <button
                type="button"
                onClick={() => setSliderPosition(80)}
                className="px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded hover:border-blue-500 text-neutral-300 transition-colors cursor-pointer"
              >
                80%
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
