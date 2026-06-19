import { useState } from "react";
import type { IconType } from "react-icons";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
type InputProps = {
  label: string;
  icon: IconType;
  placeholder: string;
  secondIcon?: IconType;
  type: string;
  name: string;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string;
  touched?: boolean;
};

function Input({
  label,
  placeholder,
  icon: Icon,

  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  touched,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <>
      <div className=" relative">
        <div className=" absolute top-9 left-2 text-[#3F4943]">
          <Icon size={16} />
        </div>
        <div className="text-[12px] pb-1 text-[#3F4943]">{label}</div>

        <input
          type={inputType}
          placeholder={placeholder}
          name={name}
          onBlur={onBlur}
          value={value}
          onChange={onChange}
          className="pl-8 md:pr-46 pr-36 py-2 bg-[#dfe6dd] focus:border-none outline-none placeholder:text-[14px] shadow"
        />
        {error && touched && <p className="text-red-500 text-xs">{error}</p>}

        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-[#3F4943] absolute top-9 right-2 "
          >
            {showPassword ? <IoEyeOffSharp size={16} /> : <IoEyeSharp size={16} />}
          </button>
        )}
      </div>
    </>
  );
}

export default Input;
