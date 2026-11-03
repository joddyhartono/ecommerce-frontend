import CartItemCard from "./CartItemCard";

const CartItemList = ({ items, onRemove, onIncrement, onDecrement }) => {
  return (
    <>
      {items.length > 0 && (
        <div className="flex flex-col gap-8 border rounded-md">
          {items.map((item) => {
            return (
              <CartItemCard
                key={item.id}
                id={item.id}
                name={item.product.name}
                image={item.product.image}
                price={item.price}
                quantity={item.quantity}
                subtotal={item.subtotal}
                onRemove={onRemove}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CartItemList;
