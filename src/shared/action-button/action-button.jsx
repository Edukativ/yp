import React from "react";

import styles from "./action-button.module.css";

const ActionButton = ({ text, handler }) => {
  return (
    <div onClick={handler} className={styles.button}>
      {text}
    </div>
  );
};

export default ActionButton;
