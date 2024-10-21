import React from "react";

import styles from "./banner.module.css";
import NavigationButton from "../../../../shared/navigation-button/navigation-button";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner__body}>
        <span className={styles.banner__header}>
          Amazing Discounts <br /> on Garden Products!
        </span>
        <NavigationButton
          text={"Check out"}
          link={"/sales-page"}
        />
      </div>
    </div>
  );
};

export default Banner;
