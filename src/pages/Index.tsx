
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutUs />

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h6 className="text-primary font-medium mb-2">UNSERE DIENSTLEISTUNGEN</h6>
              <h2 className="text-4xl font-bold mb-6">Maßgeschneiderte Lösungen für Ihren Erfolg</h2>
              <p className="text-lg text-gray-600">
                Wir bieten umfassende Beratungsleistungen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Strategieberatung",
                  description: "Entwicklung von maßgeschneiderten Geschäftsstrategien zur Steigerung von Wachstum und Wettbewerbsfähigkeit."
                },
                {
                  title: "Digitale Transformation",
                  description: "Begleitung Ihres Unternehmens bei der digitalen Transformation und Implementierung innovativer Technologien."
                },
                {
                  title: "Finanzberatung",
                  description: "Umfassende Finanzberatung, einschließlich Finanzanalysen, Risikomanagement und Investitionsplanungen."
                },
                {
                  title: "Nachhaltigkeitsmanagement",
                  description: "Entwicklung und Implementierung von Nachhaltigkeitsstrategien und ESG-Compliance-Maßnahmen."
                },
                {
                  title: "Prozessoptimierung",
                  description: "Analyse und Optimierung von Geschäftsprozessen für höhere Effizienz und Kostenreduktion."
                },
                {
                  title: "Mitarbeiterschulungen",
                  description: "Maßgeschneiderte Schulungsprogramme für Ihre Mitarbeiter in verschiedenen Fachbereichen."
                }
              ].map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                >
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
