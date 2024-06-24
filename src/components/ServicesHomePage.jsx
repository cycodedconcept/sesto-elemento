import { Link } from "react-router-dom";
import twoworkersImage from "../assets/twoworkers.png";

const ServicesHomePage = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row justify-between items-end lg:items-center text-center lg:text-left py-32 bg-offWhite">
      <div
        className="lg:w-[50%] lg:ml-16 flex flex-col gap-4 p-4 sm:p-8"
        data-aos="fade-right"
      >
        <h2 className="text-4xl md:text-[48px] font-semibold text-dkBlue capitalize">
          <span className="text-ltBlue">Maximizing</span> operational efficiency
          for <span className="text-ltBlue">sustainable growth</span>{" "}
        </h2>
        <p className="text-navGray mb-4 text-lg md:text-xl lg:text-2xl">
          At Sesto Elemento ltd. We pride ourselves in helping clients save
          time, reduce costs, enhance project efficiency, and mitigate risks.
        </p>
        <Link to="/about-us">
          <button className="bg-dkBlue text-white px-10 py-4 lg:px-36 lg:py-4 text-xs lg:text-sm rounded-lg">
            Read More
          </button>
        </Link>
      </div>

      <div className="">
        <img src={twoworkersImage} alt="two workers" />
      </div>
    </section>
  );
};

export default ServicesHomePage;
