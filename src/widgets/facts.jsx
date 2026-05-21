import circleProgress from "../shared/assets/circleProgress.png";
import circleYear from "../shared/assets/circleYear.png";
import circleHours from "../shared/assets/circleHours.png";
import circleProjects from "../shared/assets/circleProjects.png";

export const Facts = () => {
  return (
    <section>
      <div className="max-w-[1230px] mx-auto mt-[120px]">
        <h2 className="text-[46px] font-black leading-tight text-[#1E212C] text-center">
          Supported by 12+ partners
        </h2>
      </div>

      <div className="overflow-hidden">
        <img
          src={circleProgress}
          alt="circle Progress"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={circleYear}
          alt="circle Year"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={circleHours}
          alt="circle Hours"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="overflow-hidden">
        <img
          src={circleProjects}
          alt="circle Projects"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

    </section>
  );
};
