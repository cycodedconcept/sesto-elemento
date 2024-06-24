import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [selectedService, setSelectedService] = useState("procurement");
  const [selectedSector, setSelectedSector] = useState("oilngas");

  return (
    <NavigationContext.Provider
      value={{
        selectedService,
        setSelectedService,
        selectedSector,
        setSelectedSector,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

NavigationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
