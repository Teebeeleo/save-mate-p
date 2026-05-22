import type { IconType } from "react-icons";

type BankCardProps = {
  image: string;
  bankName: string;
};

function BankCard({ image, bankName }: BankCardProps) {
  return (
    <div className="flex items-center ">
      <div className="bg-white border-2 border-[#d7ded7] rounded-xl md:w-59.5 w-40 h-40 flex items-center flex-col gap-3 s">
        <div className="bg-[#f8fafc] p-4 text-[#d8e0e9] w-19 mt-5 ">
          <img src={image} alt={bankName} className=" rounded-xl" />
        </div>
        <div className="text-[#5a5e5b] text-[20px] font-semibold">
          {bankName}
        </div>
      </div>
    </div>
  );
}

type BankConnectCardProps = {
  icon: IconType;
  header: string;
  classname?: string;
};

export function BankConnectCard({
  icon: Iconz,
  header,
  classname,
}: BankConnectCardProps) {
  return (
    <>
      <div>
        <div className="flex items-center ">
          <div
            className={`border-[#d7ded7] rounded-xl w-59.5 md:h-25 max-sm:py-3 max-sm:w-84 flex items-center max-sm:justify-center max-sm:gap-3 text-center md:flex-col ${classname}`}
          >
            <div className=" md:mt-5  ">
              <span className="mt-2">
                <Iconz size={25} />
              </span>
            </div>
            <div className={` text-[13px] font-semibold  `}>{header}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BankCard;
