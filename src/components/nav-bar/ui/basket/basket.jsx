import React from "react";
import style from "./basket.module.css";
import { useNavigate } from "react-router-dom";

const Basket = ({ count }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate("/shopping-cart-page");
      }}
      className={style.basket}
    >
      <img
        src="/public/basket.png"
        alt="basket"
        className={style.basket__image}
      />
      {count !== 0 && <div className={style.basket__itemsCount}>{count}</div>}
    </div>
  );
};

export default Basket;
