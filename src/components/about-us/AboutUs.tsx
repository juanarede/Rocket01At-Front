'use client';


import Image from 'next/image';
import AboutUsImg from '@/../../public/image/aboutus.jpg';
import useAOS from '@/components/hooks/useAos'; 

export default function AboutUs() {
  useAOS({ duration: 1200, easing: 'ease-out', once: true }); 

  return (
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div className="mt-10 grid grid-cols-1 items-center gap-14 sm:mt-32 lg:mt-10 lg:grid-cols-2">
        <div
          className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center lg:items-start lg:text-left"
          data-aos="fade-up"
        >
          <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
            Sobre Nosotros
          </span>

          <h2
            className="text-white text-8xl font-bold font-manrope leading-[0.9] break-words zuume-font"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Lorem ipsum dolor sit amet
          </h2>

          <p
            className="text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed lg:text-start text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>

          <div
            className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0"
            data-aos="flip-left"
            data-aos-delay="1000"
            style={{
              transition: 'transform 1s ease-in-out, background-color 0.5s ease',
            }}
          >
            <a className="relative" href="#">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="text-lg font-bold leading-tight relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-black transition duration-100 hover:bg-[#ce7128] hover:text-white">
                Lorem ipsum
              </span>
            </a>
          </div>
        </div>

        <div
          className="order-last mx-auto max-w-2xl"
          data-aos="zoom-in"
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
