import HeaderNav from "@/app/_ui/HeaderNav";
import Logo from "@/app/_ui/Logo";

export default function Header() {
  return (
    <header className="desktop-lg:h-20 fixed z-10 h-16 w-full animate-fadeDown border-b-[1px] border-primary-100 bg-headerTransparent">
      <div className="relative mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
}
