import { getProducts } from "@/services/productService";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { toast } from "sonner";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get("category");
  const search = searchParams.get("search");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts(categoryId, search);
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
  }, [categoryId, search]);

  return {
    products,
    categoryId,
  };
};

export default useProducts;
