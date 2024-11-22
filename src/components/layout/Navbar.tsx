'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [linksVisible, setLinksVisible] = useState([false, false, false]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
    
      setTimeout(() => setLinksVisible([true, false, false]), 100);
      setTimeout(() => setLinksVisible([true, true, false]), 200);
      setTimeout(() => setLinksVisible([true, true, true]), 300);
    } else {
      setLinksVisible([false, false, false]); 
    }
  }, [isSidebarOpen]);

  return (
    <>
 <nav className="bg-transparent">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between items-center">
      {/* Logo */}
      <div className="flex space-x-4">
        <div>
          <a
            href="#"
            className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
          >
            <span className="font-bold">ApoloxiCode</span>
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
        <a href="#" className="text-lg font-bold leading-tight">
          Inicio
        </a>
        <a href="#" className="text-lg font-bold leading-tight">
          Sobre Nosotros
        </a>
      </div>

      {/* "Contactanos" - Mantener en el extremo derecho */}
      <div className="hidden md:flex items-center">
      <a className="relative" href="#">
  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
  <span className="text-lg font-bold leading-tight relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-black transition duration-100 hover:bg-[#ce7128] hover:text-white">
    Contactanos
  </span>
</a>

      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleSidebar}
          className="mobile-menu-button focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</nav>



      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg flex flex-col sidebar-links">
          <button
            onClick={toggleSidebar}
            className="self-end p-4 text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

     
<a
  href="#"
  className={`py-2 px-4 text-5xl text-black  transition-all duration-300 ease-in-out zuume-font ${
    linksVisible[0] ? 'opacity-100' : 'opacity-0'
  }`}
  style={{
    transitionDelay: '100ms',
  }}
>
  Inicio
</a>

<a
  href="#"
  className={`py-2 px-4 text-5xl text-black  transition-all duration-300 ease-in-out zuume-font ${
    linksVisible[1] ? 'opacity-100' : 'opacity-0'
  }`}
  style={{
    transitionDelay: '200ms',
  }}
>
  Sobre Nosotros
</a>

<a
  href="#"
  className={`relative py-1 px-2 text-4xl text-gray-700 mt-10 transition-all duration-300 ease-in-out zuume-font ${
    linksVisible[2] ? 'opacity-100' : 'opacity-0'
  }`}
  style={{
    transitionDelay: '300ms',
  }}
>
  <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-40 rounded bg-black"></span>
  <span className="relative inline-block h-full w-30 rounded border-2 border-black bg-white px-2 py-1 text-black transition-all duration-200 hover:bg-[#ce7128] hover:text-white">
    Contáctanos
  </span>
</a>

        </div>
      </div>
    </>
  );
}
