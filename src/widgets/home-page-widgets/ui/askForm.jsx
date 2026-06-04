import { bgServices } from "@/shared/assets";

export const AskForm = () => {
  return (
    <section 
    style={{ backgroundImage: `url(${bgServices})` }}
    className="pt-20 pb-20">
      <div className="max-w-1230 mx-auto px-4 -mt-56.25 relative z-10">
        <div className="bg-white shadow-[0_80px_80px_-20px_rgba(154,156,165,0.08),_0_30px_24px_-10px_rgba(154,156,165,0.05)] rounded-lg p-10">
          <h2 className="text-[28px] font-bold text-[#1E212C] text-center mb-8">
            Want to know more? Ask us a question:
          </h2>
          
          <form className="flex flex-col md:flex-row flex-wrap justify-center items-end gap-6">
            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-sm text-[#424551]">Name</label>
              <input 
                type="text" 
                placeholder="Your name"
                className="bg-[#F4F5F6] border border-[#D7DADD] rounded px-4 py-3 outline-none focus:border-[#FF5A30] max-w-65"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-sm text-[#424551]">Phone</label>
              <input 
                type="tel" 
                placeholder="Your phone"
                className="bg-[#F4F5F6] border border-[#D7DADD] rounded px-4 py-3 outline-none focus:border-[#FF5A30] max-w-65"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-sm text-[#424551]">Message</label>
              <input 
                type="text" 
                placeholder="Your message"
                className="bg-[#F4F5F6] border border-[#D7DADD] rounded px-4 py-3 outline-none focus:border-[#FF5A30] max-w-103.5"
              />
            </div>

            <button 
              type="submit"
              className="bg-[#FF5A30] text-white font-bold uppercase text-sm py-4 px-8 rounded hover:bg-[#ee4d24] "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};