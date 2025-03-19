export default function SectionContainer({
  children,
  bgColor = "",
  sectionName = "",
}) {
  return (
    <section
      className={`${sectionName} ${bgColor} desktop-lg:gap-20 desktop-lg:py-20 mobile-sm:gap-10 flex flex-col items-center justify-center gap-8 py-16 text-primary-700`}
    >
      {children}
    </section>
  );
}
