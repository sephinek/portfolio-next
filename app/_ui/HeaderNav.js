import Link from "next/link";
import Button from "./Button";

const NAV_MENUS = [
  { menu: "Home", href: "/" },
  { menu: "About", href: "/about" },
  { menu: "Projects", href: "/projects" },
];

export default function HeaderNav() {
  return (
    <nav className="flex items-center gap-9 text-sm">
      <div className="grid grid-cols-[repeat(3,5em)] gap-7">
        {NAV_MENUS.map((menuObj) => (
          <Link
            href={menuObj.href}
            key={menuObj.menu}
            className="mx-auto border-b-2 border-transparent px-1 pb-[5px] transition duration-300 hover:border-primary-500 hover:font-medium"
          >
            {menuObj.menu}
          </Link>
        ))}
      </div>
      <Button>Contact</Button>
    </nav>
  );
}
