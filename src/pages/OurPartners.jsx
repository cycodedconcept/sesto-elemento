import ClientsSection from "../components/ClientsSection";
import ContactUs from "./ContactUs";
import futureFibre from "../assets/futurefibre.png";
import sel from "../assets/sel.png";
import axis from "../assets/axis.png";
import alvarado from "../assets/alvarado.png";
import idteck from "../assets/idteck.png";
import cortem from "../assets/cortem.png";
import lever from "../assets/lever.png";
import ava from "../assets/ava.png";

const partners = [futureFibre, sel, axis, alvarado, idteck, cortem, lever, ava];

const OurPartners = () => {
  return (
    <div className="font-lexend overflow-x-hidden">
      <section className="h-screen flex flex-col gap-[30px] items-center justify-center">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl sm:text-5xl font-semibold text-dkBlue">
            Our Partners
          </h2>
          <span className="text-base sm:text-lg text-navGray">
            Working together, Ensuring excellence.
          </span>
        </div>
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {partners.slice(0, 6).map((client, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-20 md:h-24 lg:h-32 xl:h-full"
                />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {partners.slice(6, 8).map((client, index) => (
              <div key={index} className="flex justify-center items-center p-4">
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="h-20 md:h-24 lg:h-32 xl:h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <ClientsSection />
      <ContactUs />
    </div>
  );
};

export default OurPartners;
