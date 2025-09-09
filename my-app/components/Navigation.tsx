// components/Navigation.js
// Asume que este componente tiene algo de contenido que podrías querer traducir

const Navigation = ({ lang }: { lang: 'es' | 'en' }) => {
  // Aquí podrías usar 'lang' para mostrar texto diferente
  // Por ejemplo:
  const menuItems = {
    es: ["Inicio", "Servicios", "Contacto"],
    en: ["Home", "Services", "Contact"],
  };

  const currentMenu = menuItems[lang];

  return (
    <nav>
      <ul className="flex flex-col space-y-4 text-center text-lg md:text-xl font-light">
        {currentMenu.map((item, index) => (
          <li key={index}>
            <a href="#" className="hover:underline transition-colors duration-300">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;