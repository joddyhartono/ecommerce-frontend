import { loginThunk } from "@/store/authThunk";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();

  const login = async (form) => {
    await dispatch(loginThunk(form)).unwrap();
  };

  return {
    login,
  };
};

export default useAuth;
