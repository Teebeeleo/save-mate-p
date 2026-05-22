
import type { IconType } from "react-icons";
import { Link } from "react-router-dom";
type ButtonProps = {
  label: string;
  icon: IconType;
  classname?: string;
  link?: string;
};

function Button({ icon: Icon, label, classname, link }: ButtonProps) {
  return (
    <div>
      <Link to={link || "#"}>
        <button
          className={` cursor-pointer flex items-center md:flex-row flex-col justify-center gap-2 border md:w-58 w-25 py-4 rounded-xl hover:bg-[#00543b] hover:text-white  ${classname}`}
        >
          <Icon size={20} /> <span>{label}</span>
        </button>
      </Link>
    </div>
  );
}

export default Button;
