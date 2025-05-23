import React from "react";
import style from "./Courses.module.scss";
import { Carousel } from "../carousel/Carousel";

export const Courses = () => {
  return (
    <div className={style.courses_block}>
      <h2>Курсы</h2>
      <div className={style.cards}>
        <Carousel />
      </div>
    </div>
  );
};
