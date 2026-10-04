import { loginThunk, openShopThunk, registerThunk } from "@/store/authThunk";
import { logout as logoutAction } from "@/store/authSlice";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();

  const login = async (form) => {
    await dispatch(loginThunk(form)).unwrap();
  };

  const logout = async () => {
    await dispatch(logoutAction());
  };

  const register = async (form) => {
    await dispatch(registerThunk(form)).unwrap();
  };

  const openShop = async (form) => {
    await dispatch(openShopThunk(form)).unwrap();
  };

  return {
    login,
    logout,
    register,
    openShop,
  };
};

export default useAuth;
