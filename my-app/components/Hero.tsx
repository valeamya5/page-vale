// components/Hero.js

import Image from 'next/image';
import Navigation from './Navigation';


const content = {
  es: {
    name: "Valentina Amaya",
    title: "Especialista HH.RR - Ingeniera Industrial",
  },
  en: {
    name: "Valentina Amaya",
    title: "HR Specialist - Industrial Engineer",
  }
};

// 1. Define el tipo de la prop 'lang' para que TypeScript lo entienda.
// Esto indica que 'lang' solo puede ser 'es' o 'en'.
const Hero = ({ lang = 'es' }: { lang: 'es' | 'en' }) => {
  const heroContent = content[lang]; // ¡Ahora este error desaparecerá!
  
  return (
    <section className="relative w-full h-screen flex justify-center items-center p-8 overflow-hidden">
      {/* ... el resto de tu código del componente Hero */}
      <Image
        src="/images/hero.jpg"
        alt="Fondo de jardin de flores"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
      />
      <div
        className="relative z-20 flex flex-col md:flex-row w-4/5 max-w-5xl text-white p-8 md:p-12 rounded-xl shadow-2xl"
        style={{
          backgroundColor: 'rgba(23, 37, 46, 0.3)',
          backdropFilter: 'blur(10px) saturate(150%)',
          WebkitBackdropFilter: 'blur(10px) saturate(150%)'
        }}
      >
        <div className="flex-1 flex flex-col justify-center pr-0 md:pr-12 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">{heroContent.name}</h1>
          <p className="text-lg md:text-xl font-light mb-8">{heroContent.title}</p>
        </div>
        <div className="flex-1 flex justify-center items-center md:border-l md:border-white md:border-opacity-30 md:pl-12">
          <Navigation lang={lang} />
        </div>
      </div>
    </section>
  );
};

export default Hero;