'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppFloatProps {
  phoneNumber?: string;
  message?: string;
}

export function WhatsAppFloat({ 
  phoneNumber = '50687654321',
  message = 'Hola,%20tengo%20una%20consulta%20sobre%20los%20tenis%20de%20sneakerscr.com'
}: WhatsAppFloatProps) {
  const handleClick = () => {
    const waLink = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(waLink, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
      title="Contactar por WhatsApp"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </button>
  );
}

export default WhatsAppFloat;
