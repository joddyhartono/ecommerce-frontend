import { deleteProduct, getProducts } from "@/services/sellerService";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useSellerProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

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

  const handleDelete = async (productId) => {
    try {
      await deleteProduct(productId);
      toast.success("Product successfully deleted!");
      setProducts((prev) => prev.filter((p) => p.id !== productId));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data);
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return {
    products,
    handleDelete,
  };
};

export default useSellerProducts;
