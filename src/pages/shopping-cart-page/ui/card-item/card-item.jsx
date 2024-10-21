import React from "react";
import styles from "./card-item.module.css";
import Counter from "../../../../shared/counter/counter";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  removeSingleItemFromCart,
} from "../../../../store/cart-slice";

const CardItem = ({ title, price, discount_price, image, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.cardItem}>
      <div className={styles.cardItem__imageWrapper}>
        <img
          className={styles.cardItem__image}
          src={`http://localhost:3333/${image}`}
          alt="image"
        />
      </div>
      <div className={styles.cardItem__contentWrapper}>
        <div className={styles.cardItem__headerWrapper}>
          <span className={styles.cardItem__header}>{title}</span>
          <img
            onClick={() => {
              dispatch(removeItemFromCart({ name: title }));
            }}
            src={"/public/del.png"}
            alt="Delete"
            className={styles.cardItem__deleteIcon}
          />
        </div>
        <div className={styles.cardItem__actions}>
          <Counter
            value={count}
            dec={() => {
              if (count > 0) {
                dispatch(removeSingleItemFromCart({ name: title }));
              }
            }}
            inc={() => {
              dispatch(
                addItemToCart({
                  item: {
                    name: title,
                    price: price,
                    discount_price: discount_price,
                    image: image,
                  },
                  count: 1,
                })
              );
            }}
          />
          {discount_price != null ? (
            <>
              <span className={styles.cardItem__price}>${discount_price.toFixed(1)}</span>
              <span className={styles.cardItem__discountPrice}>${price.toFixed(1)}</span>
            </>
          ) : (
            <span className={styles.cardItem__price}>${price.toFixed(1)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardItem;
