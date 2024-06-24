import { useEffect, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";
import SectorHomePage from "../components/SectorHomePage";
import SectorsSections from "../components/SectorsSections";
import ContactUs from "./ContactUs";
import oilngasImage from "../assets/oilngas.png";
import constructionnengineeringImage from "../assets/constructionnengineering.png";
import defenceImage from "../assets/defence.png";
import infrastructureImage from "../assets/infrastructure.png";
import renewableImage from "../assets/renewable.png";

const sectorsData = {
  oilngas: {
    image: oilngasImage,
    header: "Oil, Gas, and Energy",
    paragraph:
      "Our team is experienced in supporting projects in the oil, gas, and energy sectors, including exploration, production, refining, and distribution. We offer specialized services such as manpower supply, equipment lease, logistics management, and safety compliance.",
  },
  constructionnengineering: {
    image: constructionnengineeringImage,
    header: "Construction & Engineering",
    paragraph:
      "We provide end-to-end support for construction and engineering projects, offering services such as construction management, design coordination, procurement, and skilled labor supply.",
  },
  defence: {
    image: defenceImage,
    header: "Defence",
    paragraph:
      "SESTO ELEMENTO SERVICES supply a broad portfolio of airborne, land and naval systems and products for defense, homeland security and commercial applications. Our systems and products are installed on new platforms, and we also perform comprehensive platform modernization programs. In addition, we provide a range of training and support services. Our major activities include: military aircraft and helicopter systems; commercial aviation systems and aerostructures; unmanned aircraft systems (UAS); electro-optic, night vision and countermeasures systems; naval systems; land vehicle systems; munitions; command, control, communications, computer, intelligence, surveillance and reconnaissance (C4ISR) and cyber systems; electronic warfare and signal intelligence systems; and other commercial activities. Many of these major activities have a number of common and related elements, including common technologies and products, types of programs and customer interface. ",
    paragraphTwo:
      "Therefore, certain of our subsidiaries, divisions or other operating units often jointly conduct marketing, research and development, manufacturing, performance of programs, sales and after sales support among these major activities.",
  },
  infrastructure: {
    image: infrastructureImage,
    header: "Infrastructure",
    paragraph:
      "From transportation networks to public facilities, we provide comprehensive support for infrastructure development projects. Our services include project planning, contract management, stakeholder coordination, and quality assurance.",
  },
  renewable: {
    image: renewableImage,
    header: "Renewable",
    paragraph:
      "From project inception to ongoing operations, we offer tailored solutions to support your renewable energy endeavors. Our services include project planning, feasibility studies, permitting and regulatory compliance, equipment procurement, construction management, and maintenance support.",
    paragraphTwo:
      "We also have extensive experience in optimizing renewable energy systems, ensuring maximum efficiency and performance. Our team can assist with energy storage solutions, grid integration, monitoring and control systems, and ongoing operations and maintenance.",
  },
};

const Sectors = () => {
  const { selectedSector, setSelectedSector } = useContext(NavigationContext);
  const location = useLocation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && sectorsData[hash]) {
      setSelectedSector(hash);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setSelectedSector("oilngas");
    }
  }, [location, setSelectedSector]);

  const isValidSector = selectedSector && sectorsData[selectedSector];

  return (
    <div className="font-lexend overflow-x-hidden">
      <SectorHomePage />
      <div ref={sectionRef}>
        {isValidSector && (
          <SectorsSections
            secImage={sectorsData[selectedSector].image}
            secHeader={sectorsData[selectedSector].header}
            secParagraph={sectorsData[selectedSector].paragraph}
            secParagraphTwo={sectorsData[selectedSector].paragraphTwo}
          />
        )}
      </div>
      <ContactUs />
    </div>
  );
};

export default Sectors;
