import style from "./Carousel.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Card } from "../card/Card";
import { coursesData } from "../../helper/constants";

export const Carousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          900: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
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
