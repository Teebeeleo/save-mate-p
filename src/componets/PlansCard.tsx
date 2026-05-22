import type { IconType } from "react-icons";

type PlansCardprops = {
  icon: IconType;
  target: number;
  title: string;
  amount: number;
  classname?: string;
  percentageComplete: number;
};

function PlansCard({
  icon: Icon,
  target,
  title,
  amount,
  classname,
  percentageComplete,
}: PlansCardprops) {
  return (
    <>
      <div className="md:w-full bg-white p-4 rounded-xl shadow">
        <div className="flex justify-between items-center">
          <span className={classname}>
            <Icon size={20} />
          </span>
          <h2 className="text-[#6F7A73] md:text-[12px] text-[15px]">
            Target: ${target.toLocaleString()}
          </h2>
        </div>
        <h2 className="pt-2 font-semibold">{title}</h2>
        <div className="flex justify-between items-center">
          <p className="pt-2 font-semibold text-[#00543B]">
            ${amount.toLocaleString()}
          </p>
          <p className="md:text-[12px] text-[15px]  text-[#00543B]">
            {percentageComplete}% complete
          </p>
        </div>
        <input type="range" className=" w-full  accent-[#00543B]" />
      </div>
    </>
  );
}

export default PlansCard;
