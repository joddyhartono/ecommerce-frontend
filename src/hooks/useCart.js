import {
  addToCartThunk,
  fetchCartItemsThunk,
  removeFromCartThunk,
} from "@/store/cartThunk";
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

  const handleAddToCart = async (productId) => {
    await dispatch(addToCartThunk(productId));
  };

  const handleIncrement = async () => {
    await dispatch(incrementQuantityThunk());
  };

  const handleDecrement = async () => {
    await dispatch(decrementQuantityThunk());
  };

  const handleRemove = async (productId) => {
    await dispatch(removeFromCartThunk(productId));
  };

  return {
    cartItems,
    fetchCartItems,
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    handleRemove,
  };
};

export default useCart;
