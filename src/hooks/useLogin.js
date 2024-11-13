import { useMutation } from "react-query";
import { loginFunction } from "../data/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AppContextSlice } from "../context/AppContext";

export default function useLogin() {
  const navigate = useNavigate();

  const { setuserData } = useContext(AppContextSlice);

  const {
    mutate: mutateUserLogin,
    error,
    isLoading: isCreating,
  } = useMutation({
    mutationFn: loginFunction,
    onSuccess: (data) => {
      setuserData(data);
      localStorage.setItem("UserKey", "UserId");
      toast.success("You Are Loged Successfuly");
      navigate("/");
    },
  });

  return { isCreating, error, mutateUserLogin };
}
