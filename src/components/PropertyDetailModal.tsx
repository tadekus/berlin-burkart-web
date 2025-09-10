import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Euro, Home, Maximize2, Bed, MapPin, Calendar, Phone, Mail } from 'lucide-react';

interface PropertyDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    title: string;
    price: string;
    size: string;
    bedrooms: number;
    type: string;
    imageUrl: string;
    description?: string;
    location?: string;
    yearBuilt?: string;
    features?: string[];
  } | null;
}

const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  isOpen,
  onClose,
  property
}) => {
  if (!property) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{property.title}</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image */}
          <div className="aspect-[4/3] w-full overflow-hidden rounded-lg">
            <img
              src={property.imageUrl}
              alt={property.title}
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Property Details */}
          <div className="space-y-6">
            {/* Price and basic info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-2xl font-bold text-primary">
                <Euro size={24} />
                <span>{property.price}</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Maximize2 size={18} className="text-primary" />
                  <span className="text-sm">{property.size}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bed size={18} className="text-primary" />
                  <span className="text-sm">{property.bedrooms} Zimmer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Home size={18} className="text-primary" />
                  <span className="text-sm">{property.type}</span>
                </div>
              </div>
              
              {property.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span className="text-sm">{property.location}</span>
                </div>
              )}
              
              {property.yearBuilt && (
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span className="text-sm">Baujahr: {property.yearBuilt}</span>
                </div>
              )}
            </div>
            
            {/* Description */}
            {property.description && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Beschreibung</h3>
                <p className="text-gray-600">{property.description}</p>
              </div>
            )}
            
            {/* Features */}
            {property.features && property.features.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">Ausstattung</h3>
                <ul className="list-disc list-inside space-y-1">
                  {property.features.map((feature, index) => (
                    <li key={index} className="text-gray-600 text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            
            {/* Contact Actions */}
            <div className="space-y-3 pt-4 border-t">
              <Button className="w-full" size="lg">
                <Phone size={18} className="mr-2" />
                Besichtigung vereinbaren
              </Button>
              <Button variant="outline" className="w-full" size="lg">
                <Mail size={18} className="mr-2" />
                Weitere Informationen
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyDetailModal;