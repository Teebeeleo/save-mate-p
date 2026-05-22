import type { IconType } from "react-icons";

type DataProps = {
  icon: IconType;
  paragraph: string;
  title: string;
};

function EncryptData({ icon: Icon, paragraph, title }: DataProps) {
  return (
    <>
      <div className="flex gap-3 bg-[#ebf2ec] md:bg-white rounded-xl p-6 shadow">
        <span className="md:bg-[#e4ece9] max-sm:bg-white h-10 rounded-xl p-2">
          <Icon size={20} />
        </span>
        <div className="">
          <h1 className=" max-sm:font-bold max-sm:text-[#286f59]">{title}</h1>
          <p className="w-60 md:text-[#5c615d]  ">{paragraph}</p>
        </div>
      </div>
    </>
  );
}
export default EncryptData;
