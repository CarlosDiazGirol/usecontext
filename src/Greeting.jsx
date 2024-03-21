// Greeting.js
import React from 'react';
import { useLanguage } from './LanguageContext';

const Greeting = () => {
  const { language } = useLanguage();

  const greetings = {
    en: 'Hello!',
    es: '¡Hola!',
    fr: 'Bonjour!'
  };

  return (
    <div>
      <h2>{greetings[language]}</h2>
    </div>
  );
};

export default Greeting;
