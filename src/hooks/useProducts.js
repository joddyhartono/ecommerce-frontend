import { getProducts } from "@/services/productService";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { toast } from "sonner";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(categoryId);
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
  }, [categoryId]);

  return {
    products,
    categoryId,
  };
};

export default useProducts;
