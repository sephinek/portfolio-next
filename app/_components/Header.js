import HeaderNav from "@/app/_ui/HeaderNav";
import Logo from "@/app/_ui/Logo";

export default function Header() {
  return (
    <header className="animate-fadeDown fixed z-10 h-20 w-full border-b-[1px] border-primary-100 bg-headerTransparent">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-3">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
}
