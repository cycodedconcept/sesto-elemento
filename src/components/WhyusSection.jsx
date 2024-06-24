import suitsImage from "../assets/suits.png";
import { Link } from "react-router-dom";

const WhyusSection = () => {
  return (
    <section className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center py-32 bg-skyBlue">
      <div data-aos="fade-right">
        <img src={suitsImage} alt="Suits" />
      </div>
      <div className="p-4 sm:p-8 lg:mr-16 flex flex-col gap-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] text-center lg:text-left font-semibold text-dkBlue">
          Why us?
        </h2>
        <p className="text-navGray mb-4 text-lg md:text-xl lg:text-2xl text-center lg:text-left">
          Our track record speaks for itself. We have a long history of
          successfully executing projects of all sizes and complexities. Our
          satisfied clients have consistently praised our ability to deliver
          projects on time, within budget, and to the highest quality standards.
        </p>
        <Link
          to="/contact-us"
          className="flex items-center lg:items-start lg:justify-start justify-center"
        >
          <button className="bg-dkBlue text-white px-10 py-4 lg:px-36 lg:py-4 text-xs lg:text-sm rounded-lg">
            Work with us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WhyusSection;
