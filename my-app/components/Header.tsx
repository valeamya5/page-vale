// src/components/Header.tsx
"use client";
import { useState, useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";

// ✨ DEFINE LOS TIPOS DE LAS PROPS
type HeaderProps = {
  lang: "es" | "en";
  setLang: Dispatch<SetStateAction<"es" | "en">>;
};

// ✨ ACEPTA LAS PROPIEDADES 'lang' y 'setLang' con sus tipos definidos
export default function Header({ lang, setLang }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   <header
        className="fixed top-0 left-0 w-full px-6 md:px-12 py-4 flex justify-between items-center text-white z-50 
                    backdrop-blur-md bg-transparent"
        >
      {/* LOGO / NOMBRE */}
      <div className="text-2xl md:text-3xl font-bold tracking-wide cursor-default drop-shadow-lg">
        {lang === "es" ? "Valentina Amaya" : "Valentina Amaya"}
      </div>

      {/* BOTONES DE IDIOMA */}
      <div className="flex items-center space-x-4 text-sm md:text-base font-semibold drop-shadow-lg">
        <button
          onClick={() => setLang("en")}
          className={`transition-all duration-300 ease-in-out ${
            lang === "en" ? "text-white underline font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          EN
        </button>
        <span className="text-gray-500">|</span>
        <button
          onClick={() => setLang("es")}
          className={`transition-all duration-300 ease-in-out ${
            lang === "es" ? "text-white underline font-bold" : "text-gray-400 hover:text-white"
          }`}
        >
          ES
        </button>
      </div>
    </header>
  );
}