import { TbPigFilled } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { BsFileEarmarkMedicalFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import type { IconType } from "react-icons";
type NavItem = {
  label: string;
  path: string;
  icon: IconType;
};

export const NavItems: NavItem[] = [
  { label: "Home", path: "/", icon: IoMdHome },
  { label: "Plans", path: "/plans", icon: TbPigFilled },
  { label: "Activity", path: "/activity", icon: BsFileEarmarkMedicalFill },
  { label: "Profile", path: "/profile", icon: FaUser },
];
