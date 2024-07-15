import nnpc from "../assets/nnpc.png";
import total from "../assets/total.png";
import saipem from "../assets/saipem.png";
import mairetecnimont from "../assets/mairetecnimont.png";
import lng from "../assets/lng.png";
import chec from "../assets/chec.png";
import egbin from "../assets/egbin.png";
import eroton from "../assets/eroton.png";
import entrepose from "../assets/entrepose.png";
import netco from "../assets/netco.png";
import africancircle from "../assets/africancircle.png";
import deuxproject from "../assets/deuxproject.png";
import shell from "../assets/shell.png";

const ClientsSection = () => {
  return (
    <section className="bg-offWhite py-32 font-lexend" data-aos="fade-up">
      <div className="px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-16">
        <h2 className="text-2xl text-center font-medium text-dkBlue mb-8">
          Clients we’ve worked with
        </h2>

        <div className="flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-8 lg:gap-16 items-center lg:px-16 lg:w-full justify-items-center justify-between">
          <div className="md:col-start-2 md:col-span-2 lg:col-start-1">
            <img src={nnpc} alt="" className="logos" />
          </div>
          <div className="md:col-start-4 md:col-span-2 lg:col-start-3">
            <img src={total} alt="" className="logos" />
          </div>
          <div className="md:col-start-1 md:col-span-2 lg:col-start-5">
            <img src={saipem} alt="" className="logos" />
          </div>
          <div className="md:col-start-3 md:col-span-2 lg:col-start-7">
            <img src={mairetecnimont} alt="" className="logos" />
          </div>
          <div className="md:col-start-5 md:col-span-2 lg:col-start-1">
            <img src={lng} alt="" className="logos" />
          </div>
          <div className="md:col-start-1 md:col-span-2 lg:col-start-3">
            <img src={chec} alt="" className="logos" />
          </div>
          <div className="md:col-start-3 md:col-span-2 lg:col-start-5">
            <img src={egbin} alt="" className="logos" />
          </div>
          <div className="md:col-start-5 md:col-span-2 lg:col-start-7">
            <img src={eroton} alt="" className="logos" />
          </div>
          <div className="md:col-start-1 md:col-span-2 lg:col-start-2">
            <img src={entrepose} alt="" className="logos" />
          </div>
          <div className="md:col-start-3 md:col-span-2 lg:col-start-4">
            <img src={netco} alt="" className="logos" />
          </div>
          <div className="md:col-start-5 md:col-span-2 lg:col-start-6">
            <img src={africancircle} alt="" className="logos" />
          </div>
          <div className="md:col-start-2 md:col-span-2 lg:col-start-3">
            <img src={deuxproject} alt="" className="logos" />
          </div>
          <div className="md:col-start-4 md:col-span-2 lg:col-start-5">
            <img src={shell} alt="" className="logos" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
