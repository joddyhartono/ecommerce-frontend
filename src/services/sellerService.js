import { SELLER } from "@/lib/apiRoutes";
import instance from "@/lib/axiosInstance";

const openShop = async (form) => {
  const response = await instance.post(SELLER.OPEN, form);
  return response.data;
};

export { openShop };
