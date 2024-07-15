import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import logoImage from "../assets/logo.png";
import smlogoImage from "../assets/smlogo.png";
import { IoIosArrowDown } from "react-icons/io";
import { NavigationContext } from "../context/NavigationContext";
import { GoDotFill } from "react-icons/go";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const {
    selectedService,
    setSelectedService,
    selectedSector,
    setSelectedSector,
  } = useContext(NavigationContext);

  useEffect(() => {
    if (location.pathname.startsWith("/services")) {
      setSelectedService(location.hash.substring(1));
    }
    if (location.pathname.startsWith("/sectors")) {
      setSelectedSector(location.hash.substring(1));
    }
  }, [location, setSelectedService, setSelectedSector]);

  const handleServiceNav = (service) => {
    setSelectedService(service);
    navigate(`/services#${service}`);
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  const handleSectorNav = (sector) => {
    setSelectedSector(sector);
    navigate(`/sectors#${sector}`);
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  const handleAboutusNav = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 font-lexend">
      <div className="px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" onClick={() => handleLinkClick("/")}>
              <img className="hidden md:block" src={logoImage} alt="Logo" />
              <img
                className="block md:hidden"
                src={smlogoImage}
                alt="Small Logo"
              />
            </Link>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center gap-4 space-x-4">
              <Link
                to="/"
                className="text-navGray group transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => handleLinkClick("/")}
              >
                Home
                <span className="lkhover"></span>
              </Link>

              {/* About Us Dropdown */}
              <div className="relative group">
                <Link
                  to="/about-us"
                  className="text-navGray group transition duration-300 px-3 py-2 rounded-md text-sm font-medium "
                  onClick={() => handleLinkClick("/about-us")}
                >
                  <span className="flex items-center ">
                    About Us
                    <IoIosArrowDown />
                  </span>

                  <span className="lkhover"></span>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-4 text-sm w-[273px]">
                  <Link
                    to="/about-us#whoweare"
                    className="flex items-center gap-1 px-4 py-2 text-navGray hover:underline"
                    onClick={() => handleAboutusNav("/about-us#whoweare")}
                  >
                    <GoDotFill />
                    Mission
                  </Link>
                  <Link
                    to="/about-us#whoweare"
                    className="flex items-center gap-1 px-4 py-2 text-navGray hover:underline"
                    onClick={() => handleAboutusNav("/about-us#whoweare")}
                  >
                    <GoDotFill />
                    Vision
                  </Link>
                </div>
              </div>

              {/* Services Dropdown */}
              <div className="relative group">
                <Link
                  to="/services"
                  className={`text-navGray group transition duration-300 px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                    location.pathname.startsWith("/services") &&
                    selectedService === ""
                      ? "text-dkBlue"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/services")}
                >
                  <span className="flex items-center">
                    Services
                    <IoIosArrowDown />
                  </span>

                  <span className="lkhover"></span>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md text-sm p-4 w-[273px]">
                  {[
                    { label: "Procurement", key: "procurement" },
                    { label: "Contracting", key: "contracting" },
                    { label: "Marine", key: "marine" },
                    { label: "Man Power Supply", key: "manPowerSupply" },
                    { label: "Technical Site Asst", key: "technicalSiteAsst" },
                    { label: "Equipment Lease", key: "equipmentLease" },
                  ].map((service) => (
                    <div
                      key={service.key}
                      onClick={() => handleServiceNav(service.key)}
                      className={`flex items-center gap-1 px-4 py-2 text-navGray cursor-pointer hover:underline ${
                        selectedService === service.key ? "text-dkBlue" : ""
                      }`}
                    >
                      <GoDotFill />
                      {service.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sectors Dropdown */}
              <div className="relative group">
                <Link
                  to="/sectors"
                  className={`text-navGray group transition duration-300 px-3 py-2 rounded-md text-sm font-medium  cursor-pointer ${
                    location.pathname.startsWith("/sectors") &&
                    selectedSector === ""
                      ? "text-dkBlue"
                      : ""
                  }`}
                  onClick={() => handleLinkClick("/sectors")}
                >
                  <span className="flex items-center">
                    Sectors
                    <IoIosArrowDown />
                  </span>

                  <span className="lkhover"></span>
                </Link>
                <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md text-sm p-4 w-[273px]">
                  {[
                    { label: "Oil and Gas", key: "oilngas" },
                    {
                      label: "Construction and Engineering",
                      key: "constructionnengineering",
                    },
                    { label: "Defence", key: "defence" },
                    { label: "Infrastructure", key: "infrastructure" },
                    { label: "Renewable", key: "renewable" },
                  ].map((sector) => (
                    <div
                      key={sector.key}
                      onClick={() => handleSectorNav(sector.key)}
                      className={`flex items-center gap-1 px-4 py-2 text-navGray cursor-pointer hover:underline ${
                        selectedSector === sector.key ? "text-dkBlue" : ""
                      }`}
                    >
                      <GoDotFill />
                      {sector.label}
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Partners Link */}
              <Link
                to="/our-partners"
                className="text-navGray group transition duration-300 px-3 py-2 rounded-md text-sm font-medium"
                onClick={() => handleLinkClick("/our-partners")}
              >
                Our Partners
                <span className="lkhover"></span>
              </Link>
            </div>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-navGray group transition duration-300 focus:outline-none"
            >
              <IoMenu size={24} />
            </button>
          </div>
          <div className="hidden lg:flex">
            <Link
              to="/contact-us"
              className="text-navGray group transition duration-300 px-3 py-2 rounded-md text-sm font-semibold"
              onClick={() => handleLinkClick("/contact-us")}
            >
              Contact Us
              <span className="lkhover"></span>
            </Link>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden max-h-60 w-[80%] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-navGray group transition duration-300 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => handleLinkClick("/")}
            >
              Home
            </Link>
            <div className="relative">
              <Link
                to="/about-us"
                className="text-navGray group transition duration-300 px-3 py-2 rounded-md text-base font-medium flex items-center"
                onClick={() => handleLinkClick("/about-us")}
              >
                About Us
                <IoIosArrowDown className="ml-1" />
              </Link>
              <div className="ml-4 pl-4 border-l border-gray-300">
                <Link
                  to="/about-us#whoweare"
                  className="flex items-center gap-1 px-4 py-2 text-navGray"
                  onClick={() => handleAboutusNav("/about-us#whoweare")}
                >
                  <GoDotFill />
                  Mission
                </Link>
                <Link
                  to="/about-us#whoweare"
                  className="flex items-center gap-1 px-4 py-2 text-navGray"
                  onClick={() => handleAboutusNav("/about-us#whoweare")}
                >
                  <GoDotFill />
                  Vision
                </Link>
              </div>
            </div>
            <div className="relative">
              <Link
                to="/services"
                className="text-navGray group transition duration-300 px-3 py-2 rounded-md text-base font-medium flex items-center"
                onClick={() => handleLinkClick("/services")}
              >
                Services
                <IoIosArrowDown className="ml-1" />
              </Link>
              <div className="ml-4 pl-4 border-l border-gray-300">
                {[
                  { label: "Procurement", key: "procurement" },
                  { label: "Contracting", key: "contracting" },
                  { label: "Marine", key: "marine" },
                  { label: "Man Power Supply", key: "manPowerSupply" },
                  { label: "Technical Site Asst", key: "technicalSiteAsst" },
                  { label: "Equipment Lease", key: "equipmentLease" },
                ].map((service) => (
                  <div
                    key={service.key}
                    onClick={() => handleServiceNav(service.key)}
                    className={`flex items-center gap-1 px-4 py-2 text-navGray cursor-pointer ${
                      selectedService === service.key ? "text-dkBlue" : ""
                    }`}
                  >
                    <GoDotFill />
                    {service.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Link
                to="/sectors"
                className="text-navGray group transition duration-300 px-3 py-2 rounded-md text-base font-medium flex items-center"
                onClick={() => handleLinkClick("/sectors")}
              >
                Sectors
                <IoIosArrowDown className="ml-1" />
              </Link>
              <div className="ml-4 pl-4 border-l border-gray-300">
                {[
                  { label: "Oil and Gas", key: "oilngas" },
                  {
                    label: "Construction and Engineering",
                    key: "constructionnengineering",
                  },
                  { label: "Defence", key: "defence" },
                  { label: "Infrastructure", key: "infrastructure" },
                  { label: "Renewable", key: "renewable" },
                ].map((sector) => (
                  <div
                    key={sector.key}
                    onClick={() => handleSectorNav(sector.key)}
                    className={`flex items-center gap-1 px-4 py-2 text-navGray cursor-pointer ${
                      selectedSector === sector.key ? "text-dkBlue" : ""
                    }`}
                  >
                    <GoDotFill />
                    {sector.label}
                  </div>
                ))}
              </div>
            </div>
            <Link
              to="/our-partners"
              className="text-navGray group transition duration-300 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => handleLinkClick("/our-partners")}
            >
              Our Partners
            </Link>

            <Link
              to="/contact-us"
              className="text-navGray group transition duration-300 block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => handleLinkClick("/contact-us")}
            >
              Contact Us
              <span className="lkhover"></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
