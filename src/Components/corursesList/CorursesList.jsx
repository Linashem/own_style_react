import React from "react";
import style from "./CorursesList.module.scss";
import { coursesPageData } from "../../helper/constants";
import { CardCoursesPage } from "../cardCoursesPage/CardCoursesPage";
import { useDispatch } from "react-redux";
import { oneCourseActions } from "../../store/oneCourseReducer";
import { BreadСrumbs } from "../breadСrumbs/BreadСrumbs";

export const CorursesList = () => {
  const dispatch = useDispatch();

  const goToGood = (item) => {
    dispatch(oneCourseActions(item));
  };

  return (
    <div className={style.courses_items_block}>
      <div className={style.courses_bread}>
        <BreadСrumbs />
      </div>
      <h2 className={style.courses_title}>Курсы</h2>
      <div className={style.cards}>
        {coursesPageData.map((el) => (
          <div key={el.id} className={style.card_box}>
            <div className={style.img_link} onClick={() => goToGood(el)}>
              <CardCoursesPage
                text={el.text}
                imgSrc={el.imgSrc}
                price={el.price}
                id={el.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
