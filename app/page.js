import Image from "next/image";
import HomeBg from "@/public/bg-home.png";

export default function Home() {
  return (
    <>
      <Image
        src={HomeBg}
        className="-z-50"
        fill
        placeholder="blur"
        alt="Gradient background for homepage"
      />
      <p>Home Page</p>
    </>
  );
}
