import React from 'react';
import 'tailwindcss/base.css';
import 'tailwindcss/components.css';
import 'tailwindcss/utilities.css';

const FloatingButton = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <a
        href="https://wa.me/51910043108"  // Reemplaza con tu número de WhatsApp
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-full shadow-lg text-xl font-semibold"
      >
        WhatsApp
      </a>
    </div>
  );
};

export default FloatingButton;

