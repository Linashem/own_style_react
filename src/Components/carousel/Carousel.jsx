import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Card } from "../card/Card";
import { coursesData } from "../../helper/constants";

export const Carousel = () => {
  return (
    <>
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
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 30,
          },
        }}
        spaceBetween={15}
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
      >
        {coursesData.map((el) => (
          <SwiperSlide key={el.id}>
            <Card
              text={el.text}
              imgSrc={el.imgSrc}
              price={el.price}
              lastCardStyle={el.lastCardStyle}
              id={el.id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
