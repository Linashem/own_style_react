import React from "react";
import style from "./Card.module.scss";

export const Card = ({ text, imgSrc, price }) => {
  // const {img, id, text}=props
  return (
    <div className={style.card}>
      <div className={style.text}>
      <img src={imgSrc} alt='' />
        <h4>{text}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
};
