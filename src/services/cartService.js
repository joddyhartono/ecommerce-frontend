import { CART } from "@/lib/apiRoutes";
import instance, { setAxiosHeader } from "@/lib/axiosInstance";

const getCartItems = async () => {
  setAxiosHeader();
  const response = await instance.get(CART.FETCH);
  return response.data;
};

const addToCart = async (productId) => {
  setAxiosHeader();
  const response = await instance.post(CART.ADD(productId));
  return response.data;
};

export { getCartItems, addToCart };
