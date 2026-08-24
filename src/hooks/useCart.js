import {
  addToCartThunk,
  decrementQuantityThunk,
  fetchCartItemsThunk,
  incrementQuantityThunk,
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

  const handleIncrement = async (cartItemId) => {
    await dispatch(incrementQuantityThunk(cartItemId));
  };

  const handleDecrement = async (cartItemId) => {
    await dispatch(decrementQuantityThunk(cartItemId));
  };

  const handleRemove = async (cartItemId) => {
    await dispatch(removeFromCartThunk(cartItemId));
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
