import redFingerBuilding from "@/shared/assets/img/redFingerBuilding.jpg"
import cubesBuilding from "@/shared/assets/img/cubesBuilding.jpg"
import thePencilBuilding from "@/shared/assets/img/thePencilBuilding.jpg"

export const OurProjects = () => {
  return (
    <section className="pb-60">
      <div className="max-w-1230 mx-auto px-4 mt-120 flex items-end justify-between mb-60">
        <h2 className="text-[46px] font-black leading-tight text-[#1E212C] max-w-176.25 text-left">
          Browse our selected projects and learn more about our work
        </h2>

        <div className="flex items-center gap-3 shrink-0 mb-2">
            <button className="w-12 h-12 rounded-full flex items-center justify-center border border-transparent hover:bg-[#FF5A30] text-[#424551] hover:text-white transition-all group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
            <button className="w-12 h-12 rounded-full flex items-center justify-center border border-transparent hover:bg-[#FF5A30] text-[#424551] hover:text-white transition-all group">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>

      </div>

      <div className="max-w-1230 flex gap-7.5 mb-20 justify-center mx-auto">
        <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="overflow-hidden aspect-390/340">
              <img 
                src={redFingerBuilding} 
                alt="Red Finger Building" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <h3 className="text-[20px] font-bold text-[#1E212C] mb-1">Red Finger Building</h3>
              <p className="text-[14px] text-[#787A80]">Business Centers</p>
            </div>
        </div>
        <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="overflow-hidden aspect-390/340">
              <img 
                src={cubesBuilding} 
                alt="Red Finger Building" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <h3 className="text-[20px] font-bold text-[#1E212C] mb-1">Cubes Building</h3>
              <p className="text-[14px] text-[#787A80]">Business Centers</p>
            </div>
        </div>
        <div className="bg-white rounded shadow-sm overflow-hidden flex flex-col group cursor-pointer hover:shadow-xl transition-shadow">
            <div className="overflow-hidden aspect-390/340">
              <img 
                src={thePencilBuilding} 
                alt="Red Finger Building" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <h3 className="text-[20px] font-bold text-[#1E212C] mb-1">The Pencil Building</h3>
              <p className="text-[14px] text-[#787A80]">Stores & Malls</p>
            </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
        <span className="text-[28px] font-bold text-[#1E212C]">
          Explore all our works
        </span>
        <button className="bg-[#FF5A30] text-white font-bold uppercase tracking-wider text-sm py-4 px-10 rounded hover:bg-[#ee4d24]">
          View portfolio
        </button>
      </div>
    </section>
  );
}