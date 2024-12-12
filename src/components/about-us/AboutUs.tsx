'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import AboutUsImg from '@/../../public/image/aboutus.jpg';

export default function AboutUs() {
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
      <div className="mt-10 grid grid-cols-1 items-center gap-14 sm:mt-32 lg:mt-10 lg:grid-cols-2">
        <div
          ref={textRef}
          className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center lg:items-start lg:text-left opacity-0 translate-y-10 transition-all duration-1000 ease-in-out"
        >
          <span className="text-lg font-medium text-neutral-800 dark:text-neutral-200">Sobre Nosotros</span>
          <h2 className="text-white text-8xl font-bold font-manrope leading-[0.9] break-words zuume-font">
            Lorem ipsum dolor sit amet
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed lg:text-start text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
          </p>
          <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0">
            <a className="relative" href="#">
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="text-lg font-bold leading-tight relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-black transition duration-100 hover:bg-[#ce7128] hover:text-white">
                Lorem ipsum
              </span>
            </a>
          </div>
        </div>
        <div
          ref={imageRef}
          className="order-last mx-auto max-w-2xl opacity-0 translate-y-10 transition-all duration-1000 ease-in-out delay-200"
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
