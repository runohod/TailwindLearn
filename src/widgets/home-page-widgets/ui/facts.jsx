import {
  circleProgress,
  circleYear,
  circleHours,
  circleProjects,
  builderFacts,
  helmetFacts,
  handFacts,
} from "@/shared/assets";

export const Facts = () => {
  return (
    <section className="w-full pb-16 md:pb-24">
      <div className="container-custom mt-16 md:mt-24 lg:mt-120 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black leading-tight text-dark text-center">
          Some facts and figures
        </h2>
      </div>

      <div className="max-w-1230 grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-start justify-items-center mx-auto mt-8 md:mt-12 lg:mt-[60px] px-4 xl:px-0">
        <div className="overflow-hidden w-full max-w-[148px] text-center group">
          <div className="w-full aspect-square overflow-hidden rounded-full">
            <img
              src={circleProgress}
              alt="circle Progress"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 md:mt-5 text-sm md:text-base text-dark">
            Totally satisfied clients
          </div>
        </div>

        <div className="overflow-hidden w-full max-w-[148px] text-center group">
          <div className="w-full aspect-square overflow-hidden rounded-full">
            <img
              src={circleYear}
              alt="circle Year"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 md:mt-5 text-sm md:text-base text-dark">
            Years of experience
          </div>
        </div>

        <div className="overflow-hidden w-full max-w-[148px] text-center group">
          <div className="w-full aspect-square overflow-hidden rounded-full">
            <img
              src={circleHours}
              alt="circle Hours"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 md:mt-5 text-sm md:text-base text-dark">
            Working hours spent
          </div>
        </div>

        <div className="overflow-hidden w-full max-w-[148px] text-center group">
          <div className="w-full aspect-square overflow-hidden rounded-full">
            <img
              src={circleProjects}
              alt="circle Projects"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="mt-4 md:mt-5 text-sm md:text-base text-dark">
            Succeeded projects
          </div>
        </div>
      </div>

      <div className="max-w-1230 mx-auto mt-16 md:mt-24 lg:mt-[180px] px-4 xl:px-0">
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black leading-tight text-dark text-center">
          Recent news
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-7.5 mt-8 md:mt-12 lg:mt-[60px]">
          <div className="group cursor-pointer flex flex-col justify-between">
            <div>
              <div className="overflow-hidden rounded aspect-[705/360] w-full">
                <img
                  src={builderFacts}
                  alt="builder Facts"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-[20px] md:text-[24px] font-black text-dark leading-snug mb-3 group-hover:text-primary mt-4 md:mt-6 transition-colors">
                How to Build Climate Change-Resilient Infrastructure
              </div>
              <div className="text-[12px] text-text-comment mb-2">
                Industry News <span className="mx-2">|</span> June 24, 2020{" "}
                <span className="mx-2">|</span> 4 comments
              </div>
              <div className="text-[14px] md:text-base text-gray-text leading-relaxed mt-3">
                Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
                faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer
                bibendum turpis convallis enim, nibh convallis...
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 lg:gap-6">
            <div className="group cursor-pointer flex flex-col sm:justify-between lg:block">
              <div className="overflow-hidden rounded aspect-[495/200] w-full">
                <img
                  src={helmetFacts}
                  alt="helmet Facts"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-[18px] md:text-[20px] font-bold text-dark leading-snug group-hover:text-primary transition-colors">
                How Construction Can Help Itself
              </div>
              <div className="text-[12px] text-text-comment mt-1 mb-2">
                Innovation <span className="mx-2">|</span> June 24, 2020
                <span className="mx-2">|</span> No comments
              </div>
            </div>

            <div className="group cursor-pointer flex flex-col sm:justify-between lg:block">
              <div className="overflow-hidden rounded aspect-[495/200] w-full">
                <img
                  src={handFacts}
                  alt="hand Facts"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 text-[18px] md:text-[20px] font-bold text-dark leading-snug group-hover:text-primary transition-colors">
                Types of Flooring Materials
              </div>
              <div className="text-[12px] text-text-comment mt-1 mb-2">
                Company News <span className="mx-2">|</span> December 1, 2019
                <span className="mx-2">|</span> No comments
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-6 md:gap-10 mt-12 md:mt-16 lg:mt-[80px]">
          <span className="text-xl md:text-[28px] font-bold text-dark">
            Explore all our news posts
          </span>
          <button className="w-full sm:w-auto bg-primary text-white font-bold uppercase tracking-wider text-sm py-4 px-10 rounded hover:bg-primary-hover transition-colors cursor-pointer">
            View all news
          </button>
        </div>
      </div>
    </section>
  );
};
