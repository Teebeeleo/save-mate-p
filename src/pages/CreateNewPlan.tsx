import { FaNairaSign } from "react-icons/fa6";
import MainLayout from "../componets/Layout";
import { MdOutlineEditNote } from "react-icons/md";
import GoalCategoryCard from "../componets/GoalCategoryCard";
import { FaPlaneUp } from "react-icons/fa6";
import { FaCarRear } from "react-icons/fa6";
import { TbHexagonLetterF } from "react-icons/tb";
import { RiShapesLine } from "react-icons/ri";
import { LuRocket } from "react-icons/lu";
import { MdAutoGraph } from "react-icons/md";
import { PiShieldCheckeredDuotone } from "react-icons/pi";
import Screen from "../assets/Screen.png";
import BackButton from "../componets/BackButton";

function CreateNewPlan() {
  const Goal = [
    {
      icon: FaPlaneUp,
      title: "Travel",
    },
    {
      icon: TbHexagonLetterF,
      title: "FYB",
    },
    {
      icon: FaCarRear,
      title: "Vehicle",
    },
    {
      icon: RiShapesLine,
      title: "other",
    },
  ];
  return (
    <>
      <MainLayout>
        <div className="md:flex max-sm:pt-3 gap-4">
          <div className="md:w-[60%]  ">
            <div className="">
              <div className=" flex justify-between">
                <h1 className="text-[22px] text-[#191e1b] font-semibold">
                  Create New Goal
                </h1>
                <div className="md:hidden">
                  <BackButton />
                </div>
              </div>
              <p className="text-[#858f88] text-[14px]">
                Steps in Defining your objective
              </p>

              <div
                className="md:hidden bg-contain p-2 bg-center h-50 rounded-xl"
                style={{ backgroundImage: `url(${Screen})` }}
              >
                <div className="text- backdrop-blur-xl bg-white/70 mx-2 rounded-xl ">
                  <h1 className=" font-bold pl-4">Stewardship</h1>
                  <p className="text-center font-semibold">
                    Discipline is the bridge between goals and accomplishment
                  </p>
                </div>
              </div>
            </div>
            <div className=" relative mt-5">
              <div className=" absolute top-8 left-3 ">
                <MdOutlineEditNote size={16} />
              </div>
              <div className="absolute top-32 left-2">
                <FaNairaSign size={19} />
              </div>
              <div className=" flex flex-col mb-2 ">
                <label className=" text-[#0e5d45]  pb-1 text-[12px] font-semibold">
                  GOAL NAME
                </label>
                <input
                  type="text"
                  placeholder="e.g., Summer Dream Vacation"
                  className="px-10 py-3 text-[#4d8776] rounded-xl outline-[#c2ccc5] border border-[#c2ccc5]"
                />
              </div>
              <div className="">
                <div className="flex flex-col pt-3 mb-2">
                  <label className=" text-[#0e5d45]  pb-1 text-[12px] font-semibold">
                    TARGET AMOUNT
                  </label>
                  <input
                    type="text"
                    placeholder="5000"
                    className="px-10 py-3 text-[#4d8776] rounded-xl outline-[#c2ccc5] border border-[#c2ccc5]"
                  />
                </div>
              </div>

              <div className="mt">
                <label className=" text-[#0e5d45]  text-[12px] font-semibold">
                  GOAL CATEGORY
                </label>
                <div className="flex gap-3 mt-1">
                  {Goal.map((item) => (
                    <GoalCategoryCard
                      key={item.title}
                      title={item.title}
                      icon={item.icon}
                    />
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <h2 className="text-[14px] text-[#5c615d]">
                  Auto deduction percentage
                </h2>
                <p className="text-[#226b55]">15%</p>
              </div>
              <div className="mt-1">
                <input type="range" className="w-full accent-[#287f64] " />
              </div>
              <div className="text-[12px] text-[#5c615d] flex justify-between">
                <p>CONSERVATIVE</p>
                <p>BALANCED</p>
                <p>AGGRESSIVE</p>
              </div>
              <div className="flex justify-between md:mt-2  mt-4">
                <div className=" max-sm:flex max-sm:justify-center max-sm:w-full">
                  <div className="bg-white w-59 pl-3 py-2 rounded-xl shadow ">
                    <div className="flex items-center gap-2">
                      <span className="bg-[#9ff4cc] p-1 rounded">
                        <MdAutoGraph size={17} />
                      </span>
                      <div className="  leading-tight">
                        <h1 className="text-[12px] font-semibold">
                          Auto-Deduct-Enabled
                        </h1>
                        <p className="text-[11px]">
                          Smart logic optimize your cashflow
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white w-59 pl-3 py-2 rounded-xl shadow hidden md:block">
                  <div className="flex items-center gap-2">
                    <span className="bg-[#9ff4cc] p-1 rounded">
                      <PiShieldCheckeredDuotone size={17} />
                    </span>
                    <div className="  leading-tight">
                      <h1 className="text-[12px] font-semibold">
                        Vault Protection
                      </h1>
                      <p className="text-[11px]">
                        Locked Until goal is achieved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:mt-6 mt-10 max-sm:mb-20">
                <button className=" cursor-pointer text-white w-full justify-center py-2 flex items-center  gap-2 bg-[#076d4e] rounded-xl font-semibold">
                  Create Saving Plan <LuRocket />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[39%] hidden md:block px-3  ">
            <div className="flex justify-end">
              <BackButton />
            </div>
            <div>
              <div className="bg-white pt-1 rounded-xl px-1 pb-5 shadow">
                <div className="flex items-center bg-[#e4efea] text-[#00543b] font-semibold gap-2 p-2 rounded-t-xl text-[15px]">
                  <span>
                    <MdAutoGraph />
                  </span>
                  <h1>SMART STRATEGY IMPACT</h1>
                </div>
                <div className="pt-3 text-[14px]">
                  <div className="flex justify-between px-2">
                    <p>Estimated Completion </p>
                    <p className=" font-bold">Oct 2026</p>
                  </div>
                  <div className="flex justify-between px-2 pt-2">
                    <p>Monthly Deposit </p>
                    <p className=" font-bold">$450.00</p>
                  </div>
                </div>
                <div className="pt-4 text-[#d6dcd6]  px-3">
                  <hr />
                </div>
                <div className="mt-5 p-4 border-2 m-3 border-[#d6dcd6] rounded-xl">
                  <p className="  px-4 text-[14px] text-[#6d7570]">
                    "With your current 15% allocation, you are expected to reach
                    this goal 2 months faster than average using our Al-driven
                    portfolio rebalancing."
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className="h-60 bg-cover bg-center rounded-xl p-2 flex items-end"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${Screen})`,
                  }}
                >
                  <div className="text-white  ">
                    <h1 className=" bg-white/40 w-17 p-1 rounded  font-semibold">
                      PRO TIP
                    </h1>
                    <p className="text-[19px] font-semibold w-70 leading-tight pt-3">
                      Visualize your growth with WealthFlow
                    </p>
                    <p className="text-[#d8e3e0] text-[14px] font-semibold pb-6">
                      Track every penny as it grows into your dreams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        
      </MainLayout>
    </>
  );
}

export default CreateNewPlan;
