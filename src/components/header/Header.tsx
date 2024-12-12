'use client';
import Image from 'next/image';
import Image1 from '@/../../public/image/image1.png';
import Image2 from '@/../../public/image/image2.png';

export default function Header() {
  return (
    <section style={{ marginTop: '120px' }}>
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex lg:order-first order-last">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2
                  className="text-8xl font-bold font-manrope leading-[0.9] lg:text-start text-center break-words zuume-font animate-gradient"
                  style={{
                    background:
                      'linear-gradient(90deg, #ff7b54, #ffcc29, #4facfe, #00f2fe)',
                    backgroundSize: '300% 100%',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                  }}
                >
                  Tu Idea Conviertela en tu negocio
                </h2>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed lg:text-start text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
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
              className="relative"
              href="#"
              style={{
                transition: 'transform 1s ease-in-out, background-color 0.5s ease',
              }}
            >
              <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
              <span className="text-lg font-bold leading-tight relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-black transition duration-100 hover:bg-[#ce7128] hover:text-white">
                Agendar una Demo
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[Image1, Image2].map((image, index) => (
              <div key={index}>
                <Image
                  className={`w-full rounded-lg ${
                    index === 1 ? 'mt-4 lg:mt-20' : ''
                  }`}
                  src={image}
                  alt={`office content ${index + 1}`}
                  layout="responsive"
                  width={500}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
