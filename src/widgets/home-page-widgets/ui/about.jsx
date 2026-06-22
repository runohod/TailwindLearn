import { useState } from "react";
import { video } from "@/shared/assets";

export const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="mt-16 md:mt-120 bg-white">
      <div className="container-custom">
        <div className="flex flex-col items-center">
          <h2 className="text-[32px] md:text-[46px] font-black leading-tight text-dark text-center max-w-[540px] md:max-w-none">
            We are Createx Construction Bureau
          </h2>

          <div className="mt-4 md:mt-24 text-base md:text-[18px] text-text text-center max-w-660 opacity-90">
            We are rightfully considered to be the best construction company in
            the USA.
          </div>

          <div className="relative mt-8 md:mt-60 w-full max-w-[950px] aspect-video rounded-lg overflow-hidden shadow-sm group">
            {!isPlaying ? (
              <div
                className="absolute inset-0 w-full h-full cursor-pointer flex items-center justify-center"
                onClick={() => setIsPlaying(true)}
              >
                <img
                  src={video}
                  alt="video preview"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                />

                <div className="absolute inset-0 bg-black/5 transition-colors duration-300 group-hover:bg-black/10" />

                <span className="relative z-10 transition-transform duration-300 transform group-hover:scale-110">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#FF5A30" />
                    <path
                      d="M51.5 39.134C52.1667 39.5189 52.1667 40.4811 51.5 40.866L35 50.3923C34.3333 50.7772 33.5 50.2961 33.5 49.5263L33.5 30.4737C33.5 29.7039 34.3333 29.2228 35 29.6077L51.5 39.134Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </div>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8PNBT_92JYo?autoplay=1"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
