import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pricingData.ts';
import { ASSETS } from '../assets/images.ts';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-950/90 backdrop-blur-md border-b border-blue-500/20 shadow-2xl shadow-blue-950/30 py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single brand logo element */}
          <a
            href="/"
            className="flex items-center gap-3 shrink-0 group"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-500/20 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-300" />
              <img
                src={ASSETS.logo}
                alt="Punto Shine Detailing"
                className="relative h-7 sm:h-9 w-auto object-contain logo-glow-subtle transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-blue-300 border border-blue-500/30 bg-blue-950/50 px-2 py-0.5 rounded hidden sm:inline-block">
              LA PLATA
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            <a
              href="#servicios"
              onClick={(e) => scrollToSection(e, 'servicios')}
              className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
            >
              Servicios
            </a>
            <a
              href="#presupuesto"
              onClick={(e) => scrollToSection(e, 'presupuesto')}
              className="hover:text-blue-300 transition-colors whitespace-nowrap shrink-0 text-blue-400 font-semibold flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Cotizador Online</span>
            </a>
            <a
              href="#comparador"
              onClick={(e) => scrollToSection(e, 'comparador')}
              className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
            >
              Antes y Después
            </a>
            <a
              href="#proceso"
              onClick={(e) => scrollToSection(e, 'proceso')}
              className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
            >
              Proceso
            </a>
            <a
              href="#ubicacion"
              onClick={(e) => scrollToSection(e, 'ubicacion')}
              className="hover:text-blue-400 transition-colors whitespace-nowrap shrink-0"
            >
              Contacto
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#presupuesto"
              onClick={(e) => scrollToSection(e, 'presupuesto')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-xl shadow-lg shadow-blue-500/25 border border-blue-400/30 transition-all transform active:scale-95 whitespace-nowrap shrink-0 cursor-pointer animate-specular"
            >
              Cotizar Presupuesto
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Abrir menú"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-blue-500/20 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#servicios"
            onClick={(e) => scrollToSection(e, 'servicios')}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-blue-400 rounded-md"
          >
            Servicios
          </a>
          <a
            href="#presupuesto"
            onClick={(e) => scrollToSection(e, 'presupuesto')}
            className="block px-3 py-2 text-base font-semibold text-blue-400 bg-blue-600/10 rounded-md border border-blue-500/20"
          >
            Cotizador Online (Presupuesto)
          </a>
          <a
            href="#comparador"
            onClick={(e) => scrollToSection(e, 'comparador')}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-blue-400 rounded-md"
          >
            Antes y Después
          </a>
          <a
            href="#proceso"
            onClick={(e) => scrollToSection(e, 'proceso')}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-blue-400 rounded-md"
          >
            Proceso de Detallado
          </a>
          <a
            href="#ubicacion"
            onClick={(e) => scrollToSection(e, 'ubicacion')}
            className="block px-3 py-2 text-base font-medium text-neutral-200 hover:text-blue-400 rounded-md"
          >
            Ubicación & Contacto
          </a>
          <div className="pt-2 border-t border-neutral-800">
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                'Hola Punto Shine! Quisiera hacer una consulta sobre estética para mi vehículo.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 text-center font-bold text-sm bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl uppercase tracking-wider shadow-lg shadow-blue-500/30"
            >
              <PhoneCall size={16} /> Contactar por WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
