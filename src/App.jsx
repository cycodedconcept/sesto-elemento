import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Services from "./pages/Services.jsx";
import Sectors from "./pages/Sectors.jsx";
import OurPartners from "./pages/OurPartners.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import { NavigationProvider } from "./context/NavigationContext.jsx";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <Router>
        <NavigationProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us/*" element={<AboutUs />} />
            <Route path="/services/*" element={<Services />} />
            <Route path="/sectors/*" element={<Sectors />} />
            <Route path="/our-partners" element={<OurPartners />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </NavigationProvider>
      </Router>
    </div>
  );
};

export default App;
