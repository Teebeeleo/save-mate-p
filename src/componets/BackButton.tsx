import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
function BackButton() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="">
        <button className="flex items-center font-semibold border rounded-xl p-1 justify-center text-[14px] cursor-pointer text-white bg-[#076d4e]" onClick={()=>Navigate(-1)}>
          <MdOutlineKeyboardBackspace size={16}/>
          Back
        </button>
      </div>
    </>
  );
}

export default BackButton;
