import SeconNav from "../componets/SeconNav";
import Screen from "../assets/screen.png";
import { FcGoogle } from "react-icons/fc";
import { GlassCard } from "react-glass-ui";
import { IoArrowBack } from "react-icons/io5";
import { useState } from "react";
import Conatiner from "../assets/Container.png";
import { Link, useNavigate } from "react-router-dom";
function SignIn() {
  const [step, setStep] = useState<number>(1);
  const [email, setEmail] = useState<string>("");
  const Navigate = useNavigate();
  const HandleSubmit = () => {
    Navigate("/");
  };
  return (
    <>
      <div className="md:flex ">
        <div className="md:w-[45%]">
          <div className="flex justify-center items-center md:px-15 px-5">
            <div className="  ">
              <div className="-ml-10 md:block hidden">
                <SeconNav classname="text-[#286f59]" />
              </div>
              <div className=" block md:hidden">
                <h1 className="text-[30px]  pt-3 px-5 flex justify-center text-[#00543b] font-extrabold">
                  MySaveMate
                </h1>
                <p className="text-[20px] text-[#3F4943] max-sm:pb-5 flex justify-center md:hidden">
                  FINANCIAL STEWARDSHIP
                </p>
              </div>
              <div className="max-sm:bg-white max-sm:px-3 max-sm:py-5  max-sm:rounded-xl max-sm:shadow">
                <div className="md:mt-10">
                  <h1 className="text-[22px] font-semibold">Welcome back</h1>
                  <p className="md:block hidden w-[80%] pt-3 text-[18px] text-[#5c615d]">
                    Please enter your details to access your savings dashboard.
                  </p>
                  <p className="block md:hidden text-[#3F4943] text-[18px]">
                    Please enter your details to continue
                  </p>
                </div>
                <div className=" mt-5 md:block hidden">
                  <button className=" cursor-pointer flex justify-center gap-2 items-center text-[18px] text-[#444744] bg-white w-full rounded-xl border border-[#d4dcd7] py-2 font-semibold">
                    <FcGoogle size={20} /> Continue with Google
                  </button>
                </div>

                <div className="mt-5 hidden md:flex gap-2 items-center text-[#5c615d] text-[18px]">
                  <div className="border-t-2 border-[#d4dcd7] w-[46%]"></div>
                  <p>or</p>
                  <div className="border-t-2 border-[#d4dcd7] w-[46%]"></div>
                </div>

                <div className="mt-5 text-[#9aa19b] flex flex-col">
                  {step === 1 && (
                    <>
                      <label htmlFor="" className="pb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. Stewardship@mysavemate.com"
                        className=" py-3 outline-[#d4dcd7] placeholder:text-[#5c615d] bg-white rounded-xl px-2 shadow "
                      />
                      <button
                        onClick={() => setStep(2)}
                        className="text-white bg-[#00543b] py-3 font-semibold rounded-xl  mt-5 cursor-pointer"
                      >
                        Continue
                      </button>

                      <div className="flex justify-center md:pt-3 pt-5">
                        <p className="text-[#4b544e]">
                          Don't have an account?{" "}
                          <Link to="/signUp" className="text-[#216a54] font-semibold">
                            sign up
                          </Link>
                        </p>
                      </div>
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <p className="text-sm text-[#00543b] font-semibold mb-3">
                        {email}
                      </p>
                      <label htmlFor="" className="pb-1">
                        Password
                      </label>
                      <input
                        type="password"
                        placeholder="Enter your password"
                        className=" py-3 outline-[#d4dcd7] placeholder:text-[#5c615d] bg-white rounded-xl px-2 shadow "
                      />
                      <button onClick={HandleSubmit}  className="text-white cursor-pointer bg-[#00543b] py-3 font-semibold rounded-xl  mt-3">
                        Sign in
                      </button>
                      <div className="flex  justify-between mt-2 ">
                        <button className="text-red-400">
                          <a href="">Forgotten Password?</a>
                        </button>
                        <button
                          onClick={() => setStep(1)}
                          className="border hover:bg-[#00543b] hover:text-white rounded-xl px-2 font-semibold flex gap-1 items-center cursor-pointer "
                        >
                          <IoArrowBack />
                          Back
                        </button>
                      </div>
                    </>
                  )}
                </div>
                <div className="mt-5 md:hidden flex gap-2 items-center text-[#5c615d] text-[18px]">
                  <div className="border-t-2 border-[#d4dcd7] w-[46%]"></div>
                  <p>or</p>
                  <div className="border-t-2 border-[#d4dcd7] w-[46%]"></div>
                </div>
                <div className=" mt-5 md:hidden block">
                  <button className="flex justify-center gap-2 items-center text-[18px] text-[#444744] bg-white w-full rounded-xl border border-[#d4dcd7] py-2 font-semibold">
                    <FcGoogle size={20} /> Continue with Google
                  </button>
                </div>
              </div>
              <div className="hidden md:flex justify-between mt-19 text-[#828c85] font-semibold">
                <p>
                  <a href="">Privacy Policy</a>
                </p>
                <p>
                  <a href="">Terms of Service</a>
                </p>
              </div>
              <div className=" md:hidden mt-5">
                <img src={Conatiner} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[55%] hidden md:block">
          <div
            className=" h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${Screen})` }}
          >
            <div className="flex justify-center   h-screen items-center px-23 ">
              <div className="mt-10">
                {" "}
                <GlassCard
                  blur={4}
                  distortion={40}
                  flexibility={0}
                  borderColor="#ffffff"
                  borderSize={1}
                  borderRadius={20}
                  borderOpacity={0.4}
                  backgroundColor="#efebeb"
                  backgroundOpacity={0.7000000000000001}
                  innerLightColor="#ffffff"
                  innerLightSpread={4}
                  innerLightBlur={33}
                  innerLightOpacity={0}
                  outerLightColor="#ffffff"
                  outerLightSpread={0}
                  outerLightBlur={0}
                  outerLightOpacity={0}
                  color="#ffffff"
                  chromaticAberration={0}
                  saturation={115}
                  brightness={75}
                >
                  <h1 className="pl-3 text-[35px]  text-black font-bold leading-tight w-[90%]">
                    The discipline of quiet growth.
                  </h1>
                  <p className=" pl-3 text-[17px] pt-3 text-[#0e5d45]">
                    Join over 50,000 users practicing the art of financial
                    stewardship. Modern savings tools designed for a focused,
                    high-impact life.
                  </p>
                  <div className="pl-3 flex gap-3 mt-5 text-[#0e5d45] font-bold">
                    <div className="flex flex-col">
                      <p>$4.2B</p>
                      <p>MANAGED</p>
                    </div>
                    <div className="border-l"></div>
                    <div className="flex flex-col">
                      <p>99.9%</p>
                      <p>UPTIME</p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
