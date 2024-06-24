import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import contactImage from "../assets/contact.png";

const ContactUs = () => {
  return (
    <div className="bg-skyBlue h-full w-[100%] flex items-center justify-center py-32 font-lexend">
      <div className="px-4 md:px-8 lg:px-0 lg:w-[80%] flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-16">
        <div className="lg:w-[30%]" data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Reach Out to Us
          </h2>
          <div className=" flex flex-col gap-2 lg:gap-4">
            <div className="flex items-start gap-4">
              <div className="text-base lg:text-2xl">
                <IoLocationOutline />
              </div>

              <div>
                <p className="text-sm lg:text-base font-light">
                  <span className="block font-medium ">
                    Corporate headquarters:
                  </span>
                  3rd floor, 39 Adeola Odeku Street, Victoria island  Lagos
                  Nigeria
                </p>
                <p className="text-sm lg:text-base font-light">
                  <span className="block font-medium">
                    Branch office/ Operational yard:
                  </span>
                  Plot 28 High street off ordinance road  Trans-Amadi Industrial
                  layout , Port harcourt  Rivers state Nigeria.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-base lg:text-2xl">
                <FiPhoneCall />
              </div>

              <div className="text-sm lg:text-base">
                <span className="block font-medium ">+234 8023535353</span>

                <span className="block font-medium">+234 8136611200</span>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-base lg:text-2xl">
                <FiInstagram />
              </div>
              <span className="text-sm lg:text-base font-light">sesl_ng</span>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-base lg:text-2xl">
                <FiMail />
              </div>
              <span className="text-sm lg:text-base font-light">
                info@sesl-ng.com
              </span>
            </div>
          </div>
        </div>
        <div>
          <img src={contactImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
