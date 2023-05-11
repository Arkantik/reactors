import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="px-4 flex justify-between items-center">
        <NavLink to="/">
          <img
            src="/assets/images/logo-2.png"
            alt="logo HoliFun"
            width="48"
            height="48"
            className="block"
          />
        </NavLink>
        <ul className="hidden md:flex gap-16 pr-4 font-bold no-underline">
          <li className="no-underline">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destinations"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Destinations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navlink ${isActive ? "is-active" : ""}`
              }
            >
              About
            </NavLink>
          </li>
        </ul>
        <button type="button" className="md:hidden">
          <img
            src="/assets/icons/menu-hamburger-umbrella.svg"
            alt="menu hamburger"
            width="32"
            height="32"
          />
        </button>
      </nav>
    </header>
  );
}
