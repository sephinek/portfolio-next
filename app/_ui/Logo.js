import Image from "next/image";
import logo from "@/public/logo-transparent.png";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src={logo} width={50} height={50} alt="Sephine's logo" />
    </Link>
  );
}
