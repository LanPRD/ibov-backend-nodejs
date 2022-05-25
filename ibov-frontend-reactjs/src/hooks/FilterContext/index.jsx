import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext({});

const FilterProvider = ({ children }) => {
  const [dataToFilter, setDataToFilter] = useState([]);
  const [clearFilter, setClearFilter] = useState(false);

  return (
    <FilterContext.Provider
      value={{ dataToFilter, setDataToFilter, clearFilter, setClearFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

function useFilter() {
  const context = useContext(FilterContext);

  if (!context) throw new Error("Missing FilterProvider");

  return context;
}

export { FilterProvider, useFilter };
