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
        <button
  type="button"
  className="flex items-center justify-center text-white text-lg font-bold bg-gradient-to-r from-[#ffcc29] to-[#ff7b54] hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white rounded-lg px-10 py-3 text-center me-2 mb-2"
  style={{
    backgroundSize: '100% 300%',
    transition: 'background-position 2s ease-in-out',
  }}
>
  Registrar
  <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-caret-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" /></svg>
</button>


            </div></>
    );
  }
  