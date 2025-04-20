import React from "react";
import style from "./Card.module.scss";

export const Card = ({ text, imgSrc, price }) => {
  return (
    <div className={style.card} style={{ backgroundImage: `url(${imgSrc})` }}>
      <div className={style.text}>
        <h4>{text}</h4>
        <p>{price}</p>
      </div>
    </div>
  );
};
