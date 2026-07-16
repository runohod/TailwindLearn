import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { bgHeader } from "@/shared/assets"; // Предположим, это дефолтная картинка

// 1. Данные для слайдеров (можно вынести в отдельный файл config.ts)
const SLIDES = [
  {
    id: "01",
    bgImage: bgHeader, // Используем импортированный ассет
    title: (
      <>
        Create<span className="text-primary">x</span> <br /> Construction
      </>
    ),
    description:
      "Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.",
  },
  {
    id: "02",
    // Для примера используем URL, замените на реальные ассеты, когда будут
    bgImage: bgHeader,
    title: (
      <>
        2
      </>
    ),
    description:
      "Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris.",
  },
];



// Варианты анимации для контента (текста)
const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export const Hero = () => {
  // 2. Состояние для текущего индекса
  const [currentIndex, setCurrentIndex] = useState(0);

  // Логика переключения
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

const goToSlide = (index) => {
  setCurrentIndex(index);
};


  const currentSlide = SLIDES[currentIndex];

  return (
    // Убрали background-image из стилей section, теперь анимируем внутри
    <section className="relative w-full h-[500px] md:h-247 flex items-center overflow-hidden bg-black">
      {/* 4. Анимированный фон (Cross-fade эффект) */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex} // Ключ заставляет React пересоздавать элемент для анимации
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${currentSlide.bgImage})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }} // Гладкая смена фона
        />
      </AnimatePresence>

      {/* Затемнение фона (Overlay) - вынесли из CSS градиента для удобства */}
      <div className="absolute inset-0 bg-gray-900/60 z-1" />

      <div className="container-custom text-white relative z-10">
        {/* 5. Анимация контента через AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={textVariants}
          >
            <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight max-w-full md:max-w-144.25">
              {currentSlide.title}
            </h1>

            <div className="mt-10 md:mt-24 text-lg md:text-xl max-w-full md:max-w-148.75 opacity-90">
              {currentSlide.description}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Кнопки (не анимируем смену, они статичны) */}
        <div className="mt-10 md:mt-15.25 flex flex-col sm:flex-row gap-4 md:gap-24">
          <button className="h-12 md:h-13 px-6 md:px-10 border border-white font-bold uppercase transition-all duration-300 text-sm md:text-base hover:bg-white hover:text-gray-900 active:scale-95 cursor-pointer z-20 relative">
            Learn more about us
          </button>
          <button className="h-12 md:h-13 px-6 md:px-10 bg-primary font-bold uppercase transition-all duration-300 text-sm md:text-base hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30 active:scale-95 active:translate-y-0 cursor-pointer z-20 relative">
            SUBMIT REQUEST
          </button>
        </div>
      </div>

      {/* 6. Навигация (Стрелки) - Добавили onClick */}
      <div className="hidden min-[1350px]:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-8 z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-gray-900 transition-all duration-300 pointer-events-auto group active:scale-90 cursor-pointer backdrop-blur-sm"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-180"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-gray-900 transition-all duration-300 pointer-events-auto group active:scale-90 cursor-pointer backdrop-blur-sm"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 12H19M19 12L12 5M19 12L12 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* 7. Пагинация - Сделали динамической и добавили анимацию прогресса */}
      <div className="hidden [min-width:576px]:block absolute bottom-6 md:bottom-20 left-0 right-0 overflow-x-auto md:overflow-visible z-20">
        <div className="max-w-1230 mx-auto px-6 md:px-24 min-w-max md:min-w-0">
          <div className="flex items-end gap-4 md:gap-0">
            {SLIDES.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => goToSlide(index)}
                  className="flex flex-col gap-1 md:gap-3 w-28 md:w-44.5 group cursor-pointer"
                >
                  <span
                    className={`text-xl md:text-[28px] font-bold text-white transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}
                  >
                    {item.num}
                  </span>
                  {/* Контейнер линии */}
                  <div className="h-0.5 w-full bg-white/30 relative overflow-hidden">
                    {/* Анимированная линия прогресса (только для активного слайда) */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-y-0 left-0 bg-white"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        // key нужен, чтобы анимация перезапускалась при смене слайда
                        key={currentIndex}
                      />
                    )}
                    {/* Линия при ховере для неактивных слайдов */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};