import { useContext, useEffect } from "react";
import { NavigationContext } from "../context/NavigationContext.jsx";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const ServicesSections = ({
  ssImage,
  ssHeader,
  ssParagraph,
  ssParagraphTwo,
  ssParagraphTwoColor,
  ssListItems,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedService, setSelectedService } = useContext(NavigationContext);

  useEffect(() => {
    if (location.pathname.startsWith("/services")) {
      setSelectedService(location.hash.substring(1));
    }
  }, [location, setSelectedService]);

  const handleServiceNav = (service) => {
    setSelectedService(service);
    navigate(`/services#${service}`);
  };

  return (
    <section
      className="font-lexend py-32 flex flex-col items-center gap-20 px-4 md:px-8 lg:px-16"
      data-aos="fade-up"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold">
          Services we offer
        </h2>
      </div>
      <div>
        <div className="md:border-b md:border-dkBlue text-navGray">
          <ul className="flex flex-col md:flex-row items-center justify-between lg:justify-center gap-2 lg:gap-10 text-sm lg:text-base">
            {[
              { label: "Procurement", key: "procurement" },
              { label: "Contracting", key: "contracting" },
              { label: "Marine", key: "marine" },
              { label: "Man power Supply", key: "manPowerSupply" },
              { label: "Technical Site Asst", key: "technicalSiteAsst" },
              { label: "Equipment Lease", key: "equipmentLease" },
            ].map((service) => (
              <li
                key={service.key}
                className={`cursor-pointer text-center pb-2 border-b w-[90vw] md:w-fit ${
                  selectedService === service.key
                    ? "text-dkBlue border-b-2 border-dkBlue font-semibold"
                    : "border-navGray md:border-none"
                }`}
                onClick={() => handleServiceNav(service.key)}
              >
                {service.label}
                {selectedService === service.key && (
                  <div className="mt-4 md:hidden">
                    {" "}
                    {/* Only show on mobile */}
                    <div className="px-4 md:px-0 text-left flex flex-col justify-center gap-4 items-center border-t-2 pt-3 border-dkBlue">
                      <div>
                        <img src={ssImage} alt={ssHeader} />
                      </div>
                      <div className="w-full">
                        <h3 className="text-3xl lg:text-4xl font-semibold text-dkBlue mb-4">
                          {ssHeader}
                        </h3>
                        <p className="text-sm lg:text-base text-navGray mb-4">
                          {ssParagraph}
                        </p>
                        <p
                          className={`text-sm lg:text-base mb-2 ${ssParagraphTwoColor}`}
                        >
                          {ssParagraphTwo}
                        </p>
                        {ssListItems && ssListItems.length > 0 && (
                          <ul className="list-disc pl-5">
                            {ssListItems.map((item, index) => (
                              <li key={index} className="text-navGray">
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden px-4 md:px-0 flex-col md:grid md:grid-cols-2 xl:flex xl:flex-row justify-center gap-4 md:gap-8 lg:gap-16 xl:gap-32 items-center mt-16 xl:px-36">
          {" "}
          {/* Only show on medium and above */}
          <div>
            <img src={ssImage} alt={ssHeader} />
          </div>
          <div className="w-full xl:w-[50%]">
            <h3 className="text-3xl lg:text-4xl font-semibold text-dkBlue mb-4">
              {ssHeader}
            </h3>
            <p className="text-sm lg:text-base text-navGray mb-4">
              {ssParagraph}
            </p>
            <p className={`text-sm lg:text-base mb-2 ${ssParagraphTwoColor}`}>
              {ssParagraphTwo}
            </p>
            {ssListItems && ssListItems.length > 0 && (
              <ul className="list-disc pl-5">
                {ssListItems.map((item, index) => (
                  <li key={index} className="text-navGray">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

ServicesSections.propTypes = {
  ssImage: PropTypes.string.isRequired,
  ssHeader: PropTypes.string.isRequired,
  ssParagraph: PropTypes.string.isRequired,
  ssParagraphTwo: PropTypes.string.isRequired,
  ssParagraphTwoColor: PropTypes.string,
  ssListItems: PropTypes.arrayOf(PropTypes.string),
};

ServicesSections.defaultProps = {
  ssParagraphTwoColor: "",
  ssListItems: [],
};

export default ServicesSections;
