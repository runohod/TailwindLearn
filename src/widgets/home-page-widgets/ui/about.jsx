import { video } from "@/shared/assets";

export const About = () => {
  return (
    <section className="mt-120 bg-white">
        <div className="max-w-1230 mx-auto px-4">
            <div className="flex flex-col items-center">
                <h2 className="text-[46px] font-black leading-tight text-[#1E212C] text-center">
                We are Createx Construction Bureau
                </h2>
                <p className="mt-24 text-[18px] text-text text-center max-w-660">
                We are rightfully considered to be the best construction company in the USA.
                </p>
                <img src={video} alt="video" className="mt-60" />
            </div>
        </div>
    </section>
  );
};