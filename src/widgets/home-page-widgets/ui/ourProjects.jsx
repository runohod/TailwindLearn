import {
  redFingerBuilding,
  cubesBuilding,
  thePencilBuilding,
} from "@/shared/assets";

import { Carousel } from "@/shared/ui/carousel";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Red Finger Building",
    category: "Business Centers",
    image: redFingerBuilding,
  },
  {
    id: 2,
    title: "Cubes Building",
    category: "Business Centers",
    image: cubesBuilding,
  },
  {
    id: 3,
    title: "The Pencil Building",
    category: "Stores & Malls",
    image: thePencilBuilding,
  },
  {
    id: 4,
    title: "The Pencil Building",
    category: "Stores & Malls",
    image: thePencilBuilding,
  },
];

export const OurProjects = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-60">
      <div className="container-custom mt-16 md:mt-24 lg:mt-12 flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-14 lg:mb-12 px-4 xl:px-0 gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black leading-tight text-dark max-w-[705px] text-left">
          Browse our selected projects and learn more about our work
        </h2>

        <div className="flex items-center gap-3 shrink-0 mb-2 self-start md:self-end">
          <button className="prev w-12 h-12 rounded-full flex items-center justify-center border border-transparent hover:bg-primary text-gray-text hover:text-white transition-all group cursor-pointer active:scale-95">
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
          <button className="next w-12 h-12 rounded-full flex items-center justify-center border border-transparent hover:bg-primary text-gray-text hover:text-white transition-all group cursor-pointer active:scale-95">
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
      </div>

      <Carousel
        className="max-w-1200 mx-auto px-4 xl:px-0 mb-12 md:mb-20"
        slides={PROJECTS_DATA}
        loop={true}
        navigation={{ prevEl: ".prev", nextEl: ".next" }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 24 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        getSlideKey={(slide) => slide.id}
        renderSlide={(project) => (
          <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow w-full h-full">
            <div className="overflow-hidden aspect-[390/340]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center flex flex-col items-center hover:bg-primary-hover transition-colors hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30 active:scale-95 active:translate-y-0 cursor-pointer flex-grow">
              <h3 className="text-[20px] font-bold text-dark mb-1">
                {project.title}
              </h3>
              <p className="text-[14px] text-text-comment">
                {project.category}
              </p>
            </div>
          </div>
        )}
      />

      <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-6 md:gap-10 px-4">
        <span className="text-xl md:text-[28px] font-bold text-dark">
          Explore all our works
        </span>
        <button className="w-full sm:w-auto bg-primary text-white font-bold uppercase tracking-wider text-sm py-4 px-10 rounded hover:bg-primary-hover transition-colors hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30 active:scale-95 active:translate-y-0 cursor-pointer">
          View portfolio
        </button>
      </div>
    </section>
  );
};
