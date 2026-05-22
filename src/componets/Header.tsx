import { NavLink } from "react-router-dom";
import { GoBell } from "react-icons/go";
import Userprofilephoto from "../assets/Userprofilephoto.png";
import Logop from "../assets/Logop.png";
import { NavItems } from "./navItem";

function Header() {
  return (
    <>
      <div className=" bg-white pb-2 shadow">
        <nav className="flex items-center justify-between md:mx-10  mx-4 pt-2 ">
          <div className=" flex items-center gap-2 ">
            <img
              src={Userprofilephoto}
              alt="profilepicture"
              className=" rounded-full w-10 h-10"
            />
            <h3 className=" text-[#064E3B] font-bold text-[17px]">
              MySaveMate
            </h3>
          </div>
          <div className="md:flex gap-9 hidden  ">
            {NavItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? "text-[#0b6e4f] font-bold border-b-2 border-[#0b6e4f] "
                      : "text-[#6a798f] font-semibold"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className=" max-sm:text-[#0b6e4f] text-[20px] text-[#6a798f]">
              <GoBell />
            </span>
            <span className="hidden md:block">
              <img
                src={Logop}
                alt="logop rofile"
                className=" border-[#aacbc1] rounded-full border-2"
              />
            </span>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
