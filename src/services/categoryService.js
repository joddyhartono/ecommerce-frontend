import { CATEGORY } from "@/lib/apiRoutes";
import instance, { setAxiosHeader } from "@/lib/axiosInstance";

const getCategories = async () => {
  setAxiosHeader();
  const response = await instance.get(CATEGORY.FETCH);
  return response.data;
};

export { getCategories };
