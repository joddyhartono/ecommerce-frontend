import { fetchCartItemsThunk } from "@/store/cartThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    await dispatch(fetchCartItemsThunk());
  };

  return {
    fetchCartItems,
    cartItems,
  };
};

export default useCart;
