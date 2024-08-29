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
  SiMongoose,
  SiPostgresql,
  SiMongodb,
  SiGithub,
  SiSupabase,
  SiFirebase,
  SiPostman,
  SiJest,
  SiNetlify,
  SiVercel,
  SiVisualstudiocode,
  SiCanva,
  SiFigma,
  SiWebflow,
  SiGoogleanalytics,
} from "react-icons/si";

const SKILLS = [
  {
    label: "Front-end",
    stacks: [
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Styled-Components", icon: <SiStyledcomponents /> },
      { name: "Sass", icon: <SiSass /> },
    ],
  },
  {
    label: "Back-end",
    stacks: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Mongoose", icon: <SiMongoose /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
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
      { name: "Netlify", icon: <SiNetlify /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "VSCode", icon: <SiVisualstudiocode /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Webflow", icon: <SiWebflow /> },
      { name: "Google Analytics", icon: <SiGoogleanalytics /> },
    ],
  },
];

export default function TechStacks() {
  return (
    <section className="flex flex-col items-center justify-center gap-20 py-20 text-primary-700">
      <h2 className="text-3xl font-bold uppercase">Skills</h2>
      <div className="items-ceter flex flex-col gap-16">
        {SKILLS.map(({ label, stacks }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-9 rounded-2xl bg-primary-100 p-10 shadow-lg"
          >
            <h3 className="text-2xl font-semibold uppercase">{label}</h3>
            <ul className="flex flex-row items-center gap-10 text-accent-400">
              {stacks.map(({ name, icon }) => (
                <li key={name} className="flex flex-col items-center gap-2">
                  <span className="text-3xl">{icon}</span>
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
