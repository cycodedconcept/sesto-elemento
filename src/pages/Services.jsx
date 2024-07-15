import { useEffect, useContext, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { NavigationContext } from "../context/NavigationContext";
import ServicesHomePage from "../components/ServicesHomePage";
import ServicesSections from "../components/ServicesSections";
import ContactUs from "./ContactUs";
import procurementImage from "../assets/procurement.png";
import contractingImage from "../assets/contracting.png";
import marineImage from "../assets/marine.png";
import manpowersupplyImage from "../assets/manpowersupply.png";
import technicalsiteasstImage from "../assets/technicalsiteasst.png";
import equipmentleaseImage from "../assets/equipmentlease.png";

const servicesData = {
  procurement: {
    image: procurementImage,
    header: "Procurement",
    paragraph:
      "We provide equipment, materials and consumable related to oil sectors, marine and power generation and renewable energy industry applications.",
  },
  contracting: {
    image: contractingImage,
    header: "Contracting",
    paragraph:
      "We understand the critical importance of seamless project execution and operational efficiency. With our expertise and unwavering commitment, we provide comprehensive contracting solutions and unparalleled support to help your business thrive.",
    paragraphTwo:
      "Our team of seasoned professionals possesses extensive industry knowledge and a proven track record in managing diverse projects across various sectors. From inception to completion, we work closely with you to ensure that your project is delivered on time, within budget, and to the highest quality standards.",
  },
  marine: {
    image: marineImage,
    header: "Marine Services",
    paragraph:
      "Specialized OSVs DP2 Subsea Support Vessels DP2 AHTS DP2 PSVs DP2 Diving Support Vessels Seismic Support Vessels SESTO ELEMENTO SERVICES introduces its marine service support division, We providefit-for-purposeassets designed with specific clients in mind, in consultation with them,focusingon existing and anticipated needs in fourverticals whichinclude Specialized OSVs, General Purpose OSVs, Crew boats, Near Shore Vessels, Barges & Security Vessels. Our diverse fleet can service our clients across all phases of the oil and gas cycle. General Purpose OSVs AHTS / AHTs PSVs Accommodation Work Barges & Workboats Geotechnical Vessels Multi Purpose Offshore Terminal Tugs MPSVs Utility Vessels   Crew boats Near Shore Vessels Barges & Security Vessels Marine Equipment Chartering Commercial Management of Barges and Tow/Support Tugs (40 to 110T  BP)",
    paragraphTwo: "Project Cargo and Pipe Transportation",
    listItems: [
      "Turn key or part lump sum/ part time charter",
      "Tailor-made marine project cargo transportation solutions",
      "Economical and efficient transport solutions",
      "Special Transports, e.g. Pipe, Modules, Xblocks, piles, deck, jackets, structures, etc. Marine Equipment Solutions",
      "Charter of (modified) equipment for specific project requirements",
      "Provision of complete Marine Equipment Packages for offshore and near shore projects",
      "Vessel Chandlering Services, Supplies of Fuels and Lubricants.",
    ],
  },
  manPowerSupply: {
    image: manpowersupplyImage,
    header: "Man Power Supply",
    paragraph:
      "We recognize that skilled and efficient manpower is the backbone of any successful project. With our expertise in sourcing and providing top-tier talent, we ensure that your workforce is equipped to meet the demands of your project and drive optimal operational performance.",
  },
  technicalSiteAsst: {
    image: technicalsiteasstImage,
    header: "Technical Site Asst",
    paragraph:
      "All Customers are invited to benefit from our customer technical assistance either onsite or offsite in order to provide better services. Responding to domestic and international customers’ inquiries in a short time, and accurate transfer of customers’ demand to the related department. Customers can benefit from technical services in 3 main categories: Before Sales, During sales, After Sales. ",
    paragraphTwo: "We provide the following services:",
    paragraphTwoColor: "text-ltBlue",
    listItems: [
      "Inspection",
      "Installation – Electrical and Instrument",
      "Equipment Commissioning & Decommissioning",
      "Various Surveys Services",
      "Supply and erection of scaffolding",
      "Marine Services",
      "Equipment rental",
      "Permanent and Temporary site accommodation",
    ],
  },
  equipmentLease: {
    image: equipmentleaseImage,
    header: "Equipment Lease",
    paragraph:
      "We are aware that having the right equipment is essential for the seamless execution of your projects. We offer a comprehensive range of equipment lease options tailored to meet your specific needs, ensuring that you have access to the tools necessary to drive efficiency and productivity.",
    paragraphTwo:
      "Our extensive fleet of state-of-the-art equipment is meticulously maintained and regularly serviced to deliver exceptional performance and reliability. From heavy machinery to specialized tools, we have the resources to support a wide range of industries and project requirements.",
  },
};

const servicesKeys = Object.keys(servicesData);

const Services = () => {
  const { selectedService, setSelectedService } = useContext(NavigationContext);
  const location = useLocation();
  const sectionRef = useRef(null);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && servicesData[hash]) {
      setSelectedService(hash);
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      setSelectedService(servicesKeys[currentServiceIndex]);
    }
  }, [location, setSelectedService, currentServiceIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex(
        (prevIndex) => (prevIndex + 1) % servicesKeys.length
      );
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedService(servicesKeys[currentServiceIndex]);
  }, [currentServiceIndex, setSelectedService]);

  const isValidService = selectedService && servicesData[selectedService];

  return (
    <div className="font-lexend overflow-x-hidden">
      <ServicesHomePage />
      <div ref={sectionRef}>
        {isValidService && (
          <ServicesSections
            ssImage={servicesData[selectedService].image}
            ssHeader={servicesData[selectedService].header}
            ssParagraph={servicesData[selectedService].paragraph}
            ssParagraphTwo={servicesData[selectedService].paragraphTwo}
            ssParagraphTwoColor={
              servicesData[selectedService].paragraphTwoColor
            }
            ssListItems={servicesData[selectedService].listItems}
          />
        )}
      </div>
      <ContactUs />
    </div>
  );
};

export default Services;
