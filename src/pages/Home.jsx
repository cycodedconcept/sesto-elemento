import { useEffect, useState } from "react";
import HomeSection from "../components/HomeSection";
import industryImage from "../assets/industry.jpg";
import workerImage from "../assets/worker.avif";
import shipsImage from "../assets/ship.jpg";
import ClientsSection from "../components/ClientsSection";
import ContactUs from "./ContactUs";
import WhyusSection from "../components/WhyusSection";
import SectorHomePage from "../components/SectorHomePage";
import CoreValues from "../components/CoreValues";
import ServicesHomePage from "../components/ServicesHomePage";

const sections = [
  {
    bgImage: industryImage,
    header: "Empowering success in projects and operations",
    paragraph:
      "We are an indigenous oil and gas project and operational support servicing company, purposed to provide best-in-class services in markets across Africa and other regions.",
  },
  {
    bgImage: workerImage,
    header: "Global Technology, Local Inclusion",
    paragraph:
      "Guaranteed by our global partnerships, products and services delivered are aligned with advanced technology, giving us the leverage to provide solutions while the required standards are maintained locally.",
  },
  {
    bgImage: shipsImage,
    header: "Procurement and technical services for critical applications",
    paragraph:
      "Pioneering procurement and technical solutions to drive efficiency, reliability and critical performance.",
  },
];

const Home = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-lexend pt-6 xl:pt-0 overflow-x-hidden">
      <HomeSection {...sections[currentSection]} />
      <CoreValues bgColor="bg-offWhite" />
      <WhyusSection />
      <ServicesHomePage />
      <SectorHomePage />
      <ClientsSection />
      <ContactUs />
    </div>
  );
};

export default Home;
