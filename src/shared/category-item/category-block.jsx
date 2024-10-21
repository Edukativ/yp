import React from "react";
import styles from "./category-block.module.css";
import { useNavigate } from "react-router-dom";

const Cell = ({ id, title, image, clickable }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        if (clickable) {
          navigate(`/category/${id}`);
        }
      }}
      className={styles.categoryBlock__cellWrapper}
    >
      <img
        style={{ borderRadius: "12px", width: "100%", height: "380px" }}
        src={`http://localhost:3333/${image}`}
        alt={title}
      />
      <span className={styles.categoryBlock__cellTitle}>{title}</span>
    </div>
  );
};

const CategoryBlock = ({ count, data, clickable }) => {
  const cellWidth = 100 / count;

  return (
    <div className={styles.categoryBlock}>
      {data.slice(0, count).map((item) => (
        <div
          key={item.id}
          className={styles.categoryBlock__cell}
          style={{ width: `${cellWidth}%` }}
        >
          <Cell
            id={item.id}
            title={item.title}
            image={item.image}
            clickable={clickable}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryBlock;
