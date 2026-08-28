import { CHECKOUT } from "@/lib/apiRoutes";
import instance, { setAxiosHeader } from "@/lib/axiosInstance";

const checkout = async (cart) => {
  setAxiosHeader();
  const response = await instance.post(CHECKOUT, cart);
  return response.data;
};

export { checkout };
