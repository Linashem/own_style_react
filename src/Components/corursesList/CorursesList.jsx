import React from "react";
import style from "./CorursesList.module.scss";
import { coursesPageData } from "../../helper/constants";
import { CardCoursesPage } from "../cardCoursesPage/CardCoursesPage";
import { useDispatch } from "react-redux";
import { oneCourseActions } from "../../store/oneCourseReducer";


export const CorursesList = () => {
  const dispatch = useDispatch();

  const goToGood = (item) => {
    dispatch(oneCourseActions(item));
  };

  return (
    <div className={style.courses_items_block}>
      <h2>Курсы</h2>
      <div className={style.cards}>
        {coursesPageData.map((el) => (
          <div key={el.id} className={style.card_box}>
            <div
              className={style.img_link}
              onClick={() => goToGood(el)}
            >
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
