import { Handjet } from "next/font/google";

const handjet = Handjet({
  subsets: ["latin"],
});

export default function TextLoop() {
  return (
    <div className="desktop-lg:mt-0 desktop-lg:block desktop-lg:absolute desktop-lg:left-8 desktop-lg:top-[28%] desktop-lg:w-[750px] mobile-sm:p-4 desktop-lg:text-[3.5rem] tablet:text-[2.8rem] mobile-sm:text-[2.5rem] -mt-4 -rotate-2 overflow-hidden whitespace-nowrap bg-accent-300 p-3 text-[2rem] font-extrabold leading-[1.2] tracking-widest text-primary-50">
      <div
        className={`${handjet.className} inline-block animate-slide overflow-hidden align-bottom`}
      >
        A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Web Developer</span>&nbsp;
        <span className="text-primary-350">Front-End Developer</span>
        &nbsp;A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Web Developer</span>&nbsp;
        <span className="text-primary-350">Front-End Developer</span>
        &nbsp;A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Web Developer</span>&nbsp;
        <span className="text-primary-350">Front-End Developer</span>
        &nbsp;A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Web Developer</span>&nbsp;
        <span className="text-primary-350">Front-End Developer</span>
        &nbsp;A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Web Developer</span>&nbsp;
        <span className="text-primary-350">Front-End Developer</span>
        &nbsp;
      </div>
    </div>
  );
}
