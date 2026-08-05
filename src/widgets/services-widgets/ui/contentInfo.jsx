export const ContentInfo = ({ title, description, image, isReversed }) => {
  return (
    <div 
      className={`flex flex-col items-center gap-10 md:flex-row lg:gap-20 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2">
        <img
          src={image}
          alt={title}
          className="h-auto w-full rounded-md object-cover shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2">
        <h2 className="mb-6 text-3xl font-bold text-[#1E212C] md:text-4xl">
          {title}
        </h2>
        <div className="mb-8 text-lg leading-relaxed text-gray-600">
          {description}
        </div>
        <button
          type="button"
          className="border border-primary px-10 py-4 font-bold uppercase text-primary transition-all hover:bg-primary hover:text-white"
        >
          Learn more
        </button>
      </div>
    </div>
  );
};