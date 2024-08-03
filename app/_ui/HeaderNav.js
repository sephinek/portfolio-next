import Link from "next/link";
import Button from "./Button";

const NAV_MENUS = [
  { menu: "Home", href: "/" },
  { menu: "About", href: "/about" },
  { menu: "Projects", href: "/projects" },
];

export default function HeaderNav() {
  return (
    <nav className="flex items-center gap-4">
      <div className="flex gap-1">
        {NAV_MENUS.map((menuObj) => (
          <Link
            href={menuObj.href}
            key={menuObj.menu}
            className="rounded-md px-4 py-2 text-primary-700 transition-all delay-75 duration-300 hover:bg-accent-100 hover:shadow-sm"
          >
            {menuObj.menu}
          </Link>
        ))}
      </div>
      <Button>Contact</Button>
    </nav>
  );
}
