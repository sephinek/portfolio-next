import { Jacques_Francois_Shadow, Jost } from "next/font/google";
import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";

const jacques = Jacques_Francois_Shadow({ subsets: ["latin"], weight: "400" });
const jost = Jost({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sephine's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jost.className} flex min-h-screen flex-col bg-white tracking-wide text-primary-500 antialiased`}
      >
        <Header />
        <main className="mt-[65px] grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
