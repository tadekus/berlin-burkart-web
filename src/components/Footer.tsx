
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
            <div className="flex items-center space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
            </div>
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
