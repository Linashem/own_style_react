import React from "react";
import style from "./StudentsWorks.module.scss";
import { StudentCard } from "../studentCard/StudentCard";
import { studentsWorksData } from "../../helper/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export const StudentsWorks = () => {
  return (
    <div className={style.students_block}>
      <h2 className={style.students_title}>Работы учениц</h2>
      <div className={style.students_courusel}>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={20}
          breakpoints={{
            450: {
              slidesPerView: 2,
            },
            580: {
              slidesPerView: 2.5,
            },
            630: {
              slidesPerView: 2.7,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 3.2,
            },
            1000: {
              slidesPerView: 4,
            },
            1200: {
              slidesPerView: 4.5,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
        >
          {studentsWorksData &&
            studentsWorksData.map((el) => (
              <SwiperSlide key={el.id}>
                <StudentCard imgSrc={el.imgSrc} text={el.text} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
