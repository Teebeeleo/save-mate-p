import MainLayout from "../componets/Layout";
import { LuShieldCheck } from "react-icons/lu";
import EncryptData from "../componets/EncryptCard";
import { MdOutlineLock } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";
import { IoMdEyeOff } from "react-icons/io";
import BankCard, { BankConnectCard } from "../componets/BankCard";
import First from "../assets/First.png";
import Gtb from "../assets/Gtb.png";
import Union from "../assets/Union.png";
import Opay from "../assets/Opay.png";
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowsSpin } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { MdLockOutline } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import BackButton from "../componets/BackButton";


function LinkBank() {
  const Data = [
    {
      title: "256-bit Encryption",
      paragraph:
        "Military-grades AES encryption ensure your data remains private and unreadable to third parties.",
      icon: MdOutlineLock,
    },
    {
      title: "Privacy Focused",
      paragraph:
        "We never store your login credentials. Connections are established via secure OAuth tokens.",
      icon: BsShieldLock,
    },
    {
      title: "Read-Only Accessed",
      paragraph:
        "We only sync transaction data to help you save. We cannot move funds or make changes to your bank.",
      icon: IoMdEyeOff,
    },
  ];

  const BankData = [
    {
      image: First,
      bankname: "First Bank",
    },
    {
      image: Gtb,
      bankname: "GTB Bank",
    },
    {
      image: Union,
      bankname: "Union Bank",
    },
    {
      image: Opay,
      bankname: "Opay",
    },
  ];
  return (
    <>
      <MainLayout>
        <div className="flex justify-end  "><BackButton/></div>
        <div className="md:flex justify-center hidden ">
          <div className="flex items-center  bg-[#0b6e4f] w-55 gap-2  px-2 text-[#98edc6] rounded-2xl py-1 mt-5 ">
            <LuShieldCheck />
            <p>Secure Bank Integration </p>
          </div>
        </div>
        <div className=" block md:hidden">
          <div className="bg-[#b0f5d4] rounded-2xl mt-5">
            <h1 className="text-[#186a50] text-[22px] p-2 font-semibold">
              Link your bank
            </h1>
            <p className="text-[#7d9488] w-90 px-2 pb-3">
              Connect your accounts to automatically track your savings progress
              and analyze spending habits securely.
            </p>
          </div>
        </div>

        <div className=" hidden md:block">
          <h1 className="text-[30px] text-[#303532] flex justify-center">
            Link your primary savings account
          </h1>

          <div className="flex justify-center items-center w-full pt-2 ">
            <p className="text-[#7d9488] w-120 text-center leading-tight ">
              Connect your accounts to automatically track your savings progress
              and analyze spending habits securely
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="text-[#18644d] flex font-semibold  bg-[#f1f5f0] md:hidden rounded-2xl w-61 p-2 mt-6 shadow items-center gap-1">
            <MdLockOutline /> <p>Secure 256-bit encryption</p>
          </div>
        </div>
        <div className=" hidden md:flex gap-5 justify-center mt-10">
          {Data.map((data) => (
            <EncryptData
              key={data.title}
              title={data.title}
              paragraph={data.paragraph}
              icon={data.icon}
            />
          ))}
        </div>

        <div className=" grid gap-4  grid-cols-2 md:flex md:gap-8 justify-center mt-12">
          {BankData.map((data) => (
            <BankCard
              key={data.bankname}
              bankName={data.bankname}
              image={data.image}
            />
          ))}
        </div>
        <div className=" flex gap-8 md:mt-10 mt-5 md:justify-end justify-center md:mr-16">
          <div className="hidden md:block">
            <BankConnectCard
              icon={IoSearchSharp}
              header="Search all banks"
              classname="bg-white text-[#00543b] border-dotted border-3"
            />
          </div>
          <div className="">
            <BankConnectCard
              icon={FiPlusCircle}
              header="Connect Another Bank"
              classname="bg-[#00543b] text-white max-sm:border-dotted max-sm:bg-white max-sm:text-[#5c615d] max-sm:border-4  border-2"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center flex-col text-center mb-15">
          <div className="bg-white p-5 border border-[#bbf1d6] rounded-2xl mt-8  shadow">
            <div className="flex justify-center">
              <div className=" bg-[#00543b] w-12 h-12 rounded-full flex items-center justify-center text-white">
                <FaArrowsSpin />
              </div>
            </div>
            <div className="">
              <h1 className="text-[20px] ">Ready to Connect</h1>
              <p className="w-65 text-[#5c615d]">
                Click below to open the secure Plaid verification window. This
                will open in a new, encrypted layer.
              </p>
              <button className="mt-2 bg-[#00543b] w-full flex items-center justify-center gap-1 rounded-xl py-2 text-white">
                <SlEnergy />
                Connect Account
              </button>
              <div className="flex items-center justify-center pt-3 text-[#5c615d] text-[14px] ">
                <MdLockOutline /> <p>Secure 256-bit encryption</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:hidden flex gap-5 justify-center mt-5 mb-20">
          <EncryptData
            title={Data[1].title}
            paragraph={Data[1].paragraph}
            icon={Data[1].icon}
          />
        </div>
      </MainLayout>
    </>
  );
}

export default LinkBank;
