import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ClientsSection from "../components/ClientsSection";
import WhyusSection from "../components/WhyusSection";
import ContactUs from "./ContactUs";
import workingOnSiteImage from "../assets/workingonsite.png";
import CoreValues from "../components/CoreValues";
import aboutusBgImage from "../assets/aboutusbg.png";
import researchersImage from "../assets/researchers.png";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash === "whoweare" && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden">
      <section className="bg-skyBlue w-full h-screen py-44 px-4 md:px-8 lg:px-[100px] relative flex items-center font-lexend">
        <div
          className="w-full flex flex-col items-center lg:px-16 pt-32 pb-24 bg-contain gap-4 bg-no-repeat"
          style={{ backgroundImage: `url(${aboutusBgImage})` }}
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-extrabold lg:w-[50%] leading-[60px] text-center text-ltBlue"
            data-aos="fade-down"
          >
            <span className="text-dkBlue">SESTO</span> ELEMENTO{" "}
            <span className="text-dkBlue">SERVICES</span> LIMITED
          </h2>
          <span
            className="text-navGray text-center text-lg md:text-xl lg:text-2xl"
            data-aos="fade-up"
          >
            Sesto elemento services Limited was established in 2013, a leading,
            Procurement, Integration, Installation and Maintenance provider.
          </span>
          <span
            className="text-center text-navGray text-lg md:text-xl lg:text-2xl"
            data-aos="fade-up"
          >
            Sesto elemento is headquartered in Lagos Nigeria and has a satellite
            office in Port Harcourt and Abuja. Our primary focus is on Project
            Procurement services, Technical site assistance services innovative
            solutions enhancing Production (Oil, Gas, Minerals), Mining,
            Pipeline Infrastructure, while its scope extends to various
            environmentally responsible technologies enhance clean and renewable
            energy.
          </span>
        </div>
      </section>
      <section
        id="whoweare"
        ref={sectionRef}
        className="bg-offWhite flex flex-col items-center py-32"
      >
        <div className="text-center w-[80%]" data-aos="fade-up">
          <h2 className="text-dkBlue text-5xl font-semibold mb-3">
            Who we are
          </h2>
          <p className="text-lg text-center text-navGray">
            We are a projects and operations support services firm poised
            towards the provision of solutions in the Oil, Energy, Marine,
            Building and Civil Infrastructure Industry where we develop
            unrivaled trailblazing solutions in building sustainable
            infrastructures that comply with global best practice.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div data-aos="fade-right">
            <img src={researchersImage} alt="researchers" />
          </div>
          <div
            className="lg:pr-16 px-4 md:px-8 md:grid md:grid-cols-2 gap-4 md:justify-between lg:flex lg:flex-col lg:px-0"
            data-aos="fade-left"
          >
            <div>
              <h3 className="text-dkBlue text-[32px] font-semibold">
                Our Vision
              </h3>

              <span className="text-lg text-center text-navGray">
                Our vision is to provide our clients with cost effective value
                adding solutions to achieve success in projects and operations
                with high standards and positive economic position.
              </span>
            </div>
            <div>
              <h3 className="text-dkBlue text-[32px] font-semibold">
                Our Mission
              </h3>
              <span className="text-lg text-center text-navGray">
                To improve customer operation efficiency by reducing products
                and service turnaround time through partnership with global
                manufacturers and engineers. We also keep stock on selected
                items which enables us offer short delivery time. Our quality
                control system aims to enhance customer satisfaction through
                effective procedures.
              </span>
            </div>
          </div>
        </div>
      </section>
      <CoreValues bgColor="bg-skyBlue" />
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center py-32 bg-offWhite">
        <div className="lg:w-[50%] lg:ml-16 px-4 md:px-8 lg:px-0 flex flex-col gap-8 items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl sm:text-[48px] font-semibold text-dkBlue capitalize">
            Our Motivation
          </h2>
          <p className="text-navGray mb-4 text-lg md:text-xl lg:text-2xl">
            We are motivated to achieve the elements needed to provide project
            success and build structures and roadways that will leave a lasting
            impression for our clients, our society and our communities
          </p>
          <Link to="/about-us">
            <button className="bg-dkBlue text-white px-10 py-4 lg:px-36 lg:py-4 text-xs lg:text-sm rounded-lg">
              Work with us
            </button>
          </Link>
        </div>
        <div className="">
          <img src={workingOnSiteImage} alt="two workers" />
        </div>
      </section>
      <WhyusSection />
      <ClientsSection />
      <ContactUs />
    </div>
  );
};

export default AboutUs;
