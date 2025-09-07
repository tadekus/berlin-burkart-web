
import React from 'react';
import { Mail, Phone } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  email: string;
  phone: string;
  linkedIn?: string; // We'll keep this in the interface for backward compatibility
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  position, 
  email, 
  phone,
  imageUrl 
}) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex-shrink-0">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-md mx-auto sm:mx-0"
        />
      </div>
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-primary font-semibold mb-3">{position}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Mail size={16} className="text-primary" />
            <a href={`mailto:${email}`} className="text-gray-700 hover:text-primary text-sm">{email}</a>
          </div>
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Phone size={16} className="text-primary" />
            <a href={`tel:${phone}`} className="text-gray-700 hover:text-primary text-sm">{phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
