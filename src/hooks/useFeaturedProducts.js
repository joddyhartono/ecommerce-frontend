import { useEffect, useState } from "react";
import { getFeaturedProducts } from "@/services/productService";
import { toast } from "sonner";
import axios from "axios";

const useFeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const data = await getFeaturedProducts();
        if (data) {
          setFeaturedProducts(data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data);
        } else {
          toast.error("Something went wrong");
        }
      }
    };
    fetchFeaturedProducts();
  }, []);

  return {
    featuredProducts,
  };
};

export default useFeaturedProducts;
