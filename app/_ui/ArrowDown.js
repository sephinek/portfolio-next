import { BsCaretDownFill } from "react-icons/bs";

export default function ButtonArrDown() {
  return (
    <div className="absolute bottom-[2%] left-1/2 translate-x-[-50%] transform cursor-default">
      <div className="items-centers flex animate-bounce flex-col items-center gap-1">
        <p className="text-xs font-semibold uppercase tracking-tighter">
          Learn More!
        </p>
        <BsCaretDownFill className="h-5 w-5" />
      </div>
    </div>
  );
}
