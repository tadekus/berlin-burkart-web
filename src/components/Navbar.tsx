
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white py-4 border-b border-gray-100 fixed top-0 z-50">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-serif font-bold text-primary">BURKERT&BURKART</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#" className="font-medium text-gray-800 hover:text-primary transition-colors">Home</a>
          <a href="#about" className="font-medium text-gray-800 hover:text-primary transition-colors">Über uns</a>
          <a href="#services" className="font-medium text-gray-800 hover:text-primary transition-colors">Dienstleistungen</a>
          <a href="#about">
            <Button className="bg-primary text-white hover:bg-secondary transition-colors">Kontakt</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-500 hover:text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "absolute top-full left-0 w-full bg-white border-b border-gray-100 md:hidden py-4 px-6",
        isMobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="flex flex-col space-y-4">
          <a href="#" className="font-medium text-gray-800 hover:text-primary transition-colors">Home</a>
          <a href="#about" className="font-medium text-gray-800 hover:text-primary transition-colors">Über uns</a>
          <a href="#services" className="font-medium text-gray-800 hover:text-primary transition-colors">Dienstleistungen</a>
          <a href="#about">
            <Button className="bg-primary text-white hover:bg-secondary transition-colors">Kontakt</Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
