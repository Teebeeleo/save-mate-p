import { NavItems } from "./navItem";
import { NavLink } from "react-router-dom";

function BottomNav() {
  return (
    <>
      <div className="flex items-center text-[#a9b5c6] justify-center font-semibold ">
        <div className=" md:hidden  fixed bottom-0 flex gap-11 bg-white px-10 py-3 rounded-tr-2xl rounded-tl-2xl items-center shadow-2xl">
          {NavItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                to={item.path}
                key={item.path}
                className={({ isActive }) =>
                  `flex items-center flex-col ${isActive ? "text-[#0b6e4f] font-bold" : "text-[#6a798f] font-semibold"} `
                }
              >
                <div className="text-[19px] ">
                  <Icon />
                </div>
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BottomNav;
