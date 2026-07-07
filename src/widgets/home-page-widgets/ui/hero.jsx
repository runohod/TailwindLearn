import { bgHeader } from "@/shared/assets";

export const Hero = () => {
  return (
    <section
      className="relative w-full h-[500px] md:h-247 bg-cover bg-center bg-no-repeat flex items-center bg-[image:linear-gradient(rgba(30,33,44,0.6),rgba(30,33,44,0.6)),var(--bg-image)]"
      style={{ "--bg-image": `url(${bgHeader})` }}
    >
      <div className="container-custom text-white relative z-10">
        <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight max-w-full md:max-w-144.25">
          Create<span className="text-primary">x</span> <br /> Construction
        </h1>

        <div className="mt-10 md:mt-24 text-lg md:text-xl max-w-full md:max-w-148.75 opacity-90">
          Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat,
          dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget
          pellentesque integer ipsum elementum felis.
        </div>

        <div className="mt-10 md:mt-15.25 flex flex-col sm:flex-row gap-4 md:gap-24">
          <button className="h-12 md:h-13 px-6 md:px-10 border border-white font-bold uppercase transition-all duration-300 text-sm md:text-base hover:bg-white hover:text-gray-900 active:scale-95 cursor-pointer">
            Learn more about us
          </button>
          <button className="h-12 md:h-13 px-6 md:px-10 bg-primary font-bold uppercase transition-all duration-300 text-sm md:text-base hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30 active:scale-95 active:translate-y-0 cursor-pointer">
            SUBMIT REQUEST
          </button>
        </div>
      </div>

      <div className="hidden min-[1350px]:flex absolute inset-x-0 top-1/2 -translate-y-1/2 justify-between px-8 z-20 pointer-events-none">
        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-gray-900 transition-all duration-300 pointer-events-auto group active:scale-90 cursor-pointer backdrop-blur-sm">
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

        <button className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-gray-900 transition-all duration-300 pointer-events-auto group active:scale-90 cursor-pointer backdrop-blur-sm">
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

      <div className="hidden [min-width:576px]:block absolute bottom-6 md:bottom-20 left-0 right-0 overflow-x-auto md:overflow-visible">
        <div className="max-w-1230 mx-auto px-6 md:px-24 min-w-max md:min-w-0">
          <div className="flex items-end gap-4 md:gap-0">
            {[
              { num: "01", active: true },
              { num: "02", active: false },
              { num: "03", active: false },
              { num: "04", active: false },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-1 md:gap-3 w-28 md:w-44.5 group cursor-pointer"
              >
                <span
                  className={`text-xl md:text-[28px] font-bold text-white ${item.active ? "" : "opacity-60 group-hover:opacity-100 transition-opacity"}`}
                >
                  {item.num}
                </span>
                <div
                  className={`h-0.5 w-full ${item.active ? "bg-white" : "bg-white/30 group-hover:bg-white/60"} transition-colors`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
