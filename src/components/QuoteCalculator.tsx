import React, { useState, useMemo } from 'react';
import {
  Check,
  Phone,
  Clock,
  Sparkles,
  RotateCcw,
  Percent,
  Copy,
  Sliders,
} from 'lucide-react';
import {
  VEHICLE_TYPES,
  SERVICE_PACKAGES,
  EXTRA_SERVICES,
  BUSINESS_INFO,
} from '../data/pricingData.ts';

export const QuoteCalculator: React.FC = () => {
  // Selection states: initial null so nothing appears until user selects options
  const [selectedVehicleId, setSelectedVehicleId] = useState<string | null>(null);
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);

  // Client inputs
  const [vehicleModel, setVehicleModel] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Active items
  const vehicle = useMemo(
    () => VEHICLE_TYPES.find((v) => v.id === selectedVehicleId) || null,
    [selectedVehicleId]
  );
  const pkg = useMemo(
    () => SERVICE_PACKAGES.find((p) => p.id === selectedPackageId) || null,
    [selectedPackageId]
  );

  // Flag indicating user has selected both vehicle and package
  const hasSelection = Boolean(selectedVehicleId && selectedPackageId);

  // Toggle extra service
  const toggleExtra = (id: string) => {
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Pricing calculation
  const {
    packagePrice,
    extrasTotal,
    subtotal,
    comboDiscount,
    total,
    estimatedTime,
  } = useMemo(() => {
    if (!vehicle || !pkg) {
      return {
        packagePrice: 0,
        extrasTotal: 0,
        subtotal: 0,
        comboDiscount: 0,
        total: 0,
        estimatedTime: '',
      };
    }

    const mult = vehicle.multiplier;
    const packagePrice = Math.round(pkg.basePrice * mult);

    let extras = 0;
    selectedExtras.forEach((id) => {
      const extra = EXTRA_SERVICES.find((e) => e.id === id);
      if (extra) {
        if (id === 'interior_full') {
          extras += Math.round(extra.basePrice * mult);
        } else {
          extras += extra.basePrice;
        }
      }
    });

    const subtotal = packagePrice + extras;

    // 10% combo discount if Ceramic + Interior are chosen
    const isCeramic = pkg.id === 'ceramic_full' || pkg.id === 'ceramic_mid';
    const hasInterior = selectedExtras.includes('interior_full');
    const comboDiscount = isCeramic && hasInterior ? Math.round(subtotal * 0.1) : 0;
    const total = subtotal - comboDiscount;

    let time = '24 a 48 hs';
    if (pkg.id === 'ceramic_full') {
      time = '48 a 72 hs (Incluye curado)';
    } else if (pkg.id === 'express_wax') {
      time = '8 a 12 hs';
    } else if (pkg.id === 'custom') {
      time = '12 a 24 hs';
    }

    return {
      packagePrice,
      extrasTotal: extras,
      subtotal,
      comboDiscount,
      total,
      estimatedTime: time,
    };
  }, [vehicle, pkg, selectedExtras]);

  // Format currency in ARS
  const formatMoney = (val: number) => {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Build clean, short WhatsApp text with ZERO problematic emojis to avoid  errors
  const generateWhatsAppMessage = () => {
    if (!vehicle || !pkg) return `https://wa.me/${BUSINESS_INFO.whatsappRaw}`;

    const extrasText = selectedExtras.length > 0
      ? selectedExtras
          .map((id) => EXTRA_SERVICES.find((e) => e.id === id)?.shortName)
          .filter(Boolean)
          .join(', ')
      : 'Ninguno';

    const carText = vehicleModel.trim()
      ? `${vehicle.name} (${vehicleModel.trim()})`
      : vehicle.name;

    const greeting = clientName.trim()
      ? `Hola Punto Shine! Soy ${clientName.trim()}. Te paso mi cotización:`
      : 'Hola Punto Shine! Te paso la cotización que calculé en la web:';

    const text = `${greeting}

- Vehículo: ${carText}
- Tratamiento: ${pkg.name}
- Extras: ${extrasText}
- Total estimado: ${formatMoney(total)}

¿Tenés turno disponible esta semana?`;

    return `https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  // Copy clean summary to clipboard
  const copyToClipboard = () => {
    if (!vehicle || !pkg) return;

    const extrasText = selectedExtras.length > 0
      ? selectedExtras
          .map((id) => EXTRA_SERVICES.find((e) => e.id === id)?.shortName)
          .filter(Boolean)
          .join(', ')
      : 'Ninguno';

    const carText = vehicleModel.trim()
      ? `${vehicle.name} (${vehicleModel.trim()})`
      : vehicle.name;

    const text = `PRESUPUESTO PUNTO SHINE DETAILING
- Vehículo: ${carText}
- Tratamiento: ${pkg.name}
- Extras: ${extrasText}
- Total: ${formatMoney(total)}
Contacto: WhatsApp ${BUSINESS_INFO.phoneDisplay} · La Plata`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const resetAll = () => {
    setSelectedVehicleId(null);
    setSelectedPackageId(null);
    setSelectedExtras([]);
    setVehicleModel('');
    setClientName('');
  };

  return (
    <section id="presupuesto" className="py-14 sm:py-20 bg-neutral-900/60 border-y border-neutral-800/80 relative overflow-hidden">
      {/* Subtle background ambient blue glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-blue-700/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-600/10 border border-blue-600/30 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-3 shadow-md shadow-blue-950/40">
            <Sparkles size={13} className="text-blue-500" />
            <span>Cotizador Rápido Online</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Calculá tu Presupuesto al Instante
          </h2>
          <p className="mt-2 text-xs sm:text-base text-neutral-400">
            Elegí el tamaño de tu vehículo y el servicio que necesitás. El total estimado y la opción de consultar turno aparecerán al seleccionar tus opciones.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Controls: 7 cols */}
          <div className="lg:col-span-7 space-y-5">
            {/* PASO 1: TIPO DE VEHICULO */}
            <div className="bg-neutral-950/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-neutral-800/90 shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-blue-600/30">
                    1
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Tipo de Vehículo
                  </h3>
                </div>
                <span className="text-[11px] text-blue-400 font-medium">
                  {vehicle ? vehicle.name : 'Seleccioná una opción'}
                </span>
              </div>

              {/* Mobile optimized touch grid */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                {VEHICLE_TYPES.map((v) => {
                  const isSelected = selectedVehicleId === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVehicleId(v.id)}
                      className={`min-h-[56px] py-2.5 px-2 rounded-xl border text-center transition-all duration-200 flex flex-col items-center justify-center cursor-pointer ${
                        isSelected
                          ? 'border-blue-500 bg-blue-600/20 text-white glow-card-active'
                          : 'border-neutral-800 bg-neutral-900/50 hover:border-neutral-700 hover:bg-neutral-900/80 text-neutral-300'
                      }`}
                    >
                      <span className={`text-xs font-bold ${isSelected ? 'text-blue-400' : 'text-neutral-200'}`}>
                        {v.shortName}
                      </span>
                      <span className="text-[10px] text-neutral-400 truncate max-w-full block mt-0.5">
                        {v.examples.split(',')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Car Model Input */}
              <div className="mt-3.5 pt-3 border-t border-neutral-900">
                <input
                  type="text"
                  placeholder="Modelo exacto de tu auto (ej: Peugeot 208 2022)"
                  value={vehicleModel}
                  onChange={(e) => setVehicleModel(e.target.value)}
                  className="w-full bg-neutral-900/80 border border-neutral-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* PASO 2: TRATAMIENTO PRINCIPAL */}
            <div className="bg-neutral-950/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-neutral-800/90 shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-blue-600/30">
                    2
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Tratamiento Principal
                  </h3>
                </div>
                <span className="text-[11px] text-blue-400 font-semibold">
                  {pkg ? pkg.tag : 'Elegí el servicio'}
                </span>
              </div>

              <div className="space-y-2.5">
                {SERVICE_PACKAGES.map((p) => {
                  const isSelected = selectedPackageId === p.id;
                  const mult = vehicle ? vehicle.multiplier : 1.0;
                  const price = Math.round(p.basePrice * mult);

                  return (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPackageId(p.id)}
                      className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-blue-500 bg-blue-600/20 glow-card-active'
                          : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/70'
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                            isSelected
                              ? 'border-blue-400 bg-blue-600 text-white shadow-sm shadow-blue-400/50'
                              : 'border-neutral-700 bg-neutral-900'
                          }`}
                        >
                          {isSelected && <Check size={11} strokeWidth={3} />}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-bold text-xs sm:text-sm text-white">
                              {p.name}
                            </span>
                            {p.popular && (
                              <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded shadow-sm shadow-blue-600/40">
                                Más elegido
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-neutral-400 mt-0.5 line-clamp-1">
                            {p.description}
                          </div>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="text-sm sm:text-base font-bold font-display text-white tabular-nums">
                          {price > 0 ? formatMoney(price) : '$0'}
                        </div>
                        <div className="text-[10px] text-neutral-400">
                          {p.duration !== 'A coordinar' ? p.duration : 'Solo extras'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PASO 3: EXTRAS RECOMENDADOS */}
            <div className="bg-neutral-950/90 backdrop-blur-md p-4 sm:p-6 rounded-2xl border border-neutral-800/90 shadow-xl transition-all">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-md shadow-blue-600/30">
                    3
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                    Adicionales (Opcional)
                  </h3>
                </div>
                <span className="text-[11px] text-neutral-400">Podés sumar varios</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EXTRA_SERVICES.map((extra) => {
                  const isChecked = selectedExtras.includes(extra.id);
                  const mult = vehicle ? vehicle.multiplier : 1.0;
                  const price =
                    extra.id === 'interior_full'
                      ? Math.round(extra.basePrice * mult)
                      : extra.basePrice;

                  return (
                    <div
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`min-h-[52px] p-3 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-2.5 ${
                        isChecked
                          ? 'border-blue-500/80 bg-blue-600/15 glow-card-active'
                          : 'border-neutral-800 bg-neutral-900/40 hover:border-neutral-700 hover:bg-neutral-900/70'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                            isChecked
                              ? 'border-blue-400 bg-blue-600 text-white shadow-sm shadow-blue-400/50'
                              : 'border-neutral-700 bg-neutral-900'
                          }`}
                        >
                          {isChecked && <Check size={11} strokeWidth={3} />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-semibold text-white truncate">
                            {extra.shortName}
                          </div>
                          <div className="text-[10px] text-neutral-400 truncate">
                            {extra.duration}
                          </div>
                        </div>
                      </div>

                      <div className="text-xs font-bold font-display text-white tabular-nums shrink-0">
                        +{formatMoney(price)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Resumen Card: 5 cols (Desktop + Tablet) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
            <div className="bg-neutral-950/95 backdrop-blur-xl rounded-2xl border border-blue-500/25 p-5 sm:p-6 shadow-2xl relative overflow-hidden glow-card">
              <div className="flex items-center justify-between pb-3.5 border-b border-neutral-800">
                <div>
                  <h3 className="font-bold text-base text-white font-display">
                    Tu Presupuesto
                  </h3>
                  <div className="text-xs text-blue-400 font-medium">Punto Shine Detailing</div>
                </div>
                {hasSelection && (
                  <button
                    type="button"
                    onClick={resetAll}
                    className="inline-flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <RotateCcw size={11} />
                    <span>Reiniciar</span>
                  </button>
                )}
              </div>

              {/* IF OPTIONS ARE NOT SELECTED: Show clean guiding prompt */}
              {!hasSelection ? (
                <div className="py-8 px-2 text-center space-y-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto shadow-lg shadow-blue-950/50">
                    <Sliders size={22} className="text-blue-500" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">
                      Configurá tu Vehículo y Servicio
                    </div>
                    <p className="text-xs text-neutral-400 max-w-xs mx-auto leading-relaxed mt-1">
                      Seleccioná el tipo de vehículo y el tratamiento deseado para calcular el total estimado y coordinar tu turno.
                    </p>
                  </div>
                  <div className="pt-2 flex items-center justify-center gap-2.5 text-[11px] text-neutral-300">
                    <span className={`inline-flex items-center gap-1 font-semibold ${selectedVehicleId ? 'text-emerald-400' : 'text-neutral-500'}`}>
                      <span className={`w-2 h-2 rounded-full ${selectedVehicleId ? 'bg-emerald-400' : 'bg-neutral-700'}`} />
                      1. Vehículo
                    </span>
                    <span className="text-neutral-600">·</span>
                    <span className={`inline-flex items-center gap-1 font-semibold ${selectedPackageId ? 'text-emerald-400' : 'text-neutral-500'}`}>
                      <span className={`w-2 h-2 rounded-full ${selectedPackageId ? 'bg-emerald-400' : 'bg-neutral-700'}`} />
                      2. Tratamiento
                    </span>
                  </div>
                </div>
              ) : (
                /* IF OPTIONS ARE SELECTED: Show full details, Total Estimado & Consultar Turno */
                <>
                  {/* Items Breakdown */}
                  <div className="py-3.5 space-y-2.5 text-xs border-b border-neutral-800/80">
                    <div className="flex justify-between items-center text-neutral-300">
                      <span className="text-neutral-400">Auto:</span>
                      <span className="font-semibold text-white">
                        {vehicle?.name} {vehicleModel ? `(${vehicleModel})` : ''}
                      </span>
                    </div>

                    <div className="flex justify-between items-start text-neutral-300">
                      <span className="text-neutral-400">Servicio:</span>
                      <div className="text-right">
                        <div className="font-semibold text-white">{pkg?.name}</div>
                        <div className="text-neutral-400 tabular-nums">
                          {formatMoney(packagePrice)}
                        </div>
                      </div>
                    </div>

                    {selectedExtras.length > 0 && (
                      <div className="flex justify-between items-start text-neutral-300">
                        <span className="text-neutral-400">Adicionales:</span>
                        <div className="text-right">
                          <div className="font-medium text-neutral-200">
                            {selectedExtras
                              .map((id) => EXTRA_SERVICES.find((e) => e.id === id)?.shortName)
                              .filter(Boolean)
                              .join(', ')}
                          </div>
                          <div className="text-neutral-400 tabular-nums">
                            +{formatMoney(extrasTotal)}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Promo Banner if applicable */}
                  {comboDiscount > 0 && (
                    <div className="my-3 p-2.5 rounded-xl bg-blue-600/15 border border-blue-500/40 flex items-center justify-between text-xs text-blue-200">
                      <div className="flex items-center gap-1.5">
                        <Percent size={13} className="text-blue-400 shrink-0" />
                        <span>Promo Cerámico + Interior (10% OFF)</span>
                      </div>
                      <span className="font-bold tabular-nums">-{formatMoney(comboDiscount)}</span>
                    </div>
                  )}

                  {/* Time & Warranty */}
                  <div className="py-2.5 text-xs text-neutral-400 flex items-center justify-between border-b border-neutral-800/80">
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-blue-400" />
                      <span>Demora estimada:</span>
                    </span>
                    <span className="font-medium text-white">{estimatedTime}</span>
                  </div>

                  {/* Optional Name input */}
                  <div className="pt-3">
                    <input
                      type="text"
                      placeholder="Tu nombre (opcional)"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  {/* Total Display */}
                  <div className="mt-3.5 pt-3.5 border-t border-neutral-800 flex items-baseline justify-between">
                    <div>
                      <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold">
                        Total Estimado
                      </div>
                      <div className="text-[10px] text-neutral-500">
                        Sujeto a revisión de laca
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-extrabold font-display text-blue-400 tabular-nums text-glow">
                        {formatMoney(total)}
                      </div>
                      {comboDiscount > 0 && (
                        <div className="text-[10px] text-neutral-500 line-through tabular-nums">
                          {formatMoney(subtotal)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CTAs Desktop */}
                  <div className="mt-4 space-y-2">
                    <a
                      href={generateWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.98] animate-specular"
                    >
                      <Phone size={15} />
                      <span>Pedir Turno por WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={copyToClipboard}
                      className="w-full flex items-center justify-center gap-1.5 py-2 px-3 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 font-medium text-xs rounded-lg border border-neutral-800 transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <span className="text-emerald-400 font-bold">Copiado al portapapeles</span>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copiar Resumen</span>
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE STICKY BOTTOM BAR (ONLY APPEARS WHEN USER HAS SELECTED VEHICLE + PACKAGE) */}
      {hasSelection && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-xl border-t border-blue-500/30 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl shadow-blue-950/60 animate-in fade-in slide-in-from-bottom duration-300">
          <div>
            <div className="text-[10px] text-neutral-400 uppercase font-semibold">Total estimado</div>
            <div className="text-lg font-black font-display text-blue-400 tabular-nums leading-tight text-glow">
              {formatMoney(total)}
            </div>
          </div>

          <a
            href={generateWhatsAppMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-[210px] min-h-[44px] flex items-center justify-center gap-1.5 px-4 py-2.5 bg-emerald-500 active:bg-emerald-400 text-neutral-950 font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-emerald-500/30 transition-transform active:scale-95 animate-specular"
          >
            <Phone size={15} />
            <span>Consultar Turno</span>
          </a>
        </div>
      )}
    </section>
  );
};
