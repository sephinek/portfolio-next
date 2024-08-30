import Link from "next/link";
import Image from "next/image";
import HotelBookingAppImg from "@/public/hotel-booking-thumbnail.png";
import SectionContainer from "@/app/_ui/SectionContainer";
import SectionHeading from "@/app/_ui/SectionHeading";
import Button from "@/app/_ui/Button";

const PROJECTS = [
  {
    name: "Hotel Booking Management App",
    image: HotelBookingAppImg,
    imageAlt: "Dashboard in the app",
    description:
      "A hotel booking management application to help employees effectively manage their bookings, guests, and caibins.",
    features: ["dashboard", "statistics"],
    to: "hotel-booking-management-app",
    bgColor: "bg-accent-250",
  },
];

export default function Projects() {
  return (
    <SectionContainer bgColor="bg-primary-100" maxWidth="max-w-screen">
      <SectionHeading text="Projects" color="dark" />
      <div className="flex flex-wrap justify-center gap-10">
        {PROJECTS.map((project) => (
          <Link
            href={`/projects/${project.to}`}
            className={`group flex h-[30rem] w-[40rem] cursor-pointer flex-col items-center gap-5 rounded-[4rem] ${project.bgColor} p-8 transition-all duration-500 hover:-translate-y-3 hover:brightness-90`}
            key={project.name}
          >
            <h3 className="text-2xl font-black">{project.name}</h3>
            <p className="text-balance px-10 text-center tracking-wider">
              {project.description}
            </p>
            <Button>Learn more</Button>
            <Image
              src={project.image}
              alt={project.imageAlt}
              style={{ width: "55%", height: "auto", borderRadius: "2rem" }}
              className="transition duration-500 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
