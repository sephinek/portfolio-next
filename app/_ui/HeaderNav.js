"use client";

import Link from "next/link";
import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import Button from "./Button";

const NAV_MENUS = [
  { menu: "Home", href: "/" },
  { menu: "About", href: "/about" },
  { menu: "Projects", href: "/projects" },
];

export default function HeaderNav() {
  const [navOpen, setNavOpen] = useState(false);
  const navClickHandler = () => {
    setNavOpen((open) => !open);
  };

  return (
    <>
      <nav className="tablet:flex laptop:text-base laptop:gap-8 hidden items-center gap-5 text-sm">
        <div className="flex gap-7">
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
      <nav
        className="tablet:hidden active:bg-accent-100a block rounded-md p-[3px]"
        onClick={navClickHandler}
      >
        <LuMenu
          className={`ease text-3xl transition duration-300 ${navOpen ? "text-primary-400" : ""}`}
        />
        {navOpen && (
          <div className="absolute left-0 top-full flex flex-col gap-7">
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
        )}
      </nav>
    </>
  );
}
