import React from "react";
import style from "./CorursesList.module.scss";
import { coursesPageData } from "../../helper/constants";
import { CardCoursesPage } from "../cardCoursesPage/CardCoursesPage";

export const CorursesList = () => {
  return (
    <div className={style.courses_items_block}>
      <h2>Курсы</h2>
      <div className={style.cards}>
        {coursesPageData.map((el) => (
          <div className={style.card_box}>
            <CardCoursesPage
              text={el.text}
              imgSrc={el.imgSrc}
              price={el.price}
              id={el.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
