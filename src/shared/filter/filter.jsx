import React, { useEffect, useState } from "react";

import styles from "./filter.module.css";
import CheckBox from "./ui/check-box/check-box";
import ComboBox from "./ui/combo-box/combo-box";

const Filter = ({ data, onFilter, discountedItems }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [salesOnly, setSalesOnly] = useState(false);

  useEffect(() => {
    let filtered = [...data];

    filtered = salesOnly
    ? filtered.filter((item) => item.discont_price !== null)
    : filtered;

    if (minPrice !== "" || maxPrice !== "") {
      filtered = filtered.filter((item) => {
        const price = item.price;
        const isMinValid = minPrice === "" || price >= minPrice;
        const isMaxValid = maxPrice === "" || price <= maxPrice;
        return isMinValid && isMaxValid;
      });
    }

    onFilter(filtered);
  }, [minPrice, maxPrice, salesOnly]);

  const comboBoxData = [
    {
      option: "by default",
      handler: () => {
        onFilter([...data]);
      },
    },
    {
      option: "newest",
      handler: () => {
        const sorted = [...data].sort((a, b) => a.id - b.id);
        onFilter(sorted);
      },
    },
    {
      option: "price: high-low",
      handler: () => {
        const sorted = [...data].sort((a, b) => b.price - a.price);
        onFilter(sorted);
      },
    },
    {
      option: "price: low-high",
      handler: () => {
        const sorted = [...data].sort((a, b) => a.price - b.price);
        onFilter(sorted);
      },
    },
  ];

  return (
    <div className={styles.filter__wrapper}>
      <div className={styles.filter__block_wrapper}>
        <span className={styles.filter__category_header}>Price</span>
        <input
          type="number"
          placeholder="from"
          className={styles.filter__input}
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="to"
          className={styles.filter__input}
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>

      {discountedItems === false && (
        <div className={styles.filter__block_wrapper}>
          <span className={styles.filter__category_header}>
            Discounted Items
          </span>
          <CheckBox handler={() => {
            console.log(salesOnly)

            setSalesOnly(!salesOnly)
          }} />
        </div>
      )}

      <div className={styles.filter__block_wrapper}>
        <span className={styles.filter__category_header}>Sorted</span>
        <ComboBox data={comboBoxData} />
      </div>
    </div>
  );
};

export default Filter;
