import CartItemCard from "./CartItemCard";

const CartItemList = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
    </div>
  );
};

export default CartItemList;
