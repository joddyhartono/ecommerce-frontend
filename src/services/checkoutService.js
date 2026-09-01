import { CHECKOUT } from "@/lib/apiRoutes";
import instance, { setAxiosHeader } from "@/lib/axiosInstance";

const checkout = async (cartId, address) => {
  setAxiosHeader();
  const response = await instance.post(CHECKOUT, {
    cartId: cartId,
    address: address,
  });
  return response.data;
};

export { checkout };
