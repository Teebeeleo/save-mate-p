import type { IconType } from "react-icons";

type InputProps = {
  label: string;
  icon: IconType;
  placeholder: string;
  secondIcon?: IconType;
  type: string;
  name: string;
};

function Input({
  label,
  placeholder,
  icon: Icon,
  secondIcon: Iconn,
  type,
  name,
}: InputProps) {
  return (
    <>
      <div className=" relative">
        <div className=" absolute top-9 left-2 text-[#3F4943]">
          <Icon size={16} />
        </div>
        <div className="text-[12px] pb-1 text-[#3F4943]">{label}</div>

        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="pl-8 md:pr-46 pr-36 py-2 bg-[#dfe6dd] focus:border-none outline-none placeholder:text-[14px] shadow"
        />

        {Iconn && (
          <div className="text-[#3F4943] absolute top-9 right-2 ">
            <Iconn size={16} />
          </div>
        )}
      </div>
    </>
  );
}

export default Input;
