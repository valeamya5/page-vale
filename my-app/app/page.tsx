// src/app/page.tsx
"use client";

import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useState } from "react";



export default function HomePage() {

  // ✨ AÑADE EL ESTADO DEL IDIOMA AQUÍ
  const [lang, setLang] = useState<"es" | "en">("es");

  return (
    <>
  
      
      <div>
        {/* ✨ PASA EL ESTADO Y LA FUNCIÓN DE CAMBIO AL HEADER */}
        <Header lang={lang} setLang={setLang} />
        {/* ✨ PASA EL ESTADO DEL IDIOMA AL HERO */}
        <Hero lang={lang} />
        <Contact lang={lang}  />
      </div>
    </>
  );
}