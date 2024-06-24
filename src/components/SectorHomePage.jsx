import { Link } from "react-router-dom";
import oneworkerImage from "../assets/oneworker.png";

const SectorHomePage = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center text-center lg:text-left py-32 bg-skyBlue">
      <div data-aos="fade-right">
        <img src={oneworkerImage} alt="one worker" />
      </div>
      <div className="p-4 sm:p-8 lg:mr-16 flex flex-col gap-4">
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold text-dkBlue capitalize">
          <span className="text-ltBlue">Our expertise</span> spans for multiple{" "}
          <span className="text-ltBlue">industries</span>
        </h2>
        <p className="text-navGray mb-4 text-lg md:text-xl lg:text-2xl">
          We offer comprehensive project and operations support across a diverse
          range of sectors. Our expertise spans multiple industries, enabling us
          to cater to the unique needs and requirements of each sector
        </p>
        <Link to="/contact-us">
          <button className="bg-dkBlue text-white px-10 py-4 lg:px-36 lg:py-4 text-xs lg:text-sm rounded-lg">
            Work with us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default SectorHomePage;
