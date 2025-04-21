import React from "react";
import style from "./CardCoursesPage.module.scss";

export const CardCoursesPage = ({ text, imgSrc, price, lastCardStyle }) => {
  return (
    <a href='' className={style.card_link}>
      <div className={style.card}  style={{ backgroundImage: `url(${imgSrc})` }}>
        <div className={style.text}>
          <h4 className={style.card_title}>
            <a className={style.link}>{text}</a>
          </h4>
          <p>{price}</p>
        </div>
      </div>
    </a>
  );
};
