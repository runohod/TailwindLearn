import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export const Carousel = ({
  slides = [],
  renderSlide,
  getSlideKey,
  slideClassName = "",
  modules = [Navigation],
  ...swiperProps
}) => {
  return (
    <Swiper modules={modules} {...swiperProps}>
      {slides.map((slide, index) => {
        const key = getSlideKey
          ? getSlideKey(slide, index)
          : slide.id ?? index;

        return (
          <SwiperSlide key={key} className={slideClassName}>
            {renderSlide(slide, index)}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};