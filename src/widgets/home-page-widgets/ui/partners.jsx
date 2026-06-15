import {
  inDepth,
  higerFit,
  sentinal,
  happyHome,
  forSale,
  sunsetRealty,
  handshake,
  profilePartners,
} from "@/shared/assets";

export const Partners = () => {
  return (
    <section className="bg-text-form py-12 md:py-20">
      <div className="container-custom px-4">
        <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black leading-tight text-dark text-center">
          Supported by 12+ partners
        </h2>
      </div>

      <div className="max-w-1230 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center mx-auto mt-8 md:mt-12 lg:mt-[60px] px-4 xl:px-0">
        <img
          src={inDepth}
          alt="in Depth"
          className="max-h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
        />
        <img
          src={higerFit}
          alt="higer Fit"
          className="max-h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
        />
        <img
          src={sentinal}
          alt="sentinal"
          className="max-h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
        />
        <img
          src={happyHome}
          alt="happy Home"
          className="max-h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
        />
        <img
          src={forSale}
          alt="for Sale"
          className="max-h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
        />
        <img
          src={sunsetRealty}
          alt="sunset Realty"
          className="max-h-12 object-contain filter grayscale opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>

      <div className="max-w-1230 mx-auto mt-16 md:mt-24 lg:mt-[170px] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 xl:px-0">
        <div className="max-w-full lg:max-w-[600px] order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl md:text-[46px] font-black leading-tight text-dark">
            What our clients are saying
          </h2>
          <img
            src={profilePartners}
            alt="profile-partners"
            className="mt-6 md:mt-10 lg:mt-[60px]"
          />
          <div className="mt-6 text-base text-gray-700 leading-relaxed">
            Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum
            eiusmod enim. Consectetur magna cillum consequat minim laboris
            cillum laboris voluptate minim proident exercitation ullamco.{" "}
          </div>
          <div className="mt-6 font-bold text-dark text-lg">Shawn Edwards</div>
          <div className="mt-1 text-sm text-text-comment">
            Position, Company name
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center w-full">
          <img
            src={handshake}
            alt="handshake"
            className="w-full max-w-[500px] lg:max-w-none h-auto object-cover rounded-lg shadow-sm"
          />
        </div>
      </div>
    </section>
  );
};
