import { fetchCartItemsThunk } from "@/store/cartThunk";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });

  const fetchCartItems = async () => {
    await dispatch(fetchCartItemsThunk());
  };

  return {
    fetchCartItems,
    cartItems,
  };
};

export default useCart;
