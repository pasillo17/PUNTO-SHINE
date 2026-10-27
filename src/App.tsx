import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { QuoteCalculator } from './components/QuoteCalculator.tsx';
import { BeforeAfterSlider } from './components/BeforeAfterSlider.tsx';
import { ServicesGrid } from './components/ServicesGrid.tsx';
import { ProcessTimeline } from './components/ProcessTimeline.tsx';
import { Testimonials } from './components/Testimonials.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { LocationContact } from './components/LocationContact.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  useEffect(() => {
    // If user navigates with #presupuesto or any hash in URL, smooth scroll to it
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuoteCalculator />
        <BeforeAfterSlider />
        <ServicesGrid />
        <ProcessTimeline />
        <Testimonials />
        <FaqSection />
        <LocationContact />
      </main>
      <Footer />
    </div>
  );
}
