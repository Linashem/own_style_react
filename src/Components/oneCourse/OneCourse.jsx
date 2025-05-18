import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./OneCourse.module.scss";
import { oneCourseActions } from "../../store/oneCourseReducer";
import { coursesPageData } from "../../helper/constants";
import { BtnWrite } from "../btnWrite/BtnWrite";

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
      <div className={style.one_course_top}>
        <img
          className={style.img}
          src={courseData.imgSrc}
          alt={courseData.text}
        />
        <div className={style.text}>
          <div className={style.top}>
            <h2 className={style.title}>{courseData.text}</h2>
            <p className={style.desc}>{courseData.desc}</p>
          </div>
          <div className={style.bottom}>
            <div className={style.clock}>
              <img className={style.clock_img} src='/clock.jpg' alt='' />
              <p className={style.clock_text}>{courseData.time}</p>
            </div>
            <p className={style.price}>{courseData.price}</p>
          </div>
        <BtnWrite/>
        </div>
      </div>
      <h2 className={style.ask_title}>Что нас ждет на курсе</h2>
      <div className={style.one_course_bottom}>
        {courseData.componentsTitle1 && (
          <div className={style.div_block1}>
            <ul
              className={`${style.one_course_desc_title} ${style.one_course_desc_title1}`}
            >
              <div className={style.ask_div}>{courseData.componentsTitle1}</div>
              {courseData.componentsDesc1 &&
                courseData.componentsDesc1.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
            </ul>
          </div>
        )}
        {courseData.componentsTitle2 && (
          <div className={style.div_block2}>
            <ul
              className={`${style.one_course_desc_title} ${style.one_course_desc_title2}`}
            >
              <div className={style.ask_div}>{courseData.componentsTitle2}</div>
              {courseData.componentsDesc2 &&
                courseData.componentsDesc2.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
            </ul>{" "}
          </div>
        )}
        {courseData.componentsTitle3 && (
          <div className={style.div_block3}>
            <ul
              className={`${style.one_course_desc_title} ${style.one_course_desc_title3}`}
            >
              <div className={style.ask_div}>{courseData.componentsTitle3}</div>
              {courseData.componentsDesc3 &&
                courseData.componentsDesc3.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
            </ul>
          </div>
        )}
        {courseData.componentsTitle4 && (
          <div className={style.div_block4}>
            <ul
              className={`${style.one_course_desc_title} ${style.one_course_desc_title4}`}
            >
              <div className={style.ask_div}>{courseData.componentsTitle4}</div>
              {courseData.componentsDesc4 &&
                courseData.componentsDesc4.map((el, i) => (
                  <li key={i}>{el}</li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
