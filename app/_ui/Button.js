export default function Button({ children, onClick }) {
  return (
    <button
      className="desktop-lg:text-xs flex items-center justify-center rounded-md bg-gradientButton px-[2px] py-[2px] text-2xs font-semibold uppercase tracking-wider text-accent-400 transition-all delay-100 duration-300 ease-in-out hover:bg-gradientButtonHover hover:shadow-lg"
      onClick={onClick}
    >
      <span className="desktop-lg:px-3 desktop-lg:py-2 rounded-md bg-primary-50 px-2 py-1">
        {children}
      </span>
    </button>
  );
}
