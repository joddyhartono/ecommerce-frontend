import { toRupiah } from "@/lib/utils";
import { Button } from "../ui/button";

const OrderSummary = ({ cartItems }) => {
  const total = cartItems.reduce((accumulator, cartItem) => {
    return accumulator + cartItem.subtotal;
  }, 0);

  return (
    <>
      {cartItems.length > 0 && (
        <div className="flex flex-col gap-4 border rounded-md p-4">
          {cartItems.map((cartItem) => {
            return (
              <div
                className="flex flex-row justify-between items-center"
                key={cartItem.product.id}
              >
                <span>{cartItem.product.name}</span>
                <span>{cartItem.quantity}x</span>
              </div>
            );
          })}
          <div className="flex flex-row justify-between items-center">
            <span>Total</span>
            <span>{toRupiah(total)}</span>
          </div>
          <Button>Checkout</Button>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
