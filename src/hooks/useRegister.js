import { useMutation } from "react-query";
import { registerFunction } from "../data/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useRegister() {
  const navigate = useNavigate();
  const {
    mutate: mutateUserRegister,
    error,
    isLoading: isCreating,
  } = useMutation({
    mutationFn: registerFunction,
    onSuccess: () => {
      toast.success("You Are Registered Successfuly");
      navigate("/login");
    },
  });

  return { isCreating, error, mutateUserRegister };
}
