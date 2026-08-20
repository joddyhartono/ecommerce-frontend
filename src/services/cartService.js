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

const removeFromCart = async (cartItemId) => {
  setAxiosHeader();
  const response = await instance.delete(CART.REMOVE(cartItemId));
  return response.data;
};

const incrementQuantity = async (cartItemId) => {
  setAxiosHeader();
  const response = await instance.put(CART.INCREMENT(cartItemId));
  return response.data;
};

const decrementQuantity = async (cartItemId) => {
  setAxiosHeader();
  const response = await instance.put(CART.DECREMENT(cartItemId));
  return response.data;
};

export {
  getCartItems,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
};
