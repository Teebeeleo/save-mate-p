import MainLayout from "../componets/Layout";
import { FaArrowTrendUp } from "react-icons/fa6";
import Icon from "../assets/icon.png";
import Button from "../componets/Button";
import { MdDataSaverOn } from "react-icons/md";
import { PiHandWithdrawFill } from "react-icons/pi";
import { IoLinkSharp } from "react-icons/io5";
import PlansCard from "../componets/PlansCard";
import { PlansData } from "../componets/PlansData";
import { IoIosArrowForward } from "react-icons/io";
import HistoryCard from "../componets/HistoryCard";
import { GiMoneyStack } from "react-icons/gi";
import { FiShield } from "react-icons/fi";
import Chart from "../componets/Chart";
import { Link } from "react-router-dom";

function Home() {
  const History = [
    {
      title: "Weekly Auto-Save",
      day: "T4oday",
      time: "9:00 AM",
      amount: "+$150.00",
      icon: GiMoneyStack,
      color: "text-[#00543B]",
    },
    {
      title: "Goal Reward Bonus",
      day: "Yesterday",
      amount: "+$25.00",
      icon: GiMoneyStack,
      color: "text-[#00543B]",
    },
    {
      title: "Rent Payment",
      day: "3 days ago",
      amount: "-$2,100.00",
      icon: GiMoneyStack,
      color: "text-red-600",
    },
  ];
  return (
    <>
      <MainLayout>
        <div className="flex gap-5 max-sm:justify-center">
          <div className=" flex md:justify-between items-center justify-center max-sm:flex-col  md:w-[62%] md:h-42 md:bg-white md:shadow px-7 md:py-10 py-5 rounded-2xl md:relative md:overflow-hidden">
            <div className=" max-sm:flex flex-col items-center max-sm:pb-3">
              <h2 className="text-[#6F7A73]">Total Savings Balance</h2>
              <h3 className="text-[#00543B] md:text-[25px] text-[36px] font-bold max-sm:pt-3">
                $24,850.42
              </h3>
              <h4 className="hidden  md:flex  md:items-center gap-2 text-[#0B6E4F] md:pt-3">
                <FaArrowTrendUp /> <p>+12.5% from last month</p>
              </h4>
            </div>

            <div>
              <div className=" border-8 rounded-full md:w-22 md:h-22 w-40 h-40 flex flex-col items-center justify-center leading-5 text-[#00543B] ">
                <p className="text-[20px] font-semibold">75%</p>
                <p>Goal</p>
              </div>
            </div>
          </div>

          <div className=" hidden md:block w-[35%] bg-linear-to-br from-[#00543B]/0 via-[#00543B]/40 to-[#00543B]/90 h-90 py-30 rounded-2xl overflow-hidden bg-black/25 inset-0">
            <div className=" ">
              <div className="w-75 absolute top-10  ">
                <img src={Icon} alt="" />
              </div>

              <div className=" z-10 relative text-white ml-5  ">
                <h1 className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl w-37 py-1 px-2 text-[13px] font-semibold">
                  PREMIUM INSIGHTS
                </h1>
                <h2 className="pt-3 text-[17px] font-semibold drop-shadow-md">
                  GROW YOUR WEALTH WITH SMART ESG PORTFOLIO
                </h2>
                <p className="text-[14px] pt-5">
                  Discover curated investment opportunities that align with your
                  long-term savings goals.
                </p>
                <button className=" px-30 py-4 mt-4 rounded-xl font-semibold bg-white text-[#00543B]">
                  Explore Portfolios
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:-mt-43 mt-2">
          <div className="   md:w-[50%] flex justify-between gap-5 ">
            <Button
              label="Save"
              icon={MdDataSaverOn}
              classname=" bg-[#00543B] text-white"
            />
            <Button
              label="Widthraw"
              icon={PiHandWithdrawFill}
              classname=" text-[#125b3f]"
            />
            <Button
              label="LinkBank"
              icon={IoLinkSharp}
              classname="text-[#3F4943]"
              link="/linkBank"
            />
          </div>
        </div>
        <div className=" flex justify-between md:w-[62%] pt-6 pb-4">
          <h3 className=" max-sm:text-[20px]">Active plans</h3>
          <Link
            to="/plans"
            className="flex cursor-pointer hover:font-bold items-center md:text-[12px] text-[14px] font-semibold text-[#00543B]"
          >
            View All <IoIosArrowForward />
          </Link>
        </div>
        <div className=" flex gap-4 max-sm:flex-col md:w-180">
          {PlansData.slice(0, 2).map((plan) => (
            <PlansCard
              key={plan.title}
              icon={plan.icon}
              target={plan.target}
              amount={plan.amount}
              title={plan.title}
              percentageComplete={plan.percentageComplete}
              classname=" bg-[#00543b] p-2 rounded-xl text-white font-bold "
            />
          ))}
        </div>
        <div className="hidden md:flex justify-end -mt-22  mr-4 ">
          <div className="bg-white w-[35.5%]  rounded-2xl shadow">
            <h2 className="pl-6 pt-4 pb-3">Recent Activity</h2>

            {History.map((hist) => (
              <div className="pb-3">
                <HistoryCard
                  key={hist.time}
                  day={hist.day}
                  title={hist.title}
                  amount={hist.amount}
                  icon={hist.icon}
                  time={hist.time}
                  color={hist.color}
                />
              </div>
            ))}
            <hr className="text-[#BEC9C1]" />
            <h2 className="flex justify-center font-semibold text-[12px] text-[#125b3f] py-4">
              View Full History
            </h2>
          </div>
        </div>
        <div className=" flex justify-end max-sm:pb-20  md:mr-4 mt-5 relative overflow-hidden">
          <div className="  bg-[#125b3f] md:w-[35.5%] rounded-xl">
            <div className="px-7 py-7 text-white">
              <h2 className="text-[13px]">Financial Shield Active</h2>
              <p className="text-[11px]">
                Your emergency fund is fully funded for 6 months of expenses.
              </p>
              <span className=" rounded-br-4xl absolute text-[#6ba795] top-11 -right-4">
                <FiShield size={60} />
              </span>
            </div>
          </div>
        </div>
        <div className="w-[61.6%] -mt-65 hidden md:block">
          <Chart />
        </div>
      </MainLayout>
    </>
  );
}

export default Home;

// this is my home page use it as an example
