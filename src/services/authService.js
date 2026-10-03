import { AUTH } from "@/lib/apiRoutes";
import instance from "@/lib/axiosInstance";

const loginUser = async (form) => {
  const response = await instance.post(AUTH.LOGIN, form);
  return response.data;
};

const registerUser = async (form) => {
  const response = await instance.post(AUTH.REGISTER, form);
  return response.data;
};

export { loginUser, registerUser };
