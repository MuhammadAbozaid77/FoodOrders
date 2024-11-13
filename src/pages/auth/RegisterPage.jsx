import { useForm } from "react-hook-form";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import useRegister from "../../hooks/useRegister";
import SpinnerLoading from "../../components/ui/SpinnerLoading";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onSubmit" });

  const { isCreating, error, mutateUserRegister } = useRegister();

  const handleRegister = (registerInputs) => {
    mutateUserRegister(registerInputs);
  };

  return (
    <div className="flex justify-start items-center h-[100vh] flex-col md:p-[50px] p-[20px]">
      <div className="flex justify-start items-center w-[100%]">
        <NavLink
          to={"/"}
          className="border p-2 flex justify-center items-center rounded-full bg-red-500 text-white hover:bg-red-600 duration-150"
          disabled={true}
        >
          <IoIosArrowBack size={25} />
        </NavLink>
      </div>

      <div className="relative md:w-[400px] w-[100%] py-[50px] bg-white p-5 border shadow-lg mt-[20px] rounded-lg border-gray-300 overflow-hidden">
        {isCreating && (
          <div className="absolute inset-0 bg-white flex justify-center items-center">
            <SpinnerLoading />
          </div>
        )}
        <div className="flex justify-center items-center">
          {error && (
            <span className="text-white bg-red-500 p-2 rounded text-[12px]">
              {error?.message}
            </span>
          )}
        </div>

        <div className="mt-5 flex justify-center items-center flex-col">
          <span className="text-gray-600">
            <FaUsers size={50} />
          </span>
          <span className="text-center font-semibold sm:text-[25px] text-gray-600">
            Register
          </span>
        </div>

        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="p-3 mt-3">
            <div className="flex flex-col mb-5">
              <label
                htmlFor=""
                className="text-[14px] font-semibold mb-1 text-gray-700"
              >
                Email
              </label>
              <input
                {...register("userEmail", {
                  required: "This Field Required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).+@(.*\.)?(co|com)$/,
                    message: "Invalid Email, Try A Good One",
                  },
                })}
                type="email"
                className="p-2 text-[14px]  rounded shadow text-gray-600 border-gray-400 border"
                placeholder="Enter Your Email"
              />
              <span className="text-red-500 text-[12px]">
                {errors?.userEmail?.message}
              </span>
            </div>
            <div className="flex flex-col mb-5">
              <label
                htmlFor=""
                className="text-[14px] font-semibold mb-1 text-gray-700"
              >
                Password
              </label>
              <input
                {...register("userPassword", {
                  required: "This Field Required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                    message:
                      "Invalid Passsword, Try A Good One With 1 Special Character, 1 Upper character, 1 Lower character",
                  },
                })}
                type="password"
                className="p-2 text-[14px] rounded shadow text-gray-600 border-gray-400 border"
                placeholder="Enter Your Password"
              />
              <span className="text-red-500 text-[12px] ">
                {errors?.userPassword?.message}
              </span>
            </div>
          </div>

          <div className="p-3 w-[100%] mt-3">
            <button
              type="submit"
              className="p-3 w-[100%] rounded bg-gray-500 hover:bg-gray-600 duration-150 shadow text-white text-[14px] font-semibold"
            >
              Submit Register
            </button>
          </div>
        </form>

        <div className="p-3 w-[100%] mt-3 flex justify-center items-center">
          <span className="text-[14px]   text-gray-500 ">
            You have An Account?
          </span>
          <NavLink
            to={"/login"}
            className="text-gray-800 mx-2 text-[14px] font-bold cursor-pointer"
          >
            Login Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}
