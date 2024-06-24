import { FiInstagram } from "react-icons/fi";
import { RiFacebookBoxLine } from "react-icons/ri";
import { LiaTwitterSquare } from "react-icons/lia";
import { CiLinkedin } from "react-icons/ci";
import footerlogoImage from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <section className="flex flex-col px-4 md:px-8 lg:px-16 py-20 bg-skyBlue gap-20">
      <div className="flex flex-col gap-4 lg:flex-row justify-between lg:items-center">
        <div className="lg:w-[50%]" data-aos="fade-right">
          <div className="mb-4">
            <img src={footerlogoImage} alt="footer logo" />
          </div>

          <span>
            Delivering maximum value by leveraging on our global sourcing
            networks
          </span>
        </div>

        <div className="hidden md:flex items-center w-full justify-between lg:gap-2 xl:gap-16">
          <ul>
            <li className="font-semibold">Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
          <ul>
            <li className="font-semibold">Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
          <ul>
            <li className="font-semibold">Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
          <ul>
            <li className="font-semibold">Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
          <ul>
            <li className="font-semibold">Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row items-center md:items-start gap-4 justify-between"
        data-aos="fade-up"
      >
        <span>Follow us on all social media platforms</span>
        <div className="flex items-center gap-5 text-xl">
          <FiInstagram />
          <RiFacebookBoxLine />
          <LiaTwitterSquare />
          <CiLinkedin />
        </div>
      </div>
    </section>
  );
};

export default Footer;
