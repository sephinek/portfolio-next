import Link from "next/link";
import Button from "./Button";

const NAV_MENUS = [
  { menu: "Home", href: "/" },
  { menu: "About", href: "/about" },
  { menu: "Projects", href: "/projects" },
];

export default function HeaderNav() {
  return (
    <nav className="flex items-center gap-8">
      <div className="flex gap-8">
        {NAV_MENUS.map((menuObj) => (
          <Link
            href={menuObj.href}
            key={menuObj.menu}
            className="px-1 py-1 font-medium text-primary-700 transition-all duration-200 ease-in-out hover:text-accent-400"
          >
            {menuObj.menu}
          </Link>
        ))}
      </div>
      <Button>Contact</Button>
    </nav>
  );
}
