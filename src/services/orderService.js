import { ORDER } from "@/lib/apiRoutes";
import instance, { setAxiosHeader } from "@/lib/axiosInstance";

const getOrders = async () => {
  setAxiosHeader();
  const response = await instance.get(ORDER.FETCH);
  return response.data;
};

const getOrder = async (id) => {
  setAxiosHeader();
  const response = await instance.get(ORDER.DETAIL(id));
  return response.data;
};

export { getOrders, getOrder };
