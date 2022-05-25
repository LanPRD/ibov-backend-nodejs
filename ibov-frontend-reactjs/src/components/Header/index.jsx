import React from "react";

import { HeaderStyle } from "./styles";

const Header = ({ title }) => (
  <HeaderStyle>
    <h1>{title}</h1>
  </HeaderStyle>
);

export default Header;
