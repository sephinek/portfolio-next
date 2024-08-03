export default function Button({ children, onClick }) {
  return (
    <button
      className="bg-gradientButton hover:bg-gradientButtonHover flex items-center justify-center rounded-md px-[2px] py-[2px] text-xs font-semibold uppercase tracking-wider text-accent-400 transition-all delay-100 duration-300 ease-in-out hover:shadow-lg"
      onClick={onClick}
    >
      <span className="rounded-md bg-primary-50 px-3 py-2">{children}</span>
    </button>
  );
}
