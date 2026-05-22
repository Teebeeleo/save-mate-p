import SeconNav from "../componets/SeconNav";
import Icon from "../assets/Icon.png";
import Input from "../componets/Input";
import { FaRegUser } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { MdLockOutline } from "react-icons/md";
import { MdCardGiftcard } from "react-icons/md";
import { MdOutlineCopyright } from "react-icons/md";
import Visual from "../assets/Visual.png";
import { Link } from "react-router-dom";
function SignUp() {
  const Field = [
    {
      label: "Full Name",
      Icon: FaRegUser,
      placeholder: "John doe",
      name: "name",
      type: "text",
    },
    {
      label: "Email Address",
      Icon: MdMailOutline,
      placeholder: "TeamSavemate@yahoo.com",
      name: "email",
      type: "email",
    },
    {
      label: "Password",
      Icon: MdLockOutline,
      placeholder: "********",
      name: "password",
      secondIcon: IoEyeSharp,
      type: "password",
    },
    {
      label: "Referral Code(optional)",
      Icon: MdCardGiftcard,
      placeholder: "Buggy 2026",
      name: "referral",
      type: "text",
    },
  ];
  return (
    <>
      <div className=" md:flex md:bg-white">
        <div className="w-[50%] md:block hidden ">
          <div className="  bg-[#98b9af]  ">
            <SeconNav classname="text-white " />
            <div className="-mt-15">
              <img src={Icon} alt="" className="w-120 h-158 object-cover" />
              <div className="absolute top-53 left-15 w-[30%]">
                <div className=" text-white  bg-white/25 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.15)] py-4 px-3 rounded-xl">
                  <h2 className="text-[30px] leading-8">
                    Secure your financial future today.
                  </h2>
                  <p className=" leading-5 pt-4 text-[14px]">
                    Join over 2.4 million stewards who trust MySaveMate to guid
                    their savings journey with disciplined, automated growth
                    strategies.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="text-[12px] bg-white/10 w-[48%] text-white mt-2 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl px-2 py-4">
                    <p>Active stewardship</p>
                    <p className=" font-semibold">$12.4b+</p>
                  </div>
                  <div className="text-[12px] bg-white/10 w-[48%] text-white mt-2 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl px-4 py-4">
                    <p>Growth Rate</p>
                    <p className=" font-semibold">+18.2%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" block md:hidden">
          <h1 className="text-[30px] pb-7 pt-3 px-5 flex justify-center text-[#00543b] font-extrabold">
            {" "}
            MySaveMate
          </h1>
        </div>
        <div className="md:w-[50%]  ">
          <div className=" ">
            {" "}
            <div className="  flex justify-center mt-5 max-sm:-mt-2 max-sm:mx-4 ">
              <div className="">
                <h1 className="text-[25px] font-semibold max-sm:flex max-sm:justify-center">
                  Create your account
                </h1>
                <p className="text-[14px] text-[#3F4943] max-sm:flex max-sm:justify-center">
                  Start your journey toward financial freedom.
                </p>

                <div>
                  {Field.map((field) => (
                    <div className=" pt-3">
                      <Input
                        key={field.name}
                        label={field.label}
                        placeholder={field.placeholder}
                        icon={field.Icon}
                        secondIcon={field.secondIcon}
                        name={field.name}
                        type={field.type}
                      />
                    </div>
                  ))}
                </div>

                <div className="md:pt-2 pt-4">
                  <label htmlFor="agree" className="flex gap-1">
                    <input
                      id="agree"
                      type="checkbox"
                      className=" accent-[#00543B] hover:accent-[#00543B]"
                    />
                    <span className="text-[14px] md:text-[12px]">
                      I agree to the
                      <a href="" className="text-[#00543B]">
                        Terms of Service and Privacy Policy.
                      </a>
                    </span>
                  </label>
                </div>
                <div className="md:mt-5 mt-4 ">
                  <button className=" cursor-pointer bg-[#00543B] text-white px-3 py-3 w-full rounded-xl">
                    Create Account{" "}
                  </button>
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className=" hidden md:block border-t w-23 border-[#d8e7e0]"></div>
                  <p className="max-sm:flex max-sm:justify-center max-sm:w-full">
                    Already have an account?
                  </p>
                  <div className="hidden md:block border-t w-23 border-[#d8e7e0]"></div>
                </div>
                <div className="flex justify-center pt-4 text-[#2a705b] font-bold">
                  <p>
                    <Link to="/signIn">Log in to MySaveMate</Link>
                  </p>
                </div>
                <div className=" md:hidden ml-1">
                  <img src={Visual} alt="" />
                </div>

                <div className="md:mt-15 max-sm:mt-4 text-[#6F7A73] text-[15px] md:text-[12px]">
                  <div className="flex justify-between ">
                    <div className="flex items-center">
                      <MdOutlineCopyright /> <p>2026 My SaveMate</p>
                    </div>
                    <div className="flex gap-3">
                      <p>Help</p>
                      <p>Legal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
