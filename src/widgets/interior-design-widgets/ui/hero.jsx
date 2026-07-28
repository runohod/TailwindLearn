// import { useState } from "react";
// import { clsx } from 'clsx';
// import { bgHeader } from "@/shared/assets";
// import { Carousel } from "@/shared/ui/carousel";

// const SLIDES = [
//   {
//     id: 1,
//     num: "01",
//     bgImage: bgHeader,
//     title: (
//       <>
//         Create<span className="text-primary">x</span>
//         <br />
//         Construction
//       </>
//     ),
//     description:
//       "Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.",
//   },
//   {
//     id: 2,
//     num: "02",
//     bgImage: bgHeader,
//     title: <>2</>,
//     description:
//       "Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.",
//   },
// ];

// export const Hero = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [swiperInstance, setSwiperInstance] = useState(null);

//   const handleSlideChange = (swiper) => {
//     setActiveIndex(swiper.realIndex);
//   };

//   const handlePaginationClick = (index) => {
//     swiperInstance?.slideToLoop(index);
//   };

//   const renderSlide = (slide) => (
//     <>
//       <div
//         className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: `url(${slide.bgImage})`,
//         }}
//       />

//       <div className="absolute inset-0 z-1 bg-gray-900/60" />

//       <div className="container-custom relative z-10 pt-20 pb-20 text-white md:pt-28">
//         <h1 className="max-w-full text-4xl font-black uppercase leading-tight md:max-w-144.25 md:text-6xl">
//           {slide.title}
//         </h1>

//         <p className="mt-10 max-w-full text-lg opacity-90 md:mt-24 md:max-w-148.75 md:text-xl">
//           {slide.description}
//         </p>

//         <div className="mt-10 flex flex-col gap-4 sm:flex-row md:mt-15.25 md:gap-24">
//           <button
//             type="button"
//             className="h-12 cursor-pointer border border-white px-6 font-bold uppercase transition-colors hover:bg-white hover:text-gray-900 md:h-13 md:px-10"
//           >
//             Learn more about us
//           </button>

//           <button
//             type="button"
//             className="h-12 cursor-pointer bg-primary px-6 font-bold uppercase transition-colors hover:bg-orange-600 md:h-13 md:px-10"
//           >
//             Submit request
//           </button>
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <section className="relative h-[500px] w-full overflow-hidden bg-black md:h-247">
//       <Carousel
//         slides={SLIDES}
//         getSlideKey={(slide) => slide.id}
//         renderSlide={renderSlide}
//         slideClassName="!flex items-center relative w-full h-full"
//         className="h-full w-full"
//         speed={600}
//         loop
//         onSwiper={setSwiperInstance}
//         onSlideChange={handleSlideChange}
//         navigation={{
//           prevEl: ".hero-prev",
//           nextEl: ".hero-next",
//         }}
//       />

//       <div className="pointer-events-none absolute inset-x-0 top-1/2 z-20 hidden -translate-y-1/2 justify-between px-8 min-[1350px]:flex">
//         <button
//           type="button"
//           aria-label="Previous slide"
//           className="hero-prev pointer-events-auto flex h-12 w-12 cursor-pointer select-none items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-gray-900"
//         >
//           &larr;
//         </button>

//         <button
//           type="button"
//           aria-label="Next slide"
//           className="hero-next pointer-events-auto flex h-12 w-12 cursor-pointer select-none items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-gray-900"
//         >
//           &rarr;
//         </button>
//       </div>

//       <div className="absolute right-0 bottom-6 left-0 z-20 hidden sm:block md:bottom-20">
//         <div className="mx-auto max-w-1230 px-6 md:px-24">
//           <div className="flex items-end gap-4 md:gap-6">
//             {SLIDES.map((slide, index) => {
//               const isActive = index === activeIndex;

//               return (
//                 <button
//                   key={slide.id}
//                   type="button"
//                   onClick={() => handlePaginationClick(index)}
//                   className="group flex w-28 cursor-pointer flex-col gap-3 text-left md:w-44.5"
//                 >
//                   <span
//                     className={clsx(
//                       "text-xl md:text-[28px] font-bold text-white transition-opacity",
//                       {
//                         "opacity-100": index === activeIndex,
//                         "opacity-60 group-hover:opacity-80":
//                           index !== activeIndex,
//                       },
//                     )}
//                   >
//                     {slide.num}
//                   </span>
//                   <span
//                     className={clsx(
//                       "h-0.5 w-full transition-colors",
//                       {
//                         "bg-white": index === activeIndex,
//                         "bg-white/30 group-hover:bg-white/50":
//                           index !== activeIndex,
//                       },
//                     )}
//                   >
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
