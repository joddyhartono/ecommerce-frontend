import { checkout } from "@/services/checkoutService";
import axios from "axios";

const useCheckout = () => {
  const handleCheckout = async (cart) => {
    try {
      const data = await checkout(cart);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return {
    handleCheckout,
  };
};

export default useCheckout;
