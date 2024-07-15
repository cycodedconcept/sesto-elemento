import { Link, useNavigate } from "react-router-dom";
import { RiInstagramLine } from "react-icons/ri";
import { RiFacebookLine } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import footerlogoImage from "../assets/footerlogo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="flex flex-col px-4 md:px-8 lg:px-16 py-20 bg-skyBlue gap-20 font-lexend">
      <div className="flex flex-col gap-4 lg:gap-8 xl:gap-16 lg:flex-row justify-between lg:items-start">
        <div className="lg:w-[50%]" data-aos="fade-right">
          <div className="mb-4">
            <img src={footerlogoImage} alt="footer logo" />
          </div>
          <span>
            Delivering maximum value by leveraging on our global sourcing
            networks
          </span>
        </div>

        <div className="hidden md:flex items-start w-full justify-between lg:gap-2 xl:gap-16">
          <ul>
            <li className="ftlinkhd">
              <Link
                to="/"
                onClick={() => handleLinkClick("/")}
                className="group transition duration-300"
              >
                Company
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/about-us"
                onClick={() => handleLinkClick("/about-us")}
                className="group transition duration-300"
              >
                About us
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/our-partners"
                onClick={() => handleLinkClick("/our-partners")}
                className="group transition duration-300"
              >
                Our Partners
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/about-us#whoweare"
                className="group transition duration-300"
              >
                Faq
                <span className="lkhover"></span>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="ftlinkhd">
              <Link
                to="/services"
                onClick={() => handleLinkClick("/services")}
                className="group transition duration-300"
              >
                Our Service
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/services#procurement"
                className="group transition duration-300"
              >
                Procurement
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/services#contracting"
                className="group transition duration-300"
              >
                Contracting
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/services#marine"
                className="group transition duration-300"
              >
                Marine
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/services#manPowerSupply"
                className="group transition duration-300"
              >
                Man power Supply
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/services#technicalSiteAsst"
                className="group transition duration-300"
              >
                Technical Site Asst
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/services#equipmentLease"
                className="group transition duration-300"
              >
                Equipment Lease
                <span className="lkhover"></span>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="ftlinkhd">
              <Link
                to="/sectors"
                onClick={() => handleLinkClick("/sectors")}
                className="group transition duration-300"
              >
                Our Sector
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/sectors#oilngas"
                className="group transition duration-300"
              >
                Oil and Gas
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/sectors#constructionnengineering"
                className="group transition duration-300"
              >
                Construction and Engineering
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/sectors#defence"
                className="group transition duration-300"
              >
                Defence
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/sectors#infrastructure"
                className="group transition duration-300"
              >
                Infrastructure
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/sectors#renewable"
                className="group transition duration-300"
              >
                Renewable
                <span className="lkhover"></span>
              </Link>
            </li>
          </ul>
          <ul>
            <li className="ftlinkhd">
              <Link
                to="/contact-us"
                onClick={() => handleLinkClick("/contact-us")}
                className="group transition duration-300"
              >
                Contact Us
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/contact-us"
                onClick={() => handleLinkClick("/contact-us")}
                className="group transition duration-300"
              >
                Customer Support
                <span className="lkhover"></span>
              </Link>
            </li>
            <li className="ftlist">
              <Link
                to="/contact-us"
                onClick={() => handleLinkClick("/contact-us")}
                className="group transition duration-300"
              >
                Help
                <span className="lkhover"></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-between"
        data-aos="fade-up"
      >
        <span>Follow us on all social media platforms</span>
        <div className="flex items-center gap-5 text-2xl text-dkBlue">
          <span className="h-5 w-5 flex items-center rounded-lg text-2xl relative hover:bg-dkBlue p-0 cursor-pointer group transition duration-300 hover:text-skyBlue">
            <span className="absolute right-[-2.5px] text-[25px]">
              <RiInstagramLine />
            </span>
            <span className="h-5 w-5 border-2 border-dkBlue rounded-md z-10"></span>
          </span>

          <span className="text-xl border-2 border-dkBlue relative rounded-md h-5 w-5 cursor-pointer group transition duration-300 hover:text-skyBlue hover:bg-dkBlue">
            <span className="absolute left-[-2px] bottom-[-5.34px]">
              <RiFacebookLine />
            </span>
          </span>

          <span className="text-base border-2 border-dkBlue rounded-md h-5 w-5 cursor-pointer group transition duration-300 hover:text-skyBlue hover:bg-dkBlue">
            <RiTwitterFill />
          </span>

          <span className="text-base border-2 border-dkBlue rounded-md h-5 w-5 cursor-pointer group transition duration-300 hover:text-skyBlue hover:bg-dkBlue">
            <RiLinkedinFill />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
