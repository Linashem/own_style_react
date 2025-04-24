import React from "react";
import style from "./CoursItem.module.scss";
import { CardCoursesPage } from "../cardCoursesPage/CardCoursesPage";
import { coursesPageData } from "../../helper/constants";

export const CoursItem = () => {
  return (
    <div className={style.courses_items_block}>
      <CardCoursesPage text={coursesPageData.text}  />
    </div>
  );
};
