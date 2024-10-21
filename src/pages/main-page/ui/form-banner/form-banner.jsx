import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./form-banner.module.css";
import axios from "axios";
import { API_BASE_URL } from "../../../../../config/config";

const FormBanner = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [buttonState, setButtonState] = useState("Get a discount");
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const onSubmit = async (data) => {
    const res = await axios.postForm(`${API_BASE_URL}/sale/send`, {
      name: data.name,
      phone: data.phone,
      email: data.email,
    });

    if (res.status === 200) {
      setButtonState("Request Submitted");
      setRequestSubmitted(true);
    }
  };

  return (
    <div className={styles["form-banner"]}>
      <span className={styles["form-banner__header"]}>5% off on the first order</span>
      <div className={styles["form-banner__body"]}>
        <div className={styles["form-banner__image"]}></div>
        <div className={styles["form-banner__form-wrapper"]}>
          <form
            className={styles["form-banner__form"]}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              placeholder="Name"
              type="text"
              className={styles["form-banner__input"]}
              {...register("name", {
                required: "Имя обязательно!",
                minLength: { value: 3, message: "Не менее 3 символов" },
              })}
            />
            {errors.name && (
              <span className={styles["form-banner__error"]}>
                {errors.name.message}
              </span>
            )}

            <input
              placeholder="Phone number"
              type="text"
              className={styles["form-banner__input"]}
              {...register("phone", {
                required: "Телефон обязателен.",
                minLength: { value: 11, message: "Не менее 11 символов" },
              })}
            />
            {errors.phone && (
              <span className={styles["form-banner__error"]}>
                {errors.phone.message}
              </span>
            )}

            <input
              placeholder="Email"
              type="text"
              className={styles["form-banner__input"]}
              {...register("email", {
                required: "Почта обязательна!",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Неверный формат почты",
                },
              })}
            />
            {errors.email && (
              <span className={styles["form-banner__error"]}>
                {errors.email.message}
              </span>
            )}
            {requestSubmitted === false ? (
              <button type="submit" className={styles["form-banner__button"]}>
                {buttonState}
              </button>
            ) : (
              <div className={styles["form-banner__button--submitted"]}>
                {buttonState}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormBanner;
