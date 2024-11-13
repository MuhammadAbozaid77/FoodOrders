//
import { FaUserAlt } from "react-icons/fa";

export default function OrderDetailsLeft({
  total,
  userId,
  userLocation,
  userName,
}) {
  return (
    <>
      <div className="w-[100%] p-5">
        <div className="flex justify-center items-center mt-[50px] text-red-500 ">
          <FaUserAlt size={150} />
        </div>

        <div className="flex justify-start items-center mt-[50px]">
          <span className="md:text-[25px] text-[18px]  text-red-500 w-[180px] font-bold">
            Id:
          </span>
          <span className="text-center md:text-[30px] text-[20px]  text-gray-500">
            {userId}
          </span>
        </div>

        <div className="flex justify-start items-center mt-5">
          <span className="md:text-[25px] text-[18px]  text-red-500 w-[180px] font-bold">
            O-Name:
          </span>
          <span className="text-center md:text-[30px] text-[20px]  text-gray-500">
            {userName}
          </span>
        </div>

        <div className="flex justify-start items-center mt-5">
          <span className="md:text-[25px] text-[18px]  text-red-500 w-[180px] font-bold">
            O-Location:
          </span>
          <span className="text-center md:text-[30px] text-[20px]  text-gray-500">
            {userLocation}
          </span>
        </div>

        <div className="flex justify-start items-center mt-5">
          <span className="md:text-[25px] text-[18px]  text-red-500 w-[180px] font-bold">
            O-Total:
          </span>
          <span className="text-center md:text-[30px] text-[20px]  text-red-500 font-bold">
            $ {total}
          </span>
        </div>
      </div>
    </>
  );
}
