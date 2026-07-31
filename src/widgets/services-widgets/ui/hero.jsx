import { background } from "@/shared/assets/sevices";

export const Hero = () => {
  return (
    <section
      className="relative w-full bg-[#F4F5F7] bg-cover bg-center bg-no-repeat py-20 md:py-32"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="container-custom mx-auto px-6 relative z-10 md:px-24">
        <div className="mb-10 flex items-center gap-2 text-sm font-medium">
          <a
            href="/"
            className="text-gray-800 transition-colors hover:text-primary"
          >
            Homepage
          </a>
          <span className="text-gray-400">/</span>
          <span className="text-gray-400">Services</span>
        </div>

        <div className="max-w-full md:max-w-[600px]">
          <h1 className="mb-6 text-4xl font-black uppercase tracking-wide text-[#1E212C] md:text-[72px] md:leading-tight">
            Services
          </h1>

          <p className="text-base text-gray-600 opacity-90 md:text-xl md:leading-relaxed">
            If you are looking for a full-service construction company, look
            to Createx Construction Bureau. We are doing our best
            to be a partner for all of your construction needs.
          </p>
        </div>
      </div>
    </section>
  );
};
