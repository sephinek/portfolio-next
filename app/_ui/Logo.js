import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="ease desktop-lg:text-2xl text-xl font-black uppercase tracking-tight text-logo transition duration-300 hover:brightness-90"
    >
      Sephine.dev
    </Link>
  );
}
