import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const Carousel = ({
  slides = [],
  renderSlide,
  getSlideKey,
  breakpoints,
  navigation,
  loop = true,
  spaceBetween = 0,
  slidesPerView = 1,
  className = "",
}) => {
  return (
    <div className={className}>
      <Swiper
        modules={[Navigation]}
        loop={loop}
        navigation={navigation}
        breakpoints={breakpoints}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
      >
        {slides.map((slide, index) => {
          const key = getSlideKey ? getSlideKey(slide) : index;
          
          return (
            <SwiperSlide key={key}>
              {renderSlide(slide)}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};