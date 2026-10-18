import { getOrder } from "@/services/orderService";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";

const useOrderDetail = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrder(id);
        if (data) {
          setOrder(data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data);
        } else {
          toast.error("Something went wrong");
        }
      }
    };
    fetchOrder();
  }, [id]);

  return {
    order,
  };
};

export default useOrderDetail;
