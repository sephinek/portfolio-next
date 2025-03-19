import { BsCaretDownFill } from "react-icons/bs";

export default function ButtonArrDown() {
  return (
    <div className="desktop-lg:bottom-[2%] absolute bottom-[1%] left-1/2 translate-x-[-50%] transform cursor-default">
      <div className="items-centers mobile-sm:gap-1 flex animate-bounce flex-col items-center gap-0">
        <p className="mobile-sm:text-xs text-2xs font-semibold uppercase tracking-tighter">
          Learn More!
        </p>
        <BsCaretDownFill className="mobile-sm:h-5 mobile-sm:w-5 h-3 w-3" />
      </div>
    </div>
  );
}
