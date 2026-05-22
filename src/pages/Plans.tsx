import MainLayout from "../componets/Layout";
import { FaPlus } from "react-icons/fa6";
import { PlansData } from "../componets/PlansData";
import PlansCard from "../componets/PlansCard";
import { Link } from "react-router-dom";
import { BsShield } from "react-icons/bs";
function Plans() {
  return (
    <>
      <MainLayout>
        <div className="pt-5">
          <div className="">
            <div className=" md:flex justify-between">
              <div className="">
                <h1 className="text-[#3e423f] text-[22px] font-semibold">
                  Active Savings Plans
                </h1>
                <p className="text-[#535453] text-[14px] font-semibold">
                  You are currently on track fir 3 of your 4 goals
                </p>
              </div>
              <div className=" max-sm:flex max-sm:justify-end max-sm:p-2">
                <Link
                  to="/CreateNewPlan"
                  className="flex text-[14px] cursor-pointer items-center bg-[#096a4c] text-white gap-1 font-semibold rounded-xl px-3 py-3 max-sm:py-2  "
                >
                  <FaPlus /> Create New Plan
                </Link>
              </div>
            </div>

            <div className=" flex gap-4 max-sm:flex-col mt-2 md:mt-5 md:grid md:grid-cols-2 max-sm:mb-14">
              {PlansData.map((plan) => (
                <PlansCard
                  key={plan.title}
                  icon={plan.icon}
                  target={plan.target}
                  amount={plan.amount}
                  title={plan.title}
                  percentageComplete={plan.percentageComplete}
                  classname=" bg-[#00543b] p-2 rounded-xl font-bold text-white  "
                />
              ))}
            </div>
          </div>
          <div className="mt-5">
            <div className="hidden md:block bg-[#096a4c] text-white px-5 py-5 rounded-xl">
              <div className="flex items-center gap-2">
                <span className="bg-white/20 p-2 rounded-xl">
                  <BsShield className="text-[#ffd700]" size={20} />
                </span>
                <h1 className=" font-bold">Financial Stewardship</h1>
              </div>
              <p className="pt-3 font-semibold">
                Guided by discipline, built for growth. Your partner in securing
                a multi-generational legacy
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default Plans;
