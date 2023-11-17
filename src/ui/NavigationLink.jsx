import { NavLink } from "react-router-dom";

function NavigationLink({ children, to }) {
  return (
    <li>
      <NavLink to={to} className="pb-0.5 hover:text-linkhover">
        {children}
      </NavLink>
    </li>
  );
}

export default NavigationLink;
