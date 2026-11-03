import { SELLER } from "@/lib/apiRoutes";
import instance, { setAxiosHeader } from "@/lib/axiosInstance";

const openShop = async (form) => {
  setAxiosHeader();
  const response = await instance.post(SELLER.OPEN, form);
  return response.data;
};

const getProducts = async () => {
  setAxiosHeader();
  const response = await instance.get(SELLER.FETCH);
  return response.data;
};

const deleteProduct = async (productId) => {
  setAxiosHeader();
  const response = await instance.delete(SELLER.DELETE(productId));
  return response.data;
};

const getProduct = async (productId) => {
  setAxiosHeader();
  const response = await instance.get(SELLER.DETAIL(productId));
  return response.data;
};

const editProduct = async (product) => {
  setAxiosHeader();
  const response = await instance.put(SELLER.UPDATE(product.id), product);
  return response.data;
};

export { openShop, getProducts, deleteProduct, getProduct, editProduct };
