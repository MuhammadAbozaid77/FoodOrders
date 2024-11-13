//
export default function OrderDetailsRight({ data }) {
  return (
    <>
      <div className="w-[100%] sm:p-5 p-2 border shadow-lg">
        {data?.map((item, index) => (
          <div
            className="flex justify-start sm:gap-5 gap-2 items-center md:flex-row  mb-[10px]"
            key={index}
          >
            <div className="w-[60px] h-[60px] ">
              <img
                src={item?.pic}
                alt=""
                className="rounded-[10px] h-[100%] border p-1 shadow"
              />
            </div>
            <div className="w-[60px] h-[60px]  border flex justify-center items-center text-[30px] rounded bg-green-500 text-white">
              {item?.quantity}
            </div>
            <div>
              <h1 className="sm:text-[25px] text-[18px] text-gray-500 capitalize">
                {item?.name}
              </h1>
              <h1 className="text-[20px] text-red-500"> $ {item?.price} </h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
