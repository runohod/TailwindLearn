import { inDepth, higerFit, sentinal, happyHome, forSale, sunsetRealty, handshake, profilePartners } from "@/shared/assets";

export const Partners = () => {
  return (
    <section className="bg-[#F4F5F6] py-20">
      <div className="max-w-1230 mx-auto">
        <h2 className="text-[46px] font-black leading-tight text-[#1E212C] text-center">
          Supported by 12+ partners
        </h2>
      </div>
      <div className="max-w-1230 flex flex-wrap items-center justify-between mx-auto mt-60">
        <img src={inDepth} alt="in Depth" className="" />
        <img src={higerFit} alt="higer Fit" className="" />
        <img src={sentinal} alt="sentinal" className="" />
        <img src={happyHome} alt="happy Home" className="" />
        <img src={forSale} alt="for Sale" className="" />
        <img src={sunsetRealty} alt="sunset Realty" className="" />
      </div>

      <div className="max-w-1230 mx-auto mt-42.5 flex justify-between">
        <div className="max-w-150">
          <h2 className="text-[46px] font-black leading-tight text-[#1E212C]">
            What our clients are saying
          </h2>
          <img src={profilePartners} alt="profile-partners" className="mt-60" />
          <div className="mt-24">
            Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum
            eiusmod enim. Consectetur magna cillum consequat minim laboris
            cillum laboris voluptate minim proident exercitation ullamco.{" "}
          </div>
          <div className="mt-24 font-bold">Shawn Edwards</div>
          <div className="mt-1">Position, Company name</div>
        </div>

        <img src={handshake} alt="handshake" className="" />
      </div>
    </section>
  );
};
