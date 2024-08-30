export default function SectionContainer({
  children,
  bgColor = "",
  sectionName = "",
}) {
  return (
    <section
      className={`${sectionName} ${bgColor} flex flex-col items-center justify-center gap-20 py-20 text-primary-700`}
    >
      {children}
    </section>
  );
}
