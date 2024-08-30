import { BsCaretDownFill } from "react-icons/bs";

export default function ButtonArrDown() {
  return (
    <button className="absolute bottom-[10%] left-[50%] translate-y-[-50%] animate-bounce cursor-default">
      <BsCaretDownFill className="h-6 w-6" />
    </button>
  );
}
