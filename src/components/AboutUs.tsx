
import React from 'react';
import TeamMember from './TeamMember';

const AboutUs = () => {
  const team = [
    {
      name: "Dr. Maximilian Burkert",
      position: "Geschäftsführender Partner",
      description: "Dr. Maximilian Burkert ist Gründer und geschäftsführender Partner bei BURKERT&BURKART. Mit über 20 Jahren Erfahrung im Finanzsektor berät er Unternehmen bei strategischen Entscheidungen und Mergers & Acquisitions. Er hat an der Humboldt-Universität zu Berlin promoviert und hält Vorlesungen an der Frankfurt School of Finance.",
      email: "m.burkert@burkertburkart.de",
      phone: "+49 30 123456-01",
      linkedIn: "https://linkedin.com",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Julia Burkart",
      position: "Managing Director",
      description: "Julia Burkart leitet den Bereich Unternehmensberatung bei BURKERT&BURKART und bringt über 15 Jahre Erfahrung in der digitalen Transformation mit. Vor ihrer Tätigkeit bei BURKERT&BURKART war sie bei McKinsey und Boston Consulting Group tätig. Sie hat einen MBA von der ESMT Berlin und spricht fließend Deutsch, Englisch und Französisch.",
      email: "j.burkart@burkertburkart.de",
      phone: "+49 30 123456-02",
      linkedIn: "https://linkedin.com",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Paul Burkert",
      position: "Partner, Technologie",
      description: "Paul Burkert ist verantwortlich für den Bereich Technologie und Innovation bei BURKERT&BURKART. Mit seiner Expertise in IT-Infrastruktur und Künstlicher Intelligenz unterstützt er Kunden bei der digitalen Transformation. Zuvor war er CTO bei einem führenden Berliner Technologieunternehmen. Er hat einen Master in Informatik von der TU Berlin.",
      email: "p.burkert@burkertburkart.de",
      phone: "+49 30 123456-03",
      linkedIn: "https://linkedin.com",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Sophia Burkart",
      position: "Leiterin Nachhaltigkeit",
      description: "Dr. Sophia Burkart leitet den wachsenden Bereich Nachhaltigkeit und ESG bei BURKERT&BURKART. Sie berät Unternehmen bei der Entwicklung und Umsetzung von Nachhaltigkeitsstrategien und ESG-Compliance. Sie hat in Umweltwissenschaften an der Freien Universität Berlin promoviert und war zuvor bei der Deutschen Gesellschaft für Internationale Zusammenarbeit (GIZ) tätig.",
      email: "s.burkart@burkertburkart.de",
      phone: "+49 30 123456-04",
      linkedIn: "https://linkedin.com",
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
            Unser erfahrenes Team aus Fachexperten steht Ihnen mit umfassendem Know-how und langjähriger Berufserfahrung zur Seite. Wir verbinden Kompetenz mit persönlichem Engagement für Ihren Erfolg.
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
