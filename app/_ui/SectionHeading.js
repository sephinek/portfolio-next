export default function SectionHeading({ text, color = "" }) {
  return (
    <div className="desktop-lg:gap-5 mobile-sm:gap-3 flex flex-col items-center gap-2">
      <h2
        className={`${color === "dark" && "text-primary-800"} ${color === "light" && "text-primary-50"} desktop-lg:text-3xl mobile-sm:text-2xl text-center text-xl font-semibold uppercase tracking-widest`}
      >
        {text}
      </h2>
      <div className="desktop-lg:w-8 mobile-sm:w-7 h-1 w-6 rounded-full bg-accent-500"></div>
    </div>
  );
}
