import HeaderNav from "@/app/_ui/HeaderNav";
import Logo from "@/app/_ui/Logo";

export default function Header() {
  return (
    <header className="bg-headerTransparent fixed z-10 w-full border-b-[1px] border-primary-100 py-3">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
}
