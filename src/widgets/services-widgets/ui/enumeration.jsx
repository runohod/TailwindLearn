import { construction, projectDevelopment, interiorDesign, repairs } from "@/shared/assets/sevices";

export const Enumeration = () => {
  return (
    <section className="py-20">
      <div className="container-custom mx-auto px-6 md:px-24">

        <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-20">
          <div className="w-full md:w-1/2">
            <img
              src={construction}
              alt="Construction"
              className="h-auto w-full rounded-md object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-[#1E212C] md:text-4xl">
              Construction
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur 
              vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies 
              sed ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. 
              Eget aliquam dignissim ut vestibulum.
            </p>
            <button
              type="button"
              className="border border-primary px-10 py-4 font-bold uppercase text-primary transition-all hover:bg-primary hover:text-white"
            >
              Learn more
            </button>
          </div>
        </div>

        <div className="my-20" />

        <div className="flex flex-col-reverse items-center gap-10 md:flex-row lg:gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-[#1E212C] md:text-4xl">
              Project Development
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. 
              Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate 
              elementum blandit massa vitae amet felis eget.
            </p>
            <button
              type="button"
              className="border border-primary px-10 py-4 font-bold uppercase text-primary transition-all hover:bg-primary hover:text-white"
            >
              Learn more
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={projectDevelopment}
              alt="Project Development"
              className="h-auto w-full rounded-md object-cover shadow-lg"
            />
          </div>
        </div>

        <div className="my-20" />

        <div className="flex flex-col items-center gap-10 md:flex-row lg:gap-20">
          <div className="w-full md:w-1/2">
            <img
              src={interiorDesign}
              alt="interiorDesign"
              className="h-auto w-full rounded-md object-cover shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-[#1E212C] md:text-4xl">
              Construction
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Sapien, feugiat faucibus orci arcu, vulputate. Tristique varius consectetur 
              vulputate arcu, scelerisque nisi, nibh. Enim semper id sodales ultricies 
              sed ut augue. Mattis habitant venenatis, gravida posuere massa ac interdum. 
              Eget aliquam dignissim ut vestibulum.
            </p>
            <button
              type="button"
              className="border border-primary px-10 py-4 font-bold uppercase text-primary transition-all hover:bg-primary hover:text-white"
            >
              Learn more
            </button>
          </div>
        </div>

        <div className="my-20" />

        <div className="flex flex-col-reverse items-center gap-10 md:flex-row lg:gap-20">
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold text-[#1E212C] md:text-4xl">
              Project Development
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. 
              Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate 
              elementum blandit massa vitae amet felis eget.
            </p>
            <button
              type="button"
              className="border border-primary px-10 py-4 font-bold uppercase text-primary transition-all hover:bg-primary hover:text-white"
            >
              Learn more
            </button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={repairs}
              alt="repairs"
              className="h-auto w-full rounded-md object-cover shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};