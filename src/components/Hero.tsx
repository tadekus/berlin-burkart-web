
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative pt-28 pb-20 hero-pattern">
      <div className="container mx-auto px-6 py-16 md:py-28 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-start space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Innovative <span className="text-gradient">Beratungslösungen</span> für Ihr Unternehmen
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Seit mehr als zwei Jahrzehnten ist BURKERT&BURKART ein führender Partner für maßgeschneiderte Geschäftslösungen in Berlin und ganz Deutschland.
          </p>
          <div className="flex space-x-4">
            <Button className="bg-primary hover:bg-secondary text-white font-medium py-2 px-6 rounded-md">
              Mehr erfahren
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-accent">
              Kontakt aufnehmen
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-accent rounded-full opacity-70"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="BURKERT&BURKART Team" 
              className="relative z-10 rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,128C960,139,1056,149,1152,144C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
