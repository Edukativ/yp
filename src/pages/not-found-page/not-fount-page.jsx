import React from "react";
import NavigationButton from "../../shared/navigation-button/navigation-button";

import style from "./not-found-page.module.css";

const NotFoundPage = () => {
  return (
    <div className={style["not-found-page"]}>
      <div className={style["not-found-page__numbers"]}>
        <img src="/public/4.png" alt="4" />
        <img src="/public/404.png" alt="0" />
        <img src="/public/4.png" alt="4" />
      </div>
      <span className={style["not-found-page__header"]}>Page Not Found</span>
      <span className={style["not-found-page__description"]}>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </span>
      <NavigationButton text={"Go Home"} link={"/"} />
    </div>
  );
};

export default NotFoundPage;
