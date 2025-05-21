import React from "react";
import style from "./BreadСrumbs.module.scss";
import { Link } from "react-router-dom";
import { routes } from "../../helper/routes";

export const BreadСrumbs = ({ course_name }) => {
  return (
    <div className={style.bread_block}>
      <Link className={style.bread_link} to={routes.home}>
        <p className={style.bread_desk}>Главная </p>
      </Link>
      <p> /</p>
      <Link className={style.bread_link} to={routes.courses}>
        <p className={style.bread_desk}>Все курсы</p>
      </Link>

      {course_name && (
        <>
          {" "}
          <p> /</p> <p className={style.bread_desk}>{course_name}</p>
        </>
      )}
    </div>
  );
};
