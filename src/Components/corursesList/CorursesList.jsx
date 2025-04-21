import React from "react";
import style from "./CorursesList.module.scss";
import { Card } from "../card/Card";
import {  coursesPageData } from "../../helper/constants";

export const CorursesList = () => {
  return (
    <div className={style.courses_items_block}>
      <h2>Курсы</h2>
      <div className={style.cards}>
        {coursesPageData.map((el) => (
          <div className={style.card_box}>
            <Card text={el.text} imgSrc={el.imgSrc} price={el.price} />
          </div>
        ))}
      </div>
    </div>
  );
};
