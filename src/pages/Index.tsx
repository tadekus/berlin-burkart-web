
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import VideoHero from '../components/VideoHero';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import PropertyCard from '../components/PropertyCard';
import PropertyDetailModal from '../components/PropertyDetailModal';
import { Button } from "@/components/ui/button";

const Index = () => {
  const properties = [
    {
      title: "Exklusive Villa mit Panoramablick",
      price: "3.850.000",
      size: "450 m²",
      bedrooms: 6,
      type: "Villa",
      imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "München Bogenhausen",
      yearBuilt: "2019",
      description: "Diese exklusive Villa besticht durch ihre moderne Architektur und den atemberaubenden Panoramablick über die Stadt. Hochwertige Ausstattung und großzügige Raumaufteilung machen diese Immobilie zu einem wahren Juwel.",
      features: ["Fußbodenheizung", "Einbauküche", "Garage", "Garten", "Balkon", "Terrasse", "Keller"]
    },
    {
      title: "Luxuriöse Stadtvilla mit Garten",
      price: "2.950.000",
      size: "380 m²",
      bedrooms: 5,
      type: "Stadtvilla",
      imageUrl: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "München Schwabing",
      yearBuilt: "2020",
      description: "Luxuriöse Stadtvilla in ruhiger Lage mit eigenem Garten. Die Villa überzeugt mit hochwertiger Ausstattung und durchdachter Raumaufteilung auf drei Etagen.",
      features: ["Garten", "Garage", "Fußbodenheizung", "Einbauküche", "Kaminanschluss", "Terrasse"]
    },
    {
      title: "Lichtdurchflutete Maisonette-Wohnung",
      price: "1.480.000",
      size: "145 m²",
      bedrooms: 4,
      type: "Maisonette",
      imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "München Maxvorstadt",
      yearBuilt: "2018",
      description: "Außergewöhnliche Maisonette-Wohnung mit bodentiefen Fenstern und hohen Decken. Die lichtdurchfluteten Räume schaffen eine einzigartige Wohnatmosphäre.",
      features: ["Balkon", "Einbauküche", "Fußbodenheizung", "Aufzug", "Tiefgarage"]
    },
    {
      title: "Modernes Apartment im Stadtzentrum",
      price: "850.000",
      size: "85 m²",
      bedrooms: 2,
      type: "Apartment",
      imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "München Altstadt",
      yearBuilt: "2021",
      description: "Modernes Apartment in zentraler Lage mit hochwertiger Ausstattung. Perfekt für Singles oder Paare, die das Stadtleben schätzen.",
      features: ["Balkon", "Einbauküche", "Fußbodenheizung", "Aufzug", "Concierge"]
    },
    {
      title: "Geräumige Wohnung mit Stadtblick",
      price: "1.120.000",
      size: "120 m²",
      bedrooms: 3,
      type: "Etagenwohnung",
      imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "München Haidhausen",
      yearBuilt: "2017",
      description: "Geräumige Wohnung in gefragter Lage mit herrlichem Blick über die Stadt. Die Wohnung besticht durch ihre optimale Raumaufteilung und hochwertige Ausstattung.",
      features: ["Balkon", "Einbauküche", "Fußbodenheizung", "Aufzug", "Stellplatz"]
    },
    {
      title: "Elegante Stadtwohnung in historischem Gebäude",
      price: "1.290.000",
      size: "135 m²",
      bedrooms: 3,
      type: "Stadtwohnung",
      imageUrl: "https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      location: "München Lehel",
      yearBuilt: "1900 (renoviert 2019)",
      description: "Elegante Stadtwohnung in einem denkmalgeschützten Gebäude mit modernen Annehmlichkeiten. Der Charme vergangener Zeiten trifft auf zeitgemäßen Komfort.",
      features: ["Stuck", "Parkett", "Einbauküche", "Fußbodenheizung", "Aufzug", "Keller"]
    },
  ];

  const [selectedProperty, setSelectedProperty] = useState<typeof properties[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePropertyClick = (property: typeof properties[0]) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

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
                  className="animate-fade-in cursor-pointer" 
                  style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
                  onClick={() => handlePropertyClick(property)}
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
      </main>
      <Footer />
      
      <PropertyDetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        property={selectedProperty}
      />
    </div>
  );
};

export default Index;
