import { PRODUCT } from "@/lib/apiRoutes";
import instance, { setAxiosHeader } from "@/lib/axiosInstance";

const getFeaturedProducts = async () => {
  setAxiosHeader();
  const response = await instance.get(PRODUCT.FEATURED);
  return response.data;
};

const getProducts = async (categoryId = null) => {
  setAxiosHeader();
  const response = await instance.get(PRODUCT.FETCH, {
    params: {
      categoryId: categoryId,
    },
  });
  return response.data;
};

const getProduct = async (productId) => {
  setAxiosHeader();
  const response = await instance.get(PRODUCT.DETAIL(productId));
  return response.data;
};

export { getFeaturedProducts, getProducts, getProduct };
