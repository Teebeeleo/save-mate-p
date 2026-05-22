import type { IconType } from "react-icons";

type GoalCategoryCardProps = {
  icon: IconType;
  title: string;
};

function GoalCategoryCard({ icon: Icon, title }: GoalCategoryCardProps) {
  return (
    <>
      <div className="w-50 hover:text-[#00543b] ">
        <div className=" hover:border-[#287f64] shadow border-[#c2cac5] hover:bg-[#e1faee] border flex flex-col justify-center items-center py-4 rounded-xl">
          <span>
            <Icon size={18}/>
          </span>
          <h1 className="text-[14px] font-semibold">{title}</h1>
        </div>
      </div>
    </>
  );
}

export default GoalCategoryCard;
