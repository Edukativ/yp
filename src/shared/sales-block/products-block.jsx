import React, { useState } from "react";
import styles from "./products-block.module.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/cart-slice";

const AddToCartButton = ({ text, handler }) => {
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        handler();
      }}
      className={styles.button}
    >
      {text}
    </div>
  );
};

const ItemCard = ({ id, title, price, discount_price, image }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const [buttonText, setButtonText] = useState("Add to cart");
  const truncatedTitle = title.length > 30 ? `${title.slice(0, 30)}...` : title;

  const discountPercentage = discount_price
    ? Math.round(((price - discount_price) / price) * 100)
    : 0;

  return (
    <div
      onClick={() => navigate(`/product/${id}`)}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
      className={styles.itemCard}
    >
      <img src={`http://localhost:3333/${image}`} alt={truncatedTitle} />
      <div className={styles.itemCard__delimiter}></div>
      <h3 className={styles.itemCard__title}>{truncatedTitle}</h3>

      {showButton && (
        <AddToCartButton
          text={buttonText}
          handler={() => {
            if (buttonText === "Added") return;

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

            setButtonText("Added");
          }}
        />
      )}

      {discount_price !== null ? (
        <>
          <span className={styles.price}>{"$" + discount_price}</span>
          <span className={styles.oldPrice}>{"$" + price}</span>
          {discountPercentage > 0 && (
            <div className={styles.discount}>-{discountPercentage}%</div>
          )}
        </>
      ) : (
        <span className={styles.price}>{"$" + price}</span>
      )}
    </div>
  );
};

const ProductsBlock = ({ data, count, salesOnly }) => {
  const filteredData = salesOnly
    ? data.filter((item) => item.discount_price !== null)
    : data;

  return (
    <div className={styles.productsBlock}>
      {filteredData
        .slice(0, count === 0 ? filteredData.length : count)
        .map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            discount_price={item.discount_price}
            image={item.image}
          />
        ))}
    </div>
  );
};

export default ProductsBlock;
