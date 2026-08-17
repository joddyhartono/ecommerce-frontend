import { toRupiah } from "@/lib/utils";

const OrderSummary = ({ cartItems }) => {
  return (
    <>
      {cartItems.length > 0 && (
        <div className="flex flex-col gap-4 border rounded-md p-4">
          {cartItems.map((cartItem) => {
            return (
              <div className="flex flex-row justify-between items-center">
                <span>{cartItem.product.name}</span>
                <span>{cartItem.quantity}x</span>
              </div>
            );
          })}
          <div className="flex flex-row justify-between items-center">
            <span>Total</span>
            <span>{toRupiah()}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
