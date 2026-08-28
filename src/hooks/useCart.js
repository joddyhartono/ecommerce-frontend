import {
  addToCartThunk,
  decrementQuantityThunk,
  fetchCartThunk,
  incrementQuantityThunk,
  removeFromCartThunk,
} from "@/store/cartThunk";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useCart = () => {
  const dispatch = useDispatch();
  const { id, items } = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    await dispatch(fetchCartThunk());
  };

  const handleAddToCart = async (productId) => {
    await dispatch(addToCartThunk(productId));
  };

  const handleIncrement = async (itemId) => {
    await dispatch(incrementQuantityThunk(itemId));
  };

  const handleDecrement = async (itemId) => {
    await dispatch(decrementQuantityThunk(itemId));
  };

  const handleRemove = async (itemId) => {
    await dispatch(removeFromCartThunk(itemId));
  };

  return {
    id,
    items,
    fetchCart,
    handleAddToCart,
    handleIncrement,
    handleDecrement,
    handleRemove,
  };
};

export default useCart;
