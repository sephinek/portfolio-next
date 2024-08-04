import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiSass,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiDbeaver,
  SiGithub,
  SiSupabase,
  SiFirebase,
  SiPostman,
  SiJest,
  SiVisualstudiocode,
  SiFigma,
  SiWebflow,
  SiGoogleanalytics,
} from "react-icons/si";

const SKILLS = [
  {
    label: "Frontend",
    stacks: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Styled-Components", icon: <SiStyledcomponents /> },
      { name: "Sass", icon: <SiSass /> },
    ],
  },
  {
    label: "Backend",
    stacks: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "DBeaver", icon: <SiDbeaver /> },
    ],
  },
  {
    label: "Tools",
    stacks: [
      { name: "Git, GitHub", icon: <SiGithub /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Jest", icon: <SiJest /> },
      { name: "VSCode", icon: <SiVisualstudiocode /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Webflow", icon: <SiWebflow /> },
      { name: "Google Analytics", icon: <SiGoogleanalytics /> },
    ],
  },
];

export default function TechStacks() {
  return (
    <section className="flex flex-col items-center justify-center gap-24 py-20 text-primary-700">
      <h2 className="text-3xl font-bold uppercase">Skills</h2>
      <div className="items-ceter flex flex-col gap-24">
        {SKILLS.map(({ label, stacks }) => (
          <div key={label} className="flex flex-col items-center gap-16">
            <h3 className="text-xl font-semibold uppercase">{label}</h3>
            <ul className="flex flex-row items-center gap-10">
              {stacks.map(({ name, icon }) => (
                <li key={name} className="flex flex-col items-center gap-2">
                  <span className="text-3xl text-primary-700">{icon}</span>
                  <h4 className="text-2xs">{name}</h4>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
