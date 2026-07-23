import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import classNames from "classnames";

import "swiper/css";
import "swiper/css/navigation";

import { bgHeader } from "@/shared/assets";

const SLIDES = [
  {
    id: 1,
    num: "01",
    bgImage: bgHeader,
    title: (
      <>
        Create<span className="text-primary">x</span> <br /> Construction
      </>
    ),
    description:
      "Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.",
  },
  {
    id: 2,
    num: "02",
    bgImage: bgHeader,
    title: <>2</>,
    description:
      "Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.",
  },
];

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <section className="relative w-full h-[500px] md:h-247 bg-black overflow-hidden">
      <Swiper
        modules={[Navigation]}
        speed={600}
        loop={true}
        onSwiper={setSwiperInstance}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="h-full w-full"
      >
        {SLIDES.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className="!flex items-center relative w-full h-full"
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            />

            <div className="absolute inset-0 bg-gray-900/60 z-1" />

            <div className="container-custom text-white relative z-10 pt-20 md:pt-28 pb-20">
              <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight max-w-full md:max-w-144.25">
                {slide.title}
              </h1>
              <div className="mt-10 md:mt-24 text-lg md:text-xl max-w-full md:max-w-148.75 opacity-90">
                {slide.description}
              </div>

              <div className="mt-10 md:mt-15.25 flex flex-col sm:flex-row gap-4 md:gap-24">
                <button className="h-12 md:h-13 px-6 md:px-10 border border-white font-bold uppercase cursor-pointer hover:bg-white hover:text-gray-900 transition-colors">
                  Learn more about us
                </button>
                <button className="h-12 md:h-13 px-6 md:px-10 bg-primary font-bold uppercase cursor-pointer hover:bg-orange-600 transition-colors">
                  SUBMIT REQUEST
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden min-[1350px]:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-8 z-20 pointer-events-none">
        <button className="custom-prev w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-gray-900 transition-colors cursor-pointer pointer-events-auto select-none">
          &larr;
        </button>
        <button className="custom-next w-12 h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-gray-900 transition-colors cursor-pointer pointer-events-auto select-none">
          &rarr;
        </button>
      </div>

      <div className="hidden sm:block absolute bottom-6 md:bottom-20 left-0 right-0 z-20">
        <div className="max-w-1230 mx-auto px-6 md:px-24">
          <div className="flex items-end gap-4 md:gap-6">
            {SLIDES.map((item, index) => (
              <div
                key={item.id}
                onClick={() => swiperInstance?.slideToLoop(index)}
                className="flex flex-col gap-3 w-28 md:w-44.5 cursor-pointer group"
              >
                <span
                  className={classNames("text-xl md:text-[28px] font-bold text-white transition-opacity",
                    {
                      "opacity-100": index === activeIndex,
                      "opacity-60 group-hover:opacity-80": index !== activeIndex,
                    },
                  )}
                >
                  {item.num}
                </span>
                <div
                  className={`h-0.5 w-full transition-colors ${
                    index === activeIndex
                      ? "bg-white"
                      : "bg-white/30 group-hover:bg-white/50"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
