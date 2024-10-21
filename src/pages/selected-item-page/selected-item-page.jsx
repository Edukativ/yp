import React, { useState } from "react";

import styles from "./selected-item-page.module.css";
import Counter from "../../shared/counter/counter";
import ActionButton from "../../shared/action-button/action-button";
import { API_BASE_URL } from "../../../config/config";
import { json, useLoaderData } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart-slice";

export async function itemLoader({ params }) {
  const response = await axios.get(`${API_BASE_URL}/products/${params.id}`);

  return json({
    data: response.data,
  });
}

const SelectedItemPage = () => {
  const { data } = useLoaderData();

  console.log(data);

  const discountPercentage = data[0].discont_price
    ? Math.round(
        ((data[0].price - data[0].discont_price) / data[0].price) * 100
      )
    : 0;

  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  return (
    <div className={styles["selected-item-page"]}>
      <div className={styles["selected-item-page__image-wrapper"]}>
        <img
          className={styles["selected-item-page__image"]}
          src={`http://localhost:3333/${data[0].image}`}
          alt={data[0].title}
        />
      </div>
      <div className={styles["selected-item-page__description-wrapper"]}>
        <span className={styles["selected-item-page__title"]}>
          {data[0].title}
        </span>
        {data[0].discont_price !== null ? (
          <div className={styles["selected-item-page__price-wrapper"]}>
            <span className={styles["selected-item-page__price"]}>
              ${data[0].discont_price}
            </span>
            <span className={styles["selected-item-page__original-price"]}>
              ${data[0].price}
            </span>
            <div className={styles["selected-item-page__discount"]}>
              -{discountPercentage}%
            </div>
          </div>
        ) : (
          <div className={styles["selected-item-page__price-wrapper"]}>
            <span className={styles["selected-item-page__price"]}>
              ${data[0].price}
            </span>
          </div>
        )}
        <div className={styles["selected-item-page__actions"]}>
          <Counter
            value={count}
            dec={() => {
              if (count > 0) {
                setCount(count - 1);
              }
            }}
            inc={() => {
              setCount(count + 1);
            }}
          />
          <ActionButton
            text={"Add to cart"}
            handler={() => {
              dispatch(
                addItemToCart({
                  item: {
                    name: data[0].title,
                    price: data[0].price,
                    discount_price: data[0].discont_price,
                    image: data[0].image,
                  },
                  count: count,
                })
              );
            }}
          />
        </div>
        <span className={styles["selected-item-page__text-header"]}>
          Description
        </span>
        <span className={styles["selected-item-page__text"]}>
          {data[0].description}
        </span>
      </div>
    </div>
  );
};

export default SelectedItemPage;
