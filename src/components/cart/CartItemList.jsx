import CartItemCard from "./CartItemCard";

const CartItemList = ({ cartItems }) => {
  return (
    <>
      {cartItems.length > 0 && (
        <div className="flex flex-col gap-8 border rounded-md">
          {cartItems.map((cartItem) => {
            return (
              <CartItemCard
                key={cartItem.id}
                name={cartItem.product.name}
                imageUrl={cartItem.product.imageUrl}
                price={cartItem.price}
                quantity={cartItem.quantity}
                subtotal={cartItem.subtotal}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CartItemList;
