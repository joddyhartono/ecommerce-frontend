import { CART } from "@/lib/apiRoutes";
import instance, { setAxiosHeader } from "@/lib/axiosInstance";

const getCartItems = async () => {
  setAxiosHeader();
  const response = await instance.get(CART.FETCH);
  return response.data;
};

export { getCartItems };
