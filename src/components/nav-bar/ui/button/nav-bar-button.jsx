import React from "react";
import { NavLink } from "react-router-dom";

import style from "./nav-bar-button.module.css";

const NavBarButton = ({ text, href }) => {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? "#339933" : "#282828",
        };
      }}
      className={style.link}
      to={href}
    >
      {text}
    </NavLink>
  );
};

export default NavBarButton;
