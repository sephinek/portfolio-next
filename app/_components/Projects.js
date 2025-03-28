import Link from "next/link";
import Image from "next/image";
import HotelBookingAppImg from "@/public/hotel-booking-thumbnail.png";
import NotTomorrowAppImg from "@/public/not-tomorrow-thumbnail.png";
import DocumentScannerAppImg from "@/public/document-scanner-thumbnail.png";
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
    // to: "hotel-booking-management-app",
    to: "https://github.com/sephinek/react/tree/main/the-wild-oasis",
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
    // to: "document-scanner",
    to: "https://github.com/sephinek/document-scanner-app",
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
    // to: "not-tomorrow",
    to: "https://github.com/sephinek/ecommerce-app",
    bgColor: "bg-accent-250",
    size: "wide",
  },
];

export default function Projects() {
  return (
    <SectionContainer bgColor="bg-primary-100">
      <SectionHeading text="Projects" color="dark" />
      <div className="flex flex-wrap justify-center gap-6 desktop-lg:gap-10">
        {PROJECTS.map((project) => (
          <Link
            // href={`/projects/${project.to}`}
            href={project.to}
            className={`group mx-8 flex desktop-lg:mx-0 desktop-lg:h-[30rem] ${project.size === "wide" ? "desktop-lg:w-[40rem]" : "desktop-lg:w-[25rem]"} cursor-pointer flex-col items-center gap-5 rounded-[4rem] desktop-lg:gap-5 ${project.bgColor} px-6 py-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-inner hover:brightness-110 desktop-lg:p-10`}
            key={project.name}
          >
            <h3 className="text-balance text-center text-xl font-black leading-none mobile-sm:text-2xl">
              {project.name}
            </h3>
            <p className="text-center text-[0.9rem] leading-tight tracking-wider mobile-sm:max-w-[80%] mobile-sm:text-base desktop-lg:text-balance">
              {project.description}
            </p>
            <p className="ease text-sm font-semibold uppercase transition-all duration-500 group-hover:translate-y-1 group-hover:text-base">
              ▼ Explore the project!
            </p>
            <div
              className={`${project.size === "wide" ? "w-full mobile-sm:w-2/3 desktop-lg:w-1/2" : "w-[70%] mobile-sm:w-1/3 desktop-lg:w-1/3"} overflow-hidden rounded-3xl border-4 border-primary-300 shadow-md transition-all duration-500 group-hover:-translate-y-1 group-hover:scale-110 desktop-lg:h-2/3`}
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
