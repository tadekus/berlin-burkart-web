
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Euro, Home, Maximize2, Bed } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  price: string;
  size: string;
  bedrooms: number;
  type: string;
  imageUrl: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  price,
  size,
  bedrooms,
  type,
  imageUrl
}) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-1">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-1">
            <span>{price}</span>
          </div>
          <div className="flex items-center gap-1">
            <Maximize2 size={16} className="text-primary" />
            <span>{size}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bed size={16} className="text-primary" />
            <span>{bedrooms} {bedrooms === 1 ? 'Zimmer' : 'Zimmer'}</span>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <Home size={16} className="text-primary" />
          <span>{type}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">Details ansehen</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
