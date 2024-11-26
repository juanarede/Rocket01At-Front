export default function DesktopMenu() {
    return (
        <><div className="hidden md:flex items-center space-x-4 flex-grow justify-center">
            <a href="#" className="text-lg font-bold leading-tight">
                Inicio
            </a>
            <a href="#" className="text-lg font-bold leading-tight">
                Sobre Nosotros
            </a>
        </div><div className="hidden md:flex items-center">
                <a className="relative" href="#">
                    <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>
                    <span className="text-lg font-bold leading-tight relative inline-block h-full w-full rounded border-2 border-black bg-white px-4 py-2 text-black transition duration-100 hover:bg-[#ce7128] hover:text-white">
                        Contactanos
                    </span>
                </a>

            </div></>
    );
  }
  