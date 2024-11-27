'use client'
import React, { useEffect } from "react";
import Image from "next/image";
import AboutUsImg from "@/../../public/image/aboutus.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      easing: "ease-in-out", // Efecto de suavizado
      once: true, 
    });
  }, []);

  return (
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div className="mt-10 grid grid-cols-1 items-center gap-14 sm:mt-32 lg:mt-10 lg:grid-cols-2">
        {/* Sección de texto */}
        <div
          className="mx-auto flex max-w-3xl flex-col gap-8"
          data-aos="fade-up" // Animación de desvanecimiento hacia arriba
        >
          <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
            Sobre Nosotros
          </span>

          <h2
            className="text-white text-8xl font-bold font-manrope leading-[0.9] lg:text-start text-center break-words zuume-font"
            data-aos="fade-up" // Animación para el título
            data-aos-delay="200" // Retraso para el título
          >
            Lorem ipsum dolor sit amet
          </h2>

          <p
            className="text-lg text-neutral-600 dark:text-neutral-400"
            data-aos="fade-up" // Animación para el párrafo
            data-aos-delay="400" // Retraso para el párrafo
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </p>

          <div
            className="flex space-x-8"
            data-aos="fade-up" // Animación para los enlaces
            data-aos-delay="600" // Retraso para los enlaces
          >
            <a className="relative" href="#">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="text-lg font-bold leading-tight relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-black transition duration-100 hover:bg-[#ce7128] hover:text-white">
                Lorem ipsum
              </span>
            </a>
          </div>
        </div>

        {/* Sección de imagen */}
        <div
          className="order-last mx-auto max-w-2xl"
          data-aos="zoom-in" // Animación para la imagen (zoom)
        >
          <Image
            src={AboutUsImg}
            alt="Sobre Nosotros"
            width={1000}
            height={1000}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
