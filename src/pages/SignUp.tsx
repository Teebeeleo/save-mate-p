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
import axios from "axios";

import { Formik } from "formik";
import * as Yup from "yup";

function SignUp() {
  const InitialValues = {
    name: "",
    email: "",
    password: "",
    referral: "",
    agree: false,
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string().required("Username is required"),
    // email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    referral: Yup.string(),
    agree: Yup.boolean().oneOf([true], "You must accept terms and conditions"),
  });
  const Field = [
    {
      label: "Full Name",
      Icon: FaRegUser,
      placeholder: "John doe",
      name: "name",
      type: "text",
    },
    {
      label: "Username",
      Icon: MdMailOutline,
      placeholder: "TeamSavemate@yahoo.com",
      name: "email",
      type: "text",
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

                <div className="">
                  <Formik
                    initialValues={InitialValues}
                    validationSchema={validationSchema}
                    onSubmit={async(values,{setSubmitting})=>{
                      try {
                        const response = await axios.post(
                          "https://dummyjson.com/auth/login",
                          {
                            username:values.email,
                            password:values.password
                          }
                        )
                        console.log(response.data)
                        alert("login successful")
                        
                      } catch (error) {
                        console.log("Invalid username or password")
                        
                      } finally {
                        setSubmitting(false)
                      }
                    }}
                  >
                    {(formik) => (
                      <form onSubmit={formik.handleSubmit}>
                        {Field.map((filed) => (
                          <div key={filed.name}>
                            <Input
                              name={filed.name}
                              label={filed.label}
                              placeholder={filed.placeholder}
                              secondIcon={filed.secondIcon}
                              icon={filed.Icon}
                              type={filed.type}
                              value={
                                formik.values[
                                  filed.name as keyof typeof InitialValues
                                ] as string
                              }
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={
                                formik.errors[
                                  filed.name as keyof typeof InitialValues
                                ] || ""
                              }
                              touched={
                                formik.touched[
                                  filed.name as keyof typeof InitialValues
                                ]
                              }
                            />
                          </div>
                        ))}

                        <div className="md:pt-2 pt-4">
                          <label htmlFor="agree" className="flex gap-1">
                            <input
                              name="agree"
                              checked={formik.values.agree}
                              id="agree"
                              onChange={formik.handleChange}
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
                          {formik.touched.agree && formik.errors.agree && (
                            <p className="text-red-500 text-xs mt-1">
                              {formik.errors.agree}
                            </p>
                          )}
                        </div>
                        <div className="md:mt-5 mt-4 ">
                          <button
                          disabled={formik.isSubmitting}
                            type="submit"
                            className=" cursor-pointer bg-[#00543B] text-white px-3 py-3 w-full rounded-xl"
                          >
                            {formik.isSubmitting ? "creating..." : "Create Account"}
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
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
