import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./OneCourse.module.scss";
import { oneCourseActions } from "../../store/oneCourseReducer";
import { coursesPageData } from "../../helper/constants";

export const OneCourse = () => {
  const courseData = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const isLocation =
    window.location.pathname[window.location.pathname.length - 1];

  useEffect(() => {
    dispatch(
      oneCourseActions(
        coursesPageData[(isLocation - 2, isLocation - 1, isLocation)]
      )
    );
  }, []);

  return (
    <div className={style.one_course_block}>
      <img
        className={style.img}
        src={courseData.imgSrc}
        alt={courseData.text}
      />

      <div className={style.text}>
        <h2>{courseData.text}</h2>
        <p>{courseData.price}</p>

        <p>{courseData.desc}</p>
        <ul>
          {courseData.componentsTitle1 && courseData.componentsTitle1}
          {courseData.componentsDesc1 &&
            courseData.componentsDesc1.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
        <ul>
          {courseData.componentsTitle2 && courseData.componentsTitle2}
          {courseData.componentsDesc2 &&
            courseData.componentsDesc2.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
        <ul>
          {courseData.componentsTitle3 && courseData.componentsTitle3}
          {courseData.componentsDesc3 &&
            courseData.componentsDesc3.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
        <ul>
          {courseData.componentsTitle4 && courseData.componentsTitle4}
          {courseData.componentsDesc4 &&
            courseData.componentsDesc4.map((el, i) => <li key={i}>{el}</li>)}
        </ul>
        <p>{courseData.note}</p>
      </div>
    </div>
  );
};
