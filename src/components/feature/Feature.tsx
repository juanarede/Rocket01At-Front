'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importa los estilos de AOS
import { Brain, Tool, File } from '../icons/icons';

const features = [
  {
    id: 1,
    name: 'Soporte Técnico',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    href: '#',
    icon: <Tool/>, // Un icono genérico
  },
  {
    id: 2,
    name: 'Sistema de descarga de archivos',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    href: '#',
    icon: <File/>, // Un icono genérico
  },
  {
    id: 3,
    name: 'Sistema de Red Neuronal - IA',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    href: '#',
    icon: <Brain/>, // Un icono genérico
  },
];

export default function Feature() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Efecto de suavizado
      once: true, // La animación solo se ejecuta una vez
    });
  }, []);

  return (
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto my-20">
      <h2
        id="title"
        className="max-w-3xl text-white text-8xl font-bold font-manrope leading-[0.9] lg:text-start text-center break-words zuume-font"
      >
        Lorem ipsum dolor sit amet, consectetur
      </h2>

      <div
        id="features"
        className="mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none"
      >
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              data-aos="fade-up" // Define la animación de desplazamiento hacia arriba
              data-aos-delay={index * 200} // Un pequeño retraso para cada elemento
              className="opacity-0"
            >
              <div className="flex flex-col">
                {feature.icon}

                <dt className="mt-4 flex items-center gap-x-3 text-xl font-semibold leading-7 text-neutral-900 dark:text-neutral-200">
                  {feature.name}
                </dt>

                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-neutral-600 dark:text-neutral-500">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
