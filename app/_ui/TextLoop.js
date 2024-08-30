import { Handjet } from "next/font/google";

const handjet = Handjet({
  subsets: ["latin"],
});

export default function TextLoop() {
  return (
    <div className="absolute left-8 top-[28%] w-[750px] -rotate-2 overflow-hidden whitespace-nowrap bg-accent-300 px-3 py-5 text-[3.5rem] font-extrabold leading-[1.2] tracking-widest text-primary-50">
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
