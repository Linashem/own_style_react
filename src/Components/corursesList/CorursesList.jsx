import React from "react";
import style from "./CorursesList.module.scss";
import { coursesPageData } from "../../helper/constants";
import { CardCoursesPage } from "../cardCoursesPage/CardCoursesPage";
import { useDispatch } from "react-redux";
import { oneCourseActions } from "../../store/oneCourseReducer";
import { Link } from "react-router";

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
            <Link
              className={style.img_link}
              to='/courses/:id'
              onClick={() => goToGood(el)}
            >
              <CardCoursesPage
                text={el.text}
                imgSrc={el.imgSrc}
                price={el.price}
                id={el.id}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
