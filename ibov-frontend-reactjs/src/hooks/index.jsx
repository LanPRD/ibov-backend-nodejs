import React from "react";

import { FilterProvider } from "./FilterContext";

const AppProvider = ({ children }) => {
  return <FilterProvider>{children}</FilterProvider>;
};

export default AppProvider;
