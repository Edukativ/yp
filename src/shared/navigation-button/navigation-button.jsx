import React from "react";

import style from "./navigation-button.module.css";
import { useNavigate } from "react-router-dom";

const NavigationButton = ({ text, link }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(link);
      }}
      className={style.button}
    >
      {text}
    </div>
  );
};

export default NavigationButton;
