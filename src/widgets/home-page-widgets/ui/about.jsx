import { video } from "@/shared/assets";

export const About = () => {
  return (
    <section className="mt-16 md:mt-120 bg-white">
      <div className="container-custom px-4 md:px-0">
        <div className="flex flex-col items-center">
          <h2 className="text-[32px] md:text-[46px] font-black leading-tight text-dark text-center max-w-[540px] md:max-w-none">
            We are Createx Construction Bureau
          </h2>

          <div className="mt-4 md:mt-24 text-base md:text-[18px] text-text text-center max-w-660 opacity-90">
            We are rightfully considered to be the best construction company in
            the USA.
          </div>

          <img
            src={video}
            alt="video"
            className="mt-8 md:mt-60 w-full md:w-auto object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};
