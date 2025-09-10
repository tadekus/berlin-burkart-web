
import React from 'react';
import TeamMember from './TeamMember';

const AboutUs = () => {
  const team = [
    {
      name: "Dr. Maximilian Burkert",
      position: "Geschäftsführender Partner",
      email: "m.burkert@burkertburkart.de",
      phone: "+49 8902 246824-1",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      imagePosition: "top center"
    },
    {
      name: "Julia Burkart",
      position: "Managing Director",
      email: "j.burkart@burkertburkart.de",
      phone: "+49 8902 246824-2",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      imagePosition: "top center"
    },
    {
      name: "Paul Mey",
      position: "Real Estate Agent",
      email: "p.mey@burkertburkart.de",
      phone: "+49 8902 246824-3",
      imageUrl: "/lovable-uploads/4390e7f0-96cd-4a04-a0a0-295f187328e1.png",
      imagePosition: "top center"
    },
    {
      name: "Sophia Hechinger",
      position: "Real Estate Agent",
      email: "s.hechinger@burkertburkart.de",
      phone: "+49 8902 246824-4",
      imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h6 className="text-primary font-medium mb-2">UNSER TEAM</h6>
          <h2 className="text-4xl font-bold mb-6">Lernen Sie uns kennen</h2>
          <p className="text-lg text-gray-600">
            Unser erfahrenes Team steht Ihnen mit umfassendem Know-how und langjähriger Berufserfahrung zur Seite. Wir verbinden Kompetenz mit persönlichem Engagement für Ihre Traum-Immobilie.
          </p>
        </div>

        <div className="space-y-10">
          {team.map((member, index) => (
            <div 
              key={index} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <TeamMember {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
