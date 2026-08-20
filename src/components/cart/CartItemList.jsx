import CartItemCard from "./CartItemCard";

const CartItemList = ({ cartItems, onRemove }) => {
  return (
    <>
      {cartItems.length > 0 && (
        <div className="flex flex-col gap-8 border rounded-md">
          {cartItems.map((cartItem) => {
            return (
              <CartItemCard
                key={cartItem.id}
                id={cartItem.id}
                name={cartItem.product.name}
                imageUrl={cartItem.product.imageUrl}
                price={cartItem.price}
                quantity={cartItem.quantity}
                subtotal={cartItem.subtotal}
                onRemove={onRemove}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CartItemList;
