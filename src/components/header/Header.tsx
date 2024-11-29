'use client';


import Image from 'next/image';
import Image1 from '@/../../public/image/image1.png';
import Image2 from '@/../../public/image/image2.png';
import 'aos/dist/aos.css'; 
import useAOS from '@/components/hooks/useAos'; 

export default function Header() {
  useAOS({ duration: 1200, easing: 'ease-out', once: true }); 

  return (
    <section style={{ marginTop: '120px' }}>
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {/* Texto a la izquierda */}
          <div
            className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex lg:order-first order-last"
            data-aos="zoom-in-up"
            data-aos-delay="200"
            style={{
              transition: 'all 0.1s ease-out',
            }}
          >
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div
                className="w-full flex-col justify-start lg:items-start items-center gap-3 flex"
                data-aos="zoom-in-up"
                data-aos-delay="500"
              >
                <h2
                  className="text-8xl font-bold font-manrope leading-[0.9] lg:text-start text-center break-words zuume-font animate-gradient animate-fadeUp"
                  style={{
                    background: 'linear-gradient(90deg, #ff7b54, #ffcc29, #4facfe, #00f2fe)',
                    backgroundSize: '300% 100%',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    transition: 'color 0.2s ease-in-out',
                  }}
                >
                  Tu Idea Conviertela en tu negocio
                </h2>
                <p
                  className="text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed lg:text-start text-center animate-fadeUp"
                  data-aos="zoom-in-up"
                  data-aos-delay="700"
                >
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
              </div>
              <div
                className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex animate-fadeUp delay-2"
                data-aos="flip-left"
                data-aos-delay="1000"
              >
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-[#ce7128] text-4xl font-bold font-manrope leading-normal">125+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">lorem ipsum</h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-[#ce7128] text-4xl font-bold font-manrope leading-normal">52+</h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">lorem ipsum</h6>
                </div>
              </div>
            </div>
            <a
              className="relative animate-fadeUp delay-3"
              href="#"
              data-aos="flip-left"
              data-aos-delay="1000"
              style={{
                transition: 'transform 1s ease-in-out, background-color 0.5s ease',
              }}
            >
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="text-lg font-bold leading-tight relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-black transition duration-100 hover:bg-[#ce7128] hover:text-white">
                Sobre Nosotros
              </span>
            </a>
          </div>

          {/* Imágenes a la derecha */}
          <div className="grid grid-cols-2 gap-4">
            <Image
              className="w-full rounded-lg"
              src={Image1}
              alt="office content 1"
              layout="responsive"
              width={500}
              height={300}
              data-aos="fade-up" // Animación para la primera imagen (subiendo)
              data-aos-delay="1000" // Retraso para que la primera imagen salga primero
              style={{
                transition: 'transform 0.5s ease-in-out', // Transición para la imagen
              }}
            />
            <Image
              className="mt-4 w-full lg:mt-20 rounded-lg"
              src={Image2}
              alt="office content 2"
              layout="responsive"
              width={500}
              height={300}
              data-aos="fade-up" // Animación para la segunda imagen
              data-aos-delay="2000" // Retraso mayor para que salga después de la primera
              style={{
                transition: 'transform 0.6s ease-in-out',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
