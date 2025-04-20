import React from "react";
import style from "./Card.module.scss";

export const Card = ({ text, imgSrc, price }) => {
  return (
    <a href='' className={style.card_link}>
      <div className={style.card} style={{ backgroundImage: `url(${imgSrc})` }}>
        <button className={style.card_button}>Подробнее</button>
        <div className={style.text}>
          <h4>
            <a className={style.link}>{text}</a>
          </h4>
          <p>{price}</p>
        </div>
      </div>
    </a>
  );
};
