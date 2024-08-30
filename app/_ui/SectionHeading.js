export default function SectionHeading({ text, color = "" }) {
  return (
    <div className="flex flex-col items-center gap-5">
      <h2
        className={`${color === "dark" && "text-primary-800"} ${color === "light" && "text-primary-50"} text-center text-3xl font-semibold uppercase tracking-widest`}
      >
        {text}
      </h2>
      <div className="h-1 w-8 rounded-full bg-accent-500"></div>
    </div>
  );
}
