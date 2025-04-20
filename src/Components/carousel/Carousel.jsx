import style from "./Carousel.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";
import { Card } from "../card/Card";
import { coursesData } from "../../helper/constants";

export const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1.3}
        breakpoints={{
          600: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        spaceBetween={30}
        navigation={true}
        modules={[ Navigation]}
        className='mySwiper'
      >
        {coursesData.map((el) => (
          <SwiperSlide key={el.id}>
            <Card text={el.text} imgSrc={el.imgSrc} price={el.price} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
