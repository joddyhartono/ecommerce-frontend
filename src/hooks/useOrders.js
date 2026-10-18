import { getOrders } from "@/services/orderService";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getOrders();
        if (data) {
          setOrders(data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data);
        } else {
          toast.error("Something went wrong");
        }
      }
    };
    fetchOrders();
  }, []);

  return {
    orders,
  };
};

export default useOrders;
