import { PRODUCT } from "@/lib/apiRoutes";
import instance, { setAxiosHeader } from "@/lib/axiosInstance";

const getFeaturedProducts = async () => {
  setAxiosHeader();
  const response = await instance.get(PRODUCT.FEATURED);
  return response.data;
};

export { getFeaturedProducts };
