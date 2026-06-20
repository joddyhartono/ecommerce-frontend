import categoriesThunk from "@/store/categoriesThunk";
import { useDispatch } from "react-redux";

const useCategories = () => {
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    await dispatch(categoriesThunk());
  };

  return {
    fetchCategories,
  };
};

export default useCategories;
