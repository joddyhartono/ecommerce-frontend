import { editProduct, getProduct } from "@/services/sellerService";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";

const useSellerProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchProduct();
  }, [id]);

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

  const updateProduct = async (form) => {
    try {
      const data = await editProduct(form);
      if (data) {
        setProduct(data);
      }
      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      } else {
        toast.error("Something went wrong");
      }
      return false;
    }
  };

  return {
    product,
    updateProduct,
  };
};

export default useSellerProductDetail;
