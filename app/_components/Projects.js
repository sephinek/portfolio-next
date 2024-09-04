import Link from "next/link";
import Image from "next/image";
import HotelBookingAppImg from "@/public/hotel-booking-thumbnail.png";
import NotTomorrowAppImg from "@/public/not-tomorrow-thumbnail.png";
import DocumentScannerAppImg from "@/public/document-Scanner-thumbnail.png";
import SectionContainer from "@/app/_ui/SectionContainer";
import SectionHeading from "@/app/_ui/SectionHeading";

const PROJECTS = [
  {
    name: "Hotel Booking Management App",
    image: HotelBookingAppImg,
    imageAlt: "Dashboard in the app",
    description:
      "A hotel booking management application to help employees effectively manage their bookings, guests, and caibins.",
    features: ["dashboard", "statistics"],
    to: "hotel-booking-management-app",
    bgColor: "bg-[#eec0c8]",
    size: "wide",
  },
  {
    name: "Document Scanner: Script Detection App",
    image: DocumentScannerAppImg,
    imageAlt: "Dashboard in the app",
    description:
      "A real-time text recognition application from live photos using Tesseract.js.",
    features: ["live photo", "text recognition", "camera access"],
    to: "document-scanner",
    bgColor: "bg-[#ACE1AF]",
    size: "narrow",
  },
  {
    name: "Not tomorrow E-Commerce App",
    image: NotTomorrowAppImg,
    imageAlt: "Banner with sky-blue background with a white t-shirt",
    description:
      "A full-stack, responsive e-commerce application designed for a clothing brand.",
    features: [
      "route navigation",
      "category filtering",
      "authentication",
      "product detail",
      "cart",
    ],
    to: "not-tomorrow",
    bgColor: "bg-accent-250",
    size: "wide",
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
            className={`group flex h-[30rem] ${project.size === "wide" ? "w-[40rem]" : "w-[25rem]"} cursor-pointer flex-col items-center gap-5 rounded-[4rem] ${project.bgColor} py-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-inner hover:brightness-110`}
            key={project.name}
          >
            <h3 className="text-balance text-center text-2xl font-black leading-none">
              {project.name}
            </h3>
            <p className="text-balance text-center leading-tight tracking-wider">
              {project.description}
            </p>
            <p className="ease text-sm font-semibold uppercase transition-all duration-500 group-hover:translate-y-1 group-hover:text-base">
              ▼ Explore the project!
            </p>
            <div
              className={`${project.size === "wide" ? "w-1/2" : "w-1/3"} h-2/3 overflow-hidden rounded-3xl border-4 border-primary-300 shadow-md transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110`}
            >
              <Image
                src={project.image}
                alt={project.imageAlt}
                width={"fit-content"}
                height={"fit-content"}
                className="ease h-full w-full object-cover transition duration-500 group-hover:scale-150"
              />
            </div>
          </Link>
        ))}
      </div>
    </SectionContainer>
  );
}
