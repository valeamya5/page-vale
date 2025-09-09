// src/components/Contact.tsx
"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';

// Objeto con las traducciones
const contactContent = {
  es: {
    title: "Contáctame",
    description: "¿Tienes alguna pregunta o quieres trabajar conmigo? ¡No dudes en contactarme!",
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
    button: "Enviar Mensaje",
    alert: "Mensaje enviado. ¡Gracias por contactarme!"
  },
  en: {
    title: "Contact Me",
    description: "Do you have a question or want to work with me? Feel free to get in touch!",
    name: "Name",
    email: "Email",
    message: "Message",
    button: "Send Message",
    alert: "Message sent. Thank you for contacting me!"
  }
};

interface ContactProps {
  lang: "es" | "en";
}

export default function Contact({ lang }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const content = contactContent[lang];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert(content.alert);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="relative w-full min-h-screen py-20 px-6 md:px-12 flex justify-center items-center overflow-hidden">
      {/* Fondo de la sección con una imagen que llena todo el espacio */}
      <Image
        src="/images/contact.jpg"
        alt="Fondo de la sección de contacto"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
      />

      {/* Contenedor del formulario con el efecto blur */}
      <div 
        className="relative z-10 w-full max-w-2xl p-8 md:p-12 rounded-lg shadow-2xl text-white"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(15px) saturate(180%)',
          WebkitBackdropFilter: 'blur(15px) saturate(180%)'
        }}
      >
        <h2 className="text-4xl font-bold text-center mb-6">{content.title}</h2>
        <p className="text-center text-lg mb-8">
          {content.description}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold mb-2">{content.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-transparent text-white placeholder-gray-300"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold mb-2">{content.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-transparent text-white placeholder-gray-300"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold mb-2">{content.message}</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 bg-transparent text-white placeholder-gray-300"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 text-gray-900 font-bold py-3 px-4 rounded-lg 
                       hover:bg-amber-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            {content.button}
          </button>
        </form>
      </div>
    </section>
  );
}