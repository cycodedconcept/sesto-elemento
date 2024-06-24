import { useContext, useEffect } from "react";
import { NavigationContext } from "../context/NavigationContext.jsx";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const SectorsSections = ({
  secImage,
  secHeader,
  secParagraph,
  secParagraphTwo,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedSector, setSelectedSector } = useContext(NavigationContext);

  useEffect(() => {
    if (location.pathname.startsWith("/sectors")) {
      setSelectedSector(location.hash.substring(1));
    }
  }, [location, setSelectedSector]);

  const handleSectorNav = (sector) => {
    setSelectedSector(sector);
    navigate(`/sectors#${sector}`);
  };
  return (
    <section
      className="font-lexend py-32 flex flex-col items-center gap-20 px-4 md:px-8 lg:px-16"
      data-aos="fade-up"
    >
      <div>
        <h2 className="text-4xl sm:text-5xl font-semibold">Our Sectors</h2>
      </div>
      <div>
        <div className="md:border-b md:border-dkBlue text-navGray">
          <ul className="flex flex-col md:flex-row items-center justify-between lg:justify-center gap-2 lg:gap-10 text-sm lg:text-base">
            {[
              { label: "Oil & Gas", key: "oilngas" },
              {
                label: "Construction & Engineering",
                key: "constructionnengineering",
              },
              { label: "Defence", key: "defence" },
              { label: "Infrastructure", key: "infrastructure" },
              { label: "Renewable", key: "renewable" },
            ].map((sector) => (
              <li
                key={sector.key}
                className={`cursor-pointer text-center pb-2 border-b w-[90vw] md:w-fit ${
                  selectedSector === sector.key
                    ? "text-dkBlue border-b-2 border-dkBlue font-semibold"
                    : "border-navGray md:border-none"
                }`}
                onClick={() => handleSectorNav(sector.key)}
              >
                {sector.label}
                {selectedSector === sector.key && (
                  <div className="mt-4 md:hidden">
                    {" "}
                    {/* Only show on mobile */}
                    <div className="px-4 md:px-0 text-left flex flex-col justify-center gap-4 items-center border-t-2 pt-3 border-dkBlue">
                      <div>
                        <img src={secImage} alt={secHeader} />
                      </div>
                      <div className="w-full">
                        <h3 className="text-3xl lg:text-4xl font-semibold text-dkBlue mb-4">
                          {secHeader}
                        </h3>
                        <p className="text-sm lg:text-base text-navGray mb-4">
                          {secParagraph}
                        </p>
                        <p className={"text-sm lg:text-base mb-2"}>
                          {secParagraphTwo}
                        </p>
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
            <img src={secImage} alt={secHeader} />
          </div>
          <div className="w-full xl:w-[50%]">
            <h3 className="text-3xl lg:text-4xl font-semibold text-dkBlue mb-4">
              {secHeader}
            </h3>
            <p className="text-sm lg:text-base text-navGray mb-4">
              {secParagraph}
            </p>
            <p className="text-sm lg:text-base">{secParagraphTwo}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

SectorsSections.propTypes = {
  secImage: PropTypes.string.isRequired,
  secHeader: PropTypes.string.isRequired,
  secParagraph: PropTypes.string.isRequired,
  secParagraphTwo: PropTypes.string.isRequired,
};

export default SectorsSections;
