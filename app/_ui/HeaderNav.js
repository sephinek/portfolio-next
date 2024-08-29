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
            className="border-b-2 border-transparent px-1 py-1 font-medium text-primary-700 transition-all duration-700 ease-in-out hover:border-b-2 hover:border-primary-300"
          >
            {menuObj.menu}
          </Link>
        ))}
      </div>
      <Button>Contact</Button>
    </nav>
  );
}
