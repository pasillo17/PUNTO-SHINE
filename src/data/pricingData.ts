export interface VehicleType {
  id: string;
  name: string;
  shortName: string;
  examples: string;
  multiplier: number;
}

export interface ServicePackage {
  id: string;
  name: string;
  tag: string;
  duration: string;
  durability: string;
  basePrice: number;
  description: string;
  popular?: boolean;
}

export interface ExtraService {
  id: string;
  name: string;
  shortName: string;
  basePrice: number;
  duration: string;
  description: string;
  popular?: boolean;
}

export const VEHICLE_TYPES: VehicleType[] = [
  {
    id: 'hatchback',
    name: 'Hatchback / Chico',
    shortName: 'Chico',
    examples: 'Gol, 208, Onix, Etios, Polo, Fiesta',
    multiplier: 1.0,
  },
  {
    id: 'sedan',
    name: 'Sedán / Mediano',
    shortName: 'Mediano',
    examples: 'Corolla, Vento, Cruze, Focus, Civic, A3',
    multiplier: 1.15,
  },
  {
    id: 'suv',
    name: 'SUV / Monovolumen',
    shortName: 'SUV',
    examples: 'Compass, Taos, Tracker, HR-V, 3008',
    multiplier: 1.3,
  },
  {
    id: 'pickup',
    name: 'Pickup / Grande',
    shortName: 'Pickup',
    examples: 'Hilux, Amarok, Ranger, RAM, SW4',
    multiplier: 1.5,
  },
  {
    id: 'moto',
    name: 'Moto / Pista',
    shortName: 'Moto',
    examples: 'Pista, Naked, Custom, Trail, Enduro',
    multiplier: 0.8,
  },
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'ceramic_full',
    name: 'Tratamiento Cerámico 9H (Showroom)',
    tag: 'El Más Elegido',
    duration: '24 a 36 meses',
    durability: 'Protección extrema contra rayas ligeras y químicos',
    basePrice: 260000,
    popular: true,
    description: 'Corrección de pintura 2-3 pasos (elimina 85-95% de micro-rayas y marcas circulares) + Cristalización de cuarzo 9H SiO2 con brillo espejo y repelencia extrema al agua.',
  },
  {
    id: 'ceramic_mid',
    name: 'Tratamiento Cerámico 9H (Intermedio)',
    tag: 'Recomendado',
    duration: '18 a 24 meses',
    durability: 'Alta resistencia y brillo profundo',
    basePrice: 210000,
    description: 'Abrillantado óptico de pintura para realzar el color y eliminar marcas superficiales + Sellado cerámico 9H SiO2 con protección UV duradera.',
  },
  {
    id: 'acrylic',
    name: 'Protección Acrílica',
    tag: 'Uso Diario',
    duration: '6 a 8 meses',
    durability: 'Excelente repelencia y sellado sintético',
    basePrice: 145000,
    description: 'Abrillantado a máquina + Sellador acrílico sintético de alta densidad. Brinda brillo húmedo y protección frente a lluvia ácida y polvillo.',
  },
  {
    id: 'express_wax',
    name: 'Cera & Abrillantado Express',
    tag: 'Rápido',
    duration: '2 a 3 meses',
    durability: 'Brillo instantáneo',
    basePrice: 90000,
    description: 'Descontaminado básico, abrillantado manual/máquina rápido y sellado con cera sintética de carnauba. Ideal para eventos o venta del auto.',
  },
  {
    id: 'custom',
    name: 'Solo Servicios Específicos',
    tag: 'A Medida',
    duration: 'A coordinar',
    durability: 'Servicios puntuales',
    basePrice: 0,
    description: 'Elegí esta opción si solo querés limpieza interior, vano motor, ópticas u otros trabajos sin tratamiento exterior de pintura.',
  },
];

export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: 'interior_full',
    name: 'Detallado Interior Profundo a Vapor',
    shortName: 'Interior Profundo',
    basePrice: 78000,
    duration: '1 día',
    popular: true,
    description: 'Limpieza con vapor e inyección-extracción de butacas (tela o cuero), alfombras, techo y desinfección de ductos de climatización.',
  },
  {
    id: 'engine_bay',
    name: 'Detallado de Vano Motor',
    shortName: 'Vano Motor',
    basePrice: 42000,
    duration: '3 a 4 hs',
    popular: true,
    description: 'Desengrase técnico a vapor seguro para componentes electrónicos y sellador satinado anti-estático que repele el polvo.',
  },
  {
    id: 'headlights_restore',
    name: 'Restauración y Pulido de Ópticas',
    shortName: 'Pulido Ópticas',
    basePrice: 38000,
    duration: '2 a 3 hs',
    description: 'Lijado al agua y pulido de policarbonato opaco o amarillento + sellado cerámico con filtro UV.',
  },
  {
    id: 'glass_ceramic',
    name: 'Sellado Cerámico de Cristales',
    shortName: 'Cristales Anti-Lluvia',
    basePrice: 28000,
    duration: '2 hs',
    description: 'Tratamiento hidrofóbico para parabrisas. A más de 60 km/h las gotas resbalan solas mejorando la visibilidad con lluvia.',
  },
];

export const BUSINESS_INFO = {
  name: 'Punto Shine',
  legalName: 'Punto Shine Detailing',
  tagline: 'Estética Vehicular & Detailing Profesional',
  city: 'La Plata, Buenos Aires, Argentina',
  address: 'La Plata, Buenos Aires',
  phoneDisplay: '+54 9 221 593-2566',
  whatsappRaw: '5492215932566',
  instagram: '@punto.shinedetailing',
  instagramUrl: 'https://www.instagram.com/punto.shinedetailing/?hl=es',
  googleMapsUrl: 'https://maps.app.goo.gl/HQEPLFW7xv2mLqW9A',
  hours: 'Lunes a Sábados con turnos programados · 08:30 a 19:00 hs',
  email: 'contacto@puntoshinedetailing.com',
};
