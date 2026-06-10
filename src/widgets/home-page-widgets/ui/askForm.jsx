import { bgServices } from "@/shared/assets";

export const AskForm = () => {
  return (
    <section 
    style={{ "--bg-services": `url(${bgServices})` }}
    className="bg-[image:var(--bg-services)] bg-cover bg-center bg-no-repeat pt-20 pb-20"
    >
      <div className="container-custom -mt-56.25 relative z-10">
        <div className="bg-white shadow-[0_80px_80px_-20px_rgba(154,156,165,0.08),_0_30px_24px_-10px_rgba(154,156,165,0.05)] rounded-lg p-10">
          <h2 className="text-[28px] font-bold text-dark text-center mb-8">
            Want to know more? Ask us a question:
          </h2>
          
          <form className="flex flex-col md:flex-row flex-wrap justify-center items-end gap-6">
            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-sm color-gray-text">Name</label>
              <input 
                type="text" 
                placeholder="Your name"
                className="bg-text-form border border-gray-border rounded px-24 py-3 outline-none focus:border-primary max-w-65"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-sm text-gray-text">Phone</label>
              <input 
                type="tel" 
                placeholder="Your phone"
                className="bg-text-form border border-gray-border rounded px-24 py-3 outline-none focus:border-primary max-w-65"
              />
            </div>

            <div className="flex flex-col gap-2 md:col-span-1">
              <label className="text-sm text-gray-text">Message</label>
              <input 
                type="text" 
                placeholder="Your message"
                className="bg-text-form border border-gray-border rounded px-24 py-3 outline-none focus:border-primary max-w-103.5"
              />
            </div>

            <button 
              type="submit"
              className="bg-primary text-white font-bold uppercase text-sm py-4 px-8 rounded hover:bg-dark"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};