import React, { useState, useRef } from "react";
import { useDetectOutsideClick } from "../useDetectOutsideClick";
import { NavLink, Link } from "react-router-dom";

import { UserNavigationContainer } from "./styles";

const UserNav = (props) => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [isLogged, setIsLogged] = useState(false);
  const onClick = () => setIsActive(!isActive);

  return (
    <UserNavigationContainer>
      <div className="section-three">
        <div className="menu-container">
          <button onClick={onClick} className="menu-trigger">
            <div className="button-section">
              <i className="icon-bars" />
              <img
                src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
                alt="User avatar"
              />
            </div>
          </button>
          <div
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            {!isLogged && (
            <div className="signup-section">
              <div className="info-section">
                <div>
                  <h3>¡How are you today! </h3>{" "}
                  <span className="title">
                    ¿Cómo quieres acceder a{" "}
                    <span className="color-be-int">be ?</span>
                  </span>
                </div>
              </div>
              <div className="action-section">
                <ul>
                  <li>
                    <Link to="/">
                      <i className="icon icon-user" /> Soy un estudiante
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon icon-heart " /> Soy una universidad
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="icon icon-application" /> Soy un{" "}
                      <span className="color-be-int">Be</span>liever
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            )}
            {isLogged && (
            <ul className="user-menu">
              <li>
                <Link to="/">
                  <i className="icon icon-user" /> Perfil
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="icon icon-heart" /> Cursos Favoritos
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="icon icon-application" /> Aplicaciones
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="icon icon-preferences" /> Preferencias
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="icon icon-config" /> Configuración
                </Link>
              </li>
              <li>
                <Link to="/">Moneda: $ Pesos (MXN)</Link>
              </li>
              <li>
                <Link to="/">Cerrar sesión</Link>
              </li>
            </ul>
            )}
          </div>
        </div>
      </div>
    </UserNavigationContainer>
  );
};

export default UserNav;
