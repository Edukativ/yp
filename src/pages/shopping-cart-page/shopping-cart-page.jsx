import React from "react";
import BlockWithItemsHeader from "../../shared/block-with-items-header/block-with-items-header";
import styles from "./shopping-cart.module.css";
import { useSelector } from "react-redux";
import NavigationButton from "../../shared/navigation-button/navigation-button";
import CardItem from "./ui/card-item/card-item";
import OrderForm from "./ui/order-form/order-form";

const ShoppingCartPage = () => {
  const count = useSelector((state) => state.cart.totalItemsCount);
  const items = useSelector((state) => state.cart.items);

  return (
    <div className={styles.shoppingCartPage}>
      <BlockWithItemsHeader
        header={"Shopping cart"}
        description={"Back to the store"}
        redirectLink={"/products-page"}
      />

      {count !== 0 ? (
        <div className={styles.shoppingCartPage__content}>
          <div className={styles.shoppingCartPage__items}>
            {items.map((item, index) => (
              <CardItem
                key={index}  
                title={item.name}
                price={item.count !== 0 ? item.price * item.count : item.price}
                discount_price={
                  item.count !== 0 && item.discount_price
                    ? item.discount_price * item.count
                    : item.discount_price
                }
                image={item.image}
                count={item.count}
              />
            ))}
          </div>
          <div className={styles.shoppingCartPage__order}>
            <OrderForm />
          </div>
        </div>
      ) : (
        <div className={styles.shoppingCartPage__noItems}>
          <span className={styles.shoppingCartPage__noItemsHeader}>
            Looks like you have no items in your basket currently.
          </span>
          <NavigationButton
            text={"Continue Shopping"}
            link={"/products-page"}
          />
        </div>
      )}
    </div>
  );
};

export default ShoppingCartPage;
