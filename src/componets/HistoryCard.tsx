import type { IconType } from "react-icons";

type Historyprops = {
  title: string;
  day: string;
  time?: string;
  amount: string;
  icon: IconType;
  classname?: string;
  color?: string;
};

function HistoryCard({
  title,
  day,
  time,
  amount,
  icon: Icon,
  classname,
  color,
}: Historyprops) {
  return (
    <>
      <div className="px-6 flex gap-5 items-center w-full">
        <div
          className={`bg-[#EBEFEA] shrink-0 ${color} rounded-full w-10 h-10 flex items-center justify-center ${classname}`}
        >
          <Icon size={20} />
        </div>
        <div className="flex items-center w-full  justify-between">
          <div>
            <h1 className=" text-[15px]">{title}</h1>
            <div className="flex text-[#6F7A73] items-center gap-1">
              <p className="text-[13px]">{day}</p>
              <p className="text-[13px]">{time}</p>
            </div>
          </div>

          <div className={`font-semibold ${color}`}>{amount}</div>
        </div>
      </div>
    </>
  );
}

export default HistoryCard;
