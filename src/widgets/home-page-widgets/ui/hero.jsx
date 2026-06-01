import bgHeader from "../shared/assets/bgHeader.jpg";

export const Hero = () => {
  return (
    <section className="relative w-full h-[988px] bg-cover bg-center bg-no-repeat flex items-center bg-[image:linear-gradient(rgba(30,33,44,0.6),rgba(30,33,44,0.6)),var(--bg-image)]"
      style={{ '--bg-image': `url(${bgHeader})` }}
    >
      <div className="max-w-[1230px] w-full mx-auto px-4 text-white">
        <h1 className="text-6xl font-black uppercase leading-tight max-w-[577px]">
          Create<span className="text-primary">x</span> <br /> Construction
        </h1>
        <p className="mt-[24px] text-xl max-w-[595px]">
          Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. 
        </p>
        
        <div className="mt-[61px] flex gap-[24px]">
          <button className="h-[52px] px-[40px] border border-white font-bold uppercase hover:bg-white hover:text-heading transition-all">
            Learn more about us
          </button>
          <button className="h-[52px] px-[40px] bg-primary font-bold uppercase hover:bg-orange-600 transition-all">
            SUBMIT REQUEST
          </button>
        </div>
      </div>
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-8 z-20 pointer-events-none">
        <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-[#1E212C] transition-all pointer-events-auto group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-180">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>

        <button className="w-[48px] h-[48px] rounded-full flex items-center justify-center bg-white/10 hover:bg-white text-white hover:text-[#1E212C] transition-all pointer-events-auto group">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
      </div>

    <div className="absolute bottom-20 left-0 right-0">
        <div className="max-w-[1230px] mx-auto px-4">
            <div className="flex items-end">
            <div className="flex flex-col gap-3 w-[178px] group cursor-pointer">
                <span className="text-[28px] font-bold text-white">01</span>
                <div className="h-[2px] w-full bg-white relative">
                </div>
            </div>

            <div className="flex flex-col gap-3 w-[178px] group cursor-pointer">
                <span className="text-[28px] font-bold text-white opacity-60 group-hover:opacity-100 transition-opacity">02</span>
                <div className="h-[2px] w-full bg-white/30 group-hover:bg-white/60 transition-colors"></div>
            </div>

            <div className="flex flex-col gap-3 w-[178px] group cursor-pointer">
                <span className="text-[28px] font-bold text-white opacity-60 group-hover:opacity-100 transition-opacity">03</span>
                <div className="h-[2px] w-full bg-white/30 group-hover:bg-white/60 transition-colors"></div>
            </div>

            <div className="flex flex-col gap-3 w-[178px] group cursor-pointer">
                <span className="text-[28px] font-bold text-white opacity-60 group-hover:opacity-100 transition-opacity">04</span>
                <div className="h-[2px] w-full bg-white/30 group-hover:bg-white/60 transition-colors"></div>
            </div>
            </div>
        </div>
    </div>
    </section>
  );
};