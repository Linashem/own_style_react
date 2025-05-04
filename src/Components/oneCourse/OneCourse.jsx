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
      <h2>{courseData.text}</h2>
      <img
        className={style.img}
        src={courseData.imgSrc}
        alt={courseData.text}
      />
    </div>
  );
};
