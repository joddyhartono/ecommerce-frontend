import { getProducts } from "@/services/sellerService";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useSellerProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        if (data) {
          setProducts(data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data);
        } else {
          toast.error("Something went wrong");
        }
      }
    };
    fetchProducts();
  }, []);

  return {
    products,
  };
};

export default useSellerProducts;
