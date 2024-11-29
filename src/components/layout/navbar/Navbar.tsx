'use client';
import { useState, useEffect } from 'react';
import Logo from '@/../../public/image/Logo.png';
import Image from 'next/image';

import DesktopMenu from './DesktopMenu';
import MobileMenuButton from './MobileMenuButton';
import Sidebar from './Sidebar';

const links = [
  { href: '#', label: 'Inicio', delay: 100 },
  { href: '#', label: 'Sobre Nosotros', delay: 200 },
];

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState([false, false]);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambiar estado si el scroll es mayor a 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      links.forEach((_, index) => {
        setTimeout(() => {
          setLinksVisible((prev) => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        }, (index + 1) * 100);
      });
    } else {
      setLinksVisible([false, false]);
    }
  }, [isSidebarOpen]);

  return (
    <>
      <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white/0.7 backdrop-blur-md shadow-md' : 'bg-transparent'
  }`}
  style={{ height: '120px' }} // Define la altura del Navbar
>

        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex space-x-4">
              <a href="#" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <Image src={Logo} alt="Logo" width={170} height={150} />
              </a>
            </div>

            {/* Menú de escritorio */}
            <DesktopMenu />

            {/* Botón del menú móvil */}
            <MobileMenuButton toggleSidebar={toggleSidebar} />
          </div>
        </div>
      </nav>

      {/* Sidebar móvil con botón adicional */}
      <Sidebar
        isOpen={isSidebarOpen}
        links={links}
        linksVisible={linksVisible}
        toggleSidebar={toggleSidebar}
        extraContent={
          <button
            type="button"
            className="text-white bg-gradient-to-r from-[#ffcc29] to-[#ff7b54] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-5xl px-5 py-2.5 text-center w-full zuume-font"
            style={{
              backgroundSize: '100% 300%',
              transition: 'background-position 2s ease-in-out',
            }}
          >
            Registrar
          </button>
        }
      />
    </>
  );
}
