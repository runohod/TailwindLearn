import { bgServices } from "@/shared/assets";

export const AskForm = () => {
  return (
    <section
      style={{ "--bg-services": `url(${bgServices})` }}
      className="bg-[image:var(--bg-services)] bg-cover bg-center bg-no-repeat pt-10 pb-10 md:pt-20 md:pb-20"
    >
      <div className="container-custom mt-0 md:-mt-56.25 relative z-10 px-4 md:px-0">
        <div className="bg-white shadow-[0_80px_80px_-20px_rgba(154,156,165,0.08),_0_30px_24px_-10px_rgba(154,156,165,0.05)] rounded-lg p-6 md:p-10">
          <h2 className="text-xl md:text-[28px] font-bold text-dark text-center mb-6 md:mb-8">
            Want to know more? Ask us a question:
          </h2>

          <form className="flex flex-col md:flex-row justify-center items-stretch md:items-end gap-5 md:gap-6">
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <label className="text-sm text-gray-text">Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="bg-text-form border border-gray-border rounded px-4 md:px-24 py-3 outline-none focus:border-primary w-full md:max-w-65"
              />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-auto">
              <label className="text-sm text-gray-text">Phone</label>
              <input
                type="tel"
                placeholder="Your phone"
                className="bg-text-form border border-gray-border rounded px-4 md:px-24 py-3 outline-none focus:border-primary w-full md:max-w-65"
              />
            </div>

            <div className="flex flex-col gap-2 w-full md:flex-1 md:max-w-103.5">
              <label className="text-sm text-gray-text">Message</label>
              <input
                type="text"
                placeholder="Your message"
                className="bg-text-form border border-gray-border rounded px-4 md:px-24 py-3 outline-none focus:border-primary w-full"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white font-bold uppercase text-sm py-3.5 md:py-4 px-8 rounded hover:bg-dark cursor-pointer transition-colors w-full md:w-auto mt-2 md:mt-0"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
