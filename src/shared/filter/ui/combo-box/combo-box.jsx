import React, { useState } from "react";
import styles from "./combo-box.module.css";

const ComboBox = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("by default");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option, handler) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (handler) {
      handler(option);
    }
  };

  return (
    <div className={styles.combo_box__wrapper}>
      <button className={styles.combo_box__button} onClick={toggleDropdown}>
        {selectedOption || "Select an option"}
        <span
          className={`${styles.combo_box__arrow} ${
            isOpen ? styles.combo_box__arrow_open : ""
          }`}
        />
      </button>
      {isOpen && (
        <ul className={styles.combo_box__list}>
          {data.map(({ option, handler }) => (
            <li
              key={option}
              className={`${styles.combo_box__list_item} ${
                selectedOption === option ? styles.combo_box__selected : ""
              }`}
              onClick={() => handleOptionClick(option, handler)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
