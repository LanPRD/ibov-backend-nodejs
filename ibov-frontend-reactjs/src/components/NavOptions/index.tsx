import { Link } from "react-router-dom";

import { NavOptionContainer } from "./styles.js";

interface NavOptionsProps {
  linksName: { to: string; nav: string }[];
}

export function NavOptions({ linksName }: NavOptionsProps) {
  return (
    <NavOptionContainer>
      {linksName.map((linkName, index) => (
        <li key={index}>
          <Link to={linkName.to}>{linkName.nav}</Link>
        </li>
      ))}
    </NavOptionContainer>
  );
}
