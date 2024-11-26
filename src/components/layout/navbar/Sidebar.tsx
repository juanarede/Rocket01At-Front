import { CloseIcon } from '@/components/icons/icons';
import LinkItem from './LinkItem';

interface SidebarProps {
  isOpen: boolean;
  links: { href: string, label: string, delay: number }[];
  linksVisible: boolean[];
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, links, linksVisible, toggleSidebar }: SidebarProps) {
  return (
    <div className={`fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-lg flex flex-col sidebar-links">
        <button onClick={toggleSidebar} className="self-end p-4 text-gray-800 focus:outline-none">
          <CloseIcon />
        </button>

        {links.map(({ href, label, delay }, index) => (
          <LinkItem key={index} href={href} label={label} delay={delay} isVisible={linksVisible[index]} />
        ))}
      </div>
    </div>
  );
}
