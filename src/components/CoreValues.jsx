import PropTypes from "prop-types";

const CoreValues = ({ bgColor = "bg-offWhite" }) => {
  return (
    <section
      className={`${bgColor} py-36 flex flex-col items-center justify-center gap-36 font-lexend`}
      data-aos="fade-up"
    >
      <h2 className="text-dkBlue text-center text-4xl lg:text-[44px] font-semibold capitalize">
        Our core values
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-6 grid-flow-row xl:flex items-center justify-center gap-6">
        <div className="recsize sm:col-start-1 sm:col-span-2">
          <div className="smrecsize">
            <div className="xsrecsizetop bg-dkBlue"></div>
            <div className="xsrecsizebtm bg-ltBlue"></div>
          </div>
          <p>Integrity</p>
        </div>
        <div className="recsize sm:col-start-3 sm:col-span-2">
          <div className="smrecsize">
            <div className="xsrecsizetop bg-dkBlue z-10"></div>
            <div className="xsrecsizebtm bg-ltBlue z-0"></div>
          </div>
          <p>Team work</p>
        </div>
        <div className="recsize sm:col-start-5 sm:col-span-2">
          <div className="smrecsize">
            <div className="xsrecsizetop bg-ltBlue"></div>
            <div className="xsrecsizebtm bg-dkBlue"></div>
          </div>
          <p className="text-center relative">
            Customer
            <span className="absolute left-[-10%] top-5">satisfaction</span>
          </p>
        </div>
        <div className="recsize sm:col-start-2 sm:col-span-2">
          <div className="smrecsize">
            <div className="xsrecsizetop bg-ltBlue z-10"></div>
            <div className="xsrecsizebtm bg-dkBlue z-0"></div>
          </div>
          <p>Accountability</p>
        </div>
        <div className="recsize sm:col-start-4 sm:col-span-2">
          <div className="smrecsize">
            <div className="xsrecsizetop bg-ltBlue left-[10px] z-10"></div>
            <div className="xsrecsizebtm bg-dkBlue right-[10px] z-0"></div>
          </div>
          <p>Reliability</p>
        </div>
      </div>
    </section>
  );
};

CoreValues.propTypes = {
  bgColor: PropTypes.string.isRequired,
};

export default CoreValues;
