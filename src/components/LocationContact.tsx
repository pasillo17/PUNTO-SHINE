import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Instagram,
  Send,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/pricingData.ts';

export const LocationContact: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    car: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const text = `Hola Punto Shine Detailing! Mi nombre es ${formData.name}.
Auto: ${formData.car || 'A definir'}
Teléfono: ${formData.phone}
Mensaje: ${formData.message || 'Quisiera consultar disponibilidad de turnos en el taller.'}`;

    const url = `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setFormSent(true);
  };

  return (
    <section id="ubicacion" className="py-20 bg-neutral-950 border-t border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3">
            <MapPin size={14} />
            <span>Taller Punto Shine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Ubicación & Contacto
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg leading-relaxed">
            Coordiná tu visita previa en La Plata para una inspección técnica de laca y presupuesto personalizado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info & Map: 7 cols */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Google Maps Card */}
              <div className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800/90 hover:border-blue-500/40 transition-all shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <MapPin size={18} />
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  Google Maps
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  Punto Shine Detailing
                </div>
                <div className="text-xs text-neutral-400">La Plata, Buenos Aires</div>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold mt-2"
                >
                  <span>Abrir en Google Maps</span>
                  <ExternalLink size={12} />
                </a>
              </div>

              {/* Working Hours */}
              <div className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800/90 shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <Clock size={18} />
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  Horarios de Atención
                </div>
                <div className="text-xs font-semibold text-white mt-1">
                  Lun a Sáb: 08:30 a 19:00 hs
                </div>
                <div className="text-xs text-neutral-400">Turnos previamente coordinados</div>
              </div>

              {/* WhatsApp */}
              <div className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800/90 hover:border-emerald-500/40 transition-all shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3">
                  <Phone size={18} />
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  WhatsApp Directo
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {BUSINESS_INFO.phoneDisplay}
                </div>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:underline mt-0.5 inline-block font-semibold"
                >
                  Escribir a WhatsApp →
                </a>
              </div>

              {/* Instagram */}
              <div className="bg-neutral-900/60 p-5 rounded-2xl border border-neutral-800/90 hover:border-blue-500/40 transition-all shadow-lg">
                <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                  <Instagram size={18} />
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">
                  Instagram Oficial
                </div>
                <div className="text-sm font-bold text-white mt-1">
                  {BUSINESS_INFO.instagram}
                </div>
                <a
                  href={BUSINESS_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 font-semibold mt-1"
                >
                  <span>Ver perfil y fotos</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Interactive Map Visual Link Container */}
            <div className="rounded-2xl border border-neutral-800 overflow-hidden h-64 sm:h-72 relative shadow-xl bg-neutral-900 group">
              <iframe
                title="Punto Shine Detailing La Plata Ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104698.8184511516!2d-57.9946808!3d-34.9204948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e62b1f0085a1%3A0x501309f41743220!2sLa%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-neutral-950/0 transition-colors pointer-events-none" />
              <div className="absolute top-3 left-3 bg-neutral-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-neutral-700/80 text-xs text-white font-medium flex items-center gap-2 shadow-lg">
                <MapPin size={14} className="text-blue-400" />
                <span>Punto Shine · La Plata, Buenos Aires</span>
              </div>
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-blue-600 hover:bg-blue-500 text-white px-3.5 py-2 rounded-lg text-xs font-bold tracking-wide shadow-xl flex items-center gap-1.5 transition-all"
              >
                <span>Cómo llegar en Google Maps</span>
                <ExternalLink size={13} />
              </a>
            </div>
          </div>

          {/* Direct Consultation Form: 5 cols */}
          <div className="lg:col-span-5 bg-neutral-900/60 p-6 sm:p-8 rounded-2xl border border-neutral-800/90 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-display text-white">
                Coordiná tu Turno en Punto Shine
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Completá tus datos y te responderemos de inmediato para verificar la disponibilidad de taller.
              </p>

              {formSent ? (
                <div className="mt-6 p-5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-center space-y-2">
                  <CheckCircle2 size={32} className="text-blue-400 mx-auto" />
                  <div className="font-bold text-white text-sm">
                    ¡Mensaje listo para enviar!
                  </div>
                  <p className="text-xs text-neutral-300">
                    Se abrió tu WhatsApp con los datos completados. Aguardamos tu mensaje en Punto Shine para confirmar tu turno.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSent(false)}
                    className="mt-3 text-xs text-blue-400 hover:underline cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Juan Pérez"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. 221 593-2566"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Vehículo (Marca, Modelo y Año)
                    </label>
                    <input
                      type="text"
                      value={formData.car}
                      onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                      placeholder="Ej. VW Golf GTI 2020"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Consulta o Estado del Vehículo
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="¿Qué servicio te interesa o qué detalles tiene la pintura?"
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-[0.98] cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Enviar Consulta a Punto Shine</span>
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/80 text-[11px] text-neutral-400 text-center">
              Respondemos habitualmente en menos de 15 minutos en horario comercial.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
