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
          slidesPerView={1.2}
          breakpoints={{
            580: {
              slidesPerView: 1.5,
            },
            600: {
              slidesPerView: 2,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            900: {
              slidesPerView: 5,
              slidesPerGroup: 1,
              spaceBetween: 10,
            },
          }}
          spaceBetween={15}
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
        >
          {studentsWorksData &&
            studentsWorksData.map((el) => (
              <SwiperSlide key={el.id}>
                <StudentCard imgSrc={el.imgSrc} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};
