import { getProduct } from "@/services/productService";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";

const useProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProduct(id);
        if (data) {
          setProduct(data);
        }
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response?.data);
        } else {
          toast.error("Something went wrong");
        }
      }
    };
    fetchProduct();
  }, [id]);

  return {
    product,
  };
};

export default useProductDetail;
