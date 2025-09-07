
import React from 'react';
import Navbar from '../components/Navbar';
import VideoHero from '../components/VideoHero';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import { Button } from "@/components/ui/button";

const Index = () => {
  const properties = [
    {
      title: "Exklusive Villa mit Panoramablick",
      price: "3.850.000 €",
      size: "450 m²",
      bedrooms: 6,
      type: "Villa",
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Luxuriöse Stadtvilla mit Garten",
      price: "2.950.000 €",
      size: "380 m²",
      bedrooms: 5,
      type: "Stadtvilla",
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Lichtdurchflutete Maisonette-Wohnung",
      price: "1.480.000 €",
      size: "145 m²",
      bedrooms: 4,
      type: "Maisonette",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Modernes Apartment im Stadtzentrum",
      price: "850.000 €",
      size: "85 m²",
      bedrooms: 2,
      type: "Apartment",
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Geräumige Wohnung mit Stadtblick",
      price: "1.120.000 €",
      size: "120 m²",
      bedrooms: 3,
      type: "Etagenwohnung",
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Elegante Stadtwohnung in historischem Gebäude",
      price: "1.290.000 €",
      size: "135 m²",
      bedrooms: 3,
      type: "Stadtwohnung",
      imageUrl: "https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Video Hero Section */}
        <VideoHero />

        {/* Properties Section */}
        <section id="properties" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h6 className="text-primary font-medium mb-2">UNSERE IMMOBILIEN</h6>
              <h2 className="text-4xl font-bold mb-6">Exklusive Objekte</h2>
              <p className="text-lg text-gray-600">
                Entdecken Sie unser exklusives Portfolio an hochwertigen Immobilien in den besten Lagen.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {properties.map((property, index) => (
                <div 
                  key={index}
                  className="animate-fade-in" 
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                >
                  <PropertyCard {...property} />
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Alle Immobilien anzeigen
              </Button>
            </div>
          </div>
        </section>

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
