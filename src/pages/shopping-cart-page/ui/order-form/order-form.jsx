import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./order-form.module.css";
import axios from "axios";
import { API_BASE_URL } from "../../../../../config/config";
import { useSelector } from "react-redux";

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [buttonState, setButtonState] = useState("Order");
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (data) => {
    const res = await axios.postForm(`${API_BASE_URL}/sale/send`, {
      name: data.name,
      phone: data.phone,
      email: data.email,
    });

    if (res.status == 200) {
      setButtonState("The order is placed");
      setRequestSubmitted(true);
      setShowModal(true);
    }
  };

  const cartItems = useSelector((state) => state.cart.items);
  const totalItemsCount = useSelector((state) => state.cart.totalItemsCount);

  const totalPrice = cartItems.reduce((total, item) => {
    const itemPrice = item.discount_price ? item.discount_price : item.price;
    return total + itemPrice * item.count;
  }, 0);

  const ModalPopup = ({ onClose }) => (
    <div className={styles.modal__overlay}>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h2 className={styles.modal__title}>Congratulations!</h2>
          <img
            onClick={onClose}
            className={styles.modal__closeButton}
            width={"30px"}
            src={"/public/delw.png"}
            alt="Close"
          />
        </div>
        <span className={styles.modal__message}>
          Your order has been successfully placed on the website. <br />
          A manager will contact you shortly to confirm your order.
        </span>
      </div>
    </div>
  );

  return (
    <div className={styles["orderForm"]}>
      <span className={styles["orderForm__header"]}>Order Details</span>
      <div className={styles["orderForm__detailsWrapper"]}>
        <span className={styles["orderForm__itemsCount"]}>
          {totalItemsCount} items total
        </span>
        <span className={styles["orderForm__totalPrice"]}>
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <form
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          placeholder="Name"
          type="text"
          className={styles["orderForm__input"]}
          {...register("name", {
            required: "Имя обязательно!",
            minLength: { value: 3, message: "Не менее 3 символов" },
          })}
        />
        {errors.name && (
          <span className={styles["orderForm__input_errorMessage"]}>
            {errors.name.message}
          </span>
        )}

        <input
          placeholder="Phone number"
          type="text"
          className={styles["orderForm__input"]}
          {...register("phone", {
            required: "Телефон обязателен.",
            minLength: { value: 11, message: "Не менее 11 символов" },
          })}
        />
        {errors.phone && (
          <span className={styles["orderForm__input_errorMessage"]}>
            {errors.phone.message}
          </span>
        )}

        <input
          placeholder="Email"
          type="text"
          className={styles["orderForm__input"]}
          {...register("email", {
            required: "Почта обязательна!",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Неверный формат почты",
            },
          })}
        />
        {errors.email && (
          <span className={styles["orderForm__input_errorMessage"]}>
            {errors.email.message}
          </span>
        )}
        {requestSubmitted === false ? (
          <button type="submit" className={styles["orderForm__input_actionButton"]}>
            {buttonState}
          </button>
        ) : (
          <div className={styles["orderForm__input_submittedButton"]}>{buttonState}</div>
        )}
      </form>

      {showModal && <ModalPopup onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default OrderForm;
