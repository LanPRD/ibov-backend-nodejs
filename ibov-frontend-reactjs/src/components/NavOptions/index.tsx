import { Link } from "react-router-dom";

import { NavOptionContainer } from "./styles.js";

const links = [
  { nav: "HOME", to: "/" },
  { nav: "TOP LIST", to: "/toplist" },
  { nav: "STOCK LIST", to: "/stocks" },
  { nav: "FII LIST", to: "/fiis" },
];

export function NavOptions() {
  return (
    <NavOptionContainer>
      {links.map((linkName, index) => (
        <li key={index}>
          <Link to={linkName.to}>{linkName.nav}</Link>
        </li>
      ))}
    </NavOptionContainer>
  );
}
