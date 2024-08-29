import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: "700",
});

export default function TextLoop() {
  return (
    <div className="absolute left-8 top-[28%] w-[750px] -rotate-2 overflow-hidden whitespace-nowrap bg-accent-300 px-3 py-5 text-[3.5rem] font-semibold leading-[1.1] text-primary-50">
      <div
        className={`${raleway.className} inline-block animate-slide overflow-hidden align-bottom`}
      >
        A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Front-End Developer</span>&nbsp;
        <span className="text-primary-350">Web Developer</span>
        &nbsp;A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Front-End Developer</span>&nbsp;
        <span className="text-primary-350">Web Developer</span>
        &nbsp;A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Front-End Developer</span>&nbsp;
        <span className="text-primary-350">Web Developer</span>
        &nbsp;A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Front-End Developer</span>&nbsp;
        <span className="text-primary-350">Web Developer</span>
        &nbsp;A Full-Stack Developer&nbsp;
        <span className="text-primary-300">Front-End Developer</span>&nbsp;
        <span className="text-primary-350">Web Developer</span>
        &nbsp;
      </div>
    </div>
  );
}
