interface LinkItemProps {
    href: string;
    label: string;
    delay: number;
    isVisible: boolean;
  }
  
  export default function LinkItem({ href, label, delay, isVisible }: LinkItemProps) {
    return (
      <a
        href={href}
        className={`py-2 px-4 text-5xl text-black transition-all duration-300 ease-in-out zuume-font ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {label}
      </a>
    );
  }
  