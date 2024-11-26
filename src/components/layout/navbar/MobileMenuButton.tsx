import { HamburgerIcon } from "@/components/icons/icons";

interface MobileMenuButtonProps {
  toggleSidebar: () => void;
}

export default function MobileMenuButton({ toggleSidebar }: MobileMenuButtonProps) {
  return (
    <div className="md:hidden flex items-center">
      <button onClick={toggleSidebar} className="mobile-menu-button focus:outline-none">
        <HamburgerIcon />
      </button>
    </div>
  );
}
