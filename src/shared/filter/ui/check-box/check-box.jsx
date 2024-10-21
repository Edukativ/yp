import React, { useState } from "react";
import styles from "./check-box.module.css";

const CheckBox = ({ handler }) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
    handler(!isChecked); 
  };

  return (
    <div
      onClick={toggleCheckbox}
      className={`${styles.checkbox__wrapper} ${
        isChecked ? styles.active : ""
      }`}
    >
      {isChecked && (
        <div className={styles.checkbox__icon}>
          <svg width="12" height="12" viewBox="0 0 24 24">
            <path d="M20.285 6.593l-11.285 11.285-5.285-5.285 1.415-1.414 3.871 3.871 9.871-9.871z" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default CheckBox;
