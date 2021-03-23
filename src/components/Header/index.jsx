import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDetectOutsideClick } from "../useDetectOutsideClick";

import UserNav from "./UserNav";
import Contact from "./Contact";
import Navigation from "./styles";

const Header = ({ state }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const dropdownRef = useRef(null);
  const handleToggle = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <Navigation>
      <div className="logo">
        <Link to="/">
          <img
            src="/images/logo.png"
            className={
              state === "static" ? "logo-img-header-mini" : "logo-img-header"
            }
          />
        </Link>
      </div>
      <nav className="nav">
        <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
          <li>
            <NavLink activeClassName="active" to="/results">
              BUSCADOR
            </NavLink>
          </li>

          <li>
            <NavLink
              className="dropdown"
              activeClassName="active"
              to="/"
              onClick={onClick}
            >
              TIPOS DE CURSOS {isActive}<i className="icon-down-arrow drop-icon" />
            </NavLink>
            <div
              ref={dropdownRef}
              className={`submenu ${isActive ? "active" : "inactive"}`}
            >
              <ul>
                <li>
                  <NavLink to="/">Menu 1</NavLink>
                </li>
                <li>
                  <NavLink to="/">Menu 2</NavLink>
                </li>
                <li>
                  <NavLink to="/">Menu 3</NavLink>
                </li>
                <li>
                  <NavLink to="/">Menu 4</NavLink>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <NavLink activeClassName="active" to="/">
              CONTACTO
            </NavLink>
          </li>
        </ul>

        <i
          className={`toggle ${isExpanded ? "icon-heart" : "icon-bars black"}`}
          aria-hidden="true"
          onClick={(e) => handleToggle(e)}
        />
      </nav>
      <Contact />
      <UserNav />
    </Navigation>
  );
};

export default Header;
