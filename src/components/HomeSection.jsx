import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeSection = ({ bgImage, header, paragraph }) => {
  return (
    <div
      className="relative w-full h-screen"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#EDEDED",
      }}
    >
      <div className="absolute inset-0"></div>
      <div
        className="relative z-10 flex flex-col items-center lg:items-start  justify-center h-full lg:w-[50%] px-4 md:px-8 lg:px-16"
        data-aos="fade-right"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-center lg:text-left font-semibold text-white mb-6 capitalize">
          {header.split(" ").map((word, index) => (
            <span
              key={index}
              className={index % 2 === 0 ? "text-ltBlue" : "text-dkBlue"}
            >
              {word}{" "}
            </span>
          ))}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-navGray mb-4 text-center lg:text-left">
          {paragraph}
        </p>
        <Link to="/contact-us">
          <button className="bg-dkBlue text-white px-10 py-4 lg:px-36 lg:py-4 text-xs lg:text-sm rounded-lg">
            Work with us
          </button>
        </Link>
      </div>
    </div>
  );
};

HomeSection.propTypes = {
  bgImage: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
};

export default HomeSection;
