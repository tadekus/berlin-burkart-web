
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  description: string;
  email: string;
  phone: string;
  linkedIn?: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  position, 
  description, 
  email, 
  phone, 
  linkedIn, 
  imageUrl 
}) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
      <div className="lg:w-1/3 flex-shrink-0">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-64 lg:h-auto object-cover rounded-md"
        />
      </div>
      <div className="lg:w-2/3">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-primary font-semibold mb-4">{position}</p>
        <p className="text-gray-600 mb-6">{description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-primary" />
            <a href={`mailto:${email}`} className="text-gray-700 hover:text-primary">{email}</a>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-primary" />
            <a href={`tel:${phone}`} className="text-gray-700 hover:text-primary">{phone}</a>
          </div>
          {linkedIn && (
            <div className="flex items-center gap-2">
              <Linkedin size={18} className="text-primary" />
              <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">LinkedIn Profil</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
