import { bgQuickDiscuss } from "@/shared/assets";

export const QuickDiscuss = () => {
  return (
    <section
      className="w-full min-h-800 bg-cover bg-center bg-no-repeat flex items-center mt-120"
      style={{ backgroundImage: `url(${bgQuickDiscuss})` }}
    >
      <div className="max-w-1230 w-full mx-auto px-24 flex justify-end">
        <div className="w-full max-w-123.75 bg-white rounded-lg shadow-[0_22px_40px_rgba(30,33,44,0.06)] p-10 flex flex-col">
          <h3 className="text-[28px] font-bold text-dark text-center mb-6 leading-tight">
            A quick way to discuss details
          </h3>

          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-gray-text font-normal">
                Name*
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full h-13 px-24 bg-text-form border border-[#D7D9DF] rounded text-[16px] text-dark placeholder-[#9A9CA5] focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-gray-text font-normal">
                Phone*
              </label>
              <input
                type="tel"
                placeholder="Your phone number"
                className="w-full h-13 px-24 bg-text-form border border-[#D7D9DF] rounded text-[16px] text-dark placeholder-[#9A9CA5] focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-gray-text font-normal">
                Email
              </label>
              <input
                type="email"
                placeholder="Your working email"
                className="w-full h-13 px-24 bg-text-form border border-[#D7D9DF] rounded text-[16px] text-dark placeholder-[#9A9CA5] focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[14px] text-gray-text font-normal">
                Message*
              </label>
              <textarea
                placeholder="Your message"
                className="w-full h-21.5 p-4 bg-text-form border border-[#D7D9DF] rounded text-[16px] text-dark placeholder-[#9A9CA5] focus:outline-none focus:border-primary"
                required
              ></textarea>
            </div>
            <label className="flex items-start gap-3 cursor-pointer mt-2 select-none">
              <input
                type="checkbox"
                className="accent-primary w-4 h-4 mt-1 rounded cursor-pointer"
                required
              />
              <span className="text-[14px] text-gray-text leading-tight">
                I agree to receive communications from Createx Construction
                Bureau.
              </span>
            </label>

            <button
              type="submit"
              className="w-full sm:w-auto self-center mt-4 px-10 h-13 bg-primary hover:bg-[#e04e27] text-white text-[16px] font-bold uppercase"
            >
              Send request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
