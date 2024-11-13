import { PiSmileySadBold } from "react-icons/pi";

export default function NoDataToDisplay({ text }) {
  return (
    <div className="flex justify-center items-center  flex-col gap-2 mt-[80px] w-[100%]">
      <PiSmileySadBold size={150} className=" text-red-500" />
      <h1 className="md:text-[50px] text-[20px] font-semibold text-gray-600 text-center">
        {text}
      </h1>
    </div>
  );
}
