import { BsCaretDownFill } from "react-icons/bs";

export default function ButtonArrDown() {
  return (
    <button className="absolute left-[50%] top-[63%] translate-y-[-50%] animate-bounce cursor-default">
      <BsCaretDownFill className="h-6 w-6 text-primary-600" />
    </button>
  );
}
