import circleProgress from "../shared/assets/circleProgress.png";
import circleYear from "../shared/assets/circleYear.png";
import circleHours from "../shared/assets/circleHours.png";
import circleProjects from "../shared/assets/circleProjects.png";
import builderFacts from "../shared/assets/builderFacts.jpg";
import helmetFacts from "../shared/assets/helmetFacts.jpg";
import handFacts from "../shared/assets/handFacts.jpg";

export const Facts = () => {
  return (
    <section className="w-full">
      <div className="max-w-1230 mx-auto mt-120">
        <h2 className="text-[46px] font-black leading-tight text-[#1E212C] text-center">
          Some facts and figures
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 max-w-1230 mx-auto mt-60">
        <div className="overflow-hidden w-37">
          <img
            src={circleProgress}
            alt="circle Progress"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="mt-5">Totally satisfied clients</div>
        </div>
        <div className="overflow-hidden w-37">
          <img
            src={circleYear}
            alt="circle Year"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="mt-5">Years of experience</div>
        </div>
        <div className="overflow-hidden w-37">
          <img
            src={circleHours}
            alt="circle Hours"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="mt-5">Working hours spent</div>
        </div>
        <div className="overflow-hidden w-37">
          <img
            src={circleProjects}
            alt="circle Projects"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="mt-5">Succeeded projects</div>
        </div>
      </div>

      <div className="max-w-1230 mx-auto mt-45">
        <h2 className="text-[46px] font-black leading-tight text-[#1E212C] text-center">
          Recent news
        </h2>

        <div className="flex gap-7.5 mt-60">
          <div className="">
            <img
              src={builderFacts}
              alt="builder Facts"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="text-[20px] font-bold text-[#1E212C] leading-snug mb-3 group-hover:text-[#FF5A30] mt-24">
              How to Build Climate Change-Resilient Infrastructure
            </div>
            <div className="text-[12px] text-[#787A80] mb-2">
              Industry News <span className="mx-2">|</span> June 24, 2020{" "}
              <span className="mx-2">|</span> 4 comments
            </div>
            <div className="text-[14px] text-[#424551] leading-relaxed mt-4">
              Ipsum aliquet nisi, hendrerit rhoncus quam tortor, maecenas
              faucibus. Tincidunt aliquet sit vel, venenatis nulla. Integer
              bibendum turpis convallis enim, nibh convallis...
            </div>
          </div>

          <div className="">
            <div className="">
              <img
                src={helmetFacts}
                alt="helmet Facts"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-24">How Construction Can Help Itself</div>
              <div className="text-[12px] text-[#787A80] mb-2">
                Innovation <span className="mx-2">|</span> June 24, 2020
                <span className="mx-2">|</span> No comments
              </div>
            </div>
            <div className="">
              <img
                src={handFacts}
                alt="hand Facts"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="mt-24">Types of Flooring Materials</div>
              <div className="text-[12px] text-[#787A80] mb-2">
                Company News <span className="mx-2">|</span> December 1, 2019
                <span className="mx-2">|</span> No comments
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10 mt-50">
          <span className="text-[28px] font-bold text-[#1E212C]">
            Explore all our news posts
          </span>
          <button className="bg-[#FF5A30] text-white font-bold uppercase tracking-wider text-sm py-4 px-10 rounded hover:bg-[#ee4d24]">
            View all news
          </button>
        </div>
      </div>
    </section>
  );
};
