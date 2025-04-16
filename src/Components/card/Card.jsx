import React from "react";
import style from "./Card.module.scss";

export const Card = ({ text, imgSrc,price }) => {
  // const {img, id, text}=props
  return (
    <div className={style.card}>
      <h4>{text}</h4>
      <img src={imgSrc} alt="" />
      <p>{price}</p>
    </div>
  );
};
