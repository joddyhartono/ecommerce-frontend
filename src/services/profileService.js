import { PROFILE } from "@/lib/apiRoutes";
import instance from "@/lib/axiosInstance";

const updateProfile = async (payload) => {
  const response = await instance.put(PROFILE.UPDATE, payload);
  return response.data;
};

export { updateProfile };
