import {
  redFingerBuilding,
  cubesBuilding,
  thePencilBuilding,
} from "@/shared/assets";

export const OurProjects = () => {
  return (
    <section className="pb-16 md:pb-24 lg:pb-60">
      <div className="container-custom mt-16 md:mt-24 lg:mt-120 flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-14 lg:mb-60 px-4 xl:px-0 gap-6">
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black leading-tight text-dark max-w-[705px] text-left">
          Browse our selected projects and learn more about our work
        </h2>

        <div className="flex items-center gap-3 shrink-0 mb-2 self-start md:self-end">
          <button className="w-12 h-12 rounded-full flex items-center justify-center border border-transparent hover:bg-primary text-gray-text hover:text-white transition-all group cursor-pointer">
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
          <button className="w-12 h-12 rounded-full flex items-center justify-center border border-transparent hover:bg-primary text-gray-text hover:text-white transition-all group cursor-pointer">
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

      <div className="max-w-1200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7.5 mb-12 md:mb-20 mx-auto px-4 xl:px-0">
        <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow w-full">
          <div className="overflow-hidden aspect-[390/340]">
            <img
              src={redFingerBuilding}
              alt="Red Finger Building"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 text-center flex flex-col items-center hover:bg-primary-hover transition-colors hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30 active:scale-95 active:translate-y-0 cursor-pointer">
            <h3 className="text-[20px] font-bold text-dark mb-1">
              Red Finger Building
            </h3>
            <p className="text-[14px] text-text-comment">Business Centers</p>
          </div>
        </div>

        <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow w-full">
          <div className="overflow-hidden aspect-[390/340]">
            <img
              src={cubesBuilding}
              alt="Cubes Building"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 text-center flex flex-col items-center hover:bg-primary-hover transition-colors hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30 active:scale-95 active:translate-y-0 cursor-pointer">
            <h3 className="text-[20px] font-bold text-dark mb-1">
              Cubes Building
            </h3>
            <p className="text-[14px] text-text-comment">Business Centers</p>
          </div>
        </div>

        <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow w-full sm:col-span-2 lg:col-span-1 sm:max-w-[calc(50%-12px)] lg:max-w-none mx-auto sm:w-full">
          <div className="overflow-hidden aspect-[390/340]">
            <img
              src={thePencilBuilding}
              alt="The Pencil Building"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="p-6 text-center flex flex-col items-center hover:bg-primary-hover transition-colors hover:bg-orange-600 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange-600/30 active:scale-95 active:translate-y-0 cursor-pointer">
            <h3 className="text-[20px] font-bold text-dark mb-1">
              The Pencil Building
            </h3>
            <p className="text-[14px] text-text-comment">Stores & Malls</p>
          </div>
        </div>
      </div>

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
