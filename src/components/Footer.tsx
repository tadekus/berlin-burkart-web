
import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4 font-serif">BURKERT&BURKART</h3>
            <p className="text-gray-300 mb-4">
              Innovative Beratungslösungen für Unternehmen in Deutschland und Europa. Wir begleiten Sie auf Ihrem Weg zum Erfolg.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <p className="flex items-center">
                <span className="mr-2">
                  <Mail size={18} />
                </span>
                <a href="mailto:info@burkertburkart.de" className="text-gray-300 hover:text-white">info@burkertburkart.de</a>
              </p>
              <p className="flex items-center">
                <span className="mr-2">
                  <Phone size={18} />
                </span>
                <a href="tel:+4930123456" className="text-gray-300 hover:text-white">+49 30 123456-00</a>
              </p>
              <p className="pt-2">
                Kurfürstendamm 123<br />
                10719 Berlin<br />
                Deutschland
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Schnellnavigation</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">Über uns</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Dienstleistungen</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Karriere</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Impressum</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} BURKERT&BURKART GmbH. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
