import type { FocusEventHandler } from "react";
import type { IconType } from "react-icons";

type InputProps = {
  label: string;
  icon: IconType;
  placeholder: string;
  secondIcon?: IconType;
  type: string;
  name: string;
  value: string;
  onChange?:React.ChangeEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
  error?:string
  touched?:boolean
};

function Input({
  label,
  placeholder,
  icon: Icon,
  secondIcon: Iconn,
  type,
  name,value,onChange,onBlur,error,touched
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
          onBlur={onBlur}
          
          value={value}
          onChange={onChange}
          className="pl-8 md:pr-46 pr-36 py-2 bg-[#dfe6dd] focus:border-none outline-none placeholder:text-[14px] shadow"
        />
        {error && touched && (
          <p className="text-red-500 text-xs">{error}</p>
        )}

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
