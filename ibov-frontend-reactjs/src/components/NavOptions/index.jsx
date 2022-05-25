import React from "react";
import { Link } from "react-router-dom";

import { Content } from "./styles.js";

const NavOptions = ({ linksName }) => (
  <Content>
    {linksName.map((linkName, index) => (
      <li key={index}>
        <Link to={linkName.to}>{linkName.nav}</Link>
      </li>
    ))}
  </Content>
);

export default NavOptions;
