import { toRupiah } from "@/lib/utils";
import { Button } from "../ui/button";

const OrderSummary = ({ items, onSubmit }) => {
  const total = items.reduce((accumulator, item) => {
    return accumulator + item.subtotal;
  }, 0);

  return (
    <>
      {items.length > 0 && (
        <div className="flex flex-col gap-4 border rounded-md p-4">
          {items.map((item) => {
            return (
              <div
                className="flex flex-row justify-between items-center"
                key={item.product.id}
              >
                <span>{item.product.name}</span>
                <span>{item.quantity}x</span>
              </div>
            );
          })}
          <div className="flex flex-row justify-between items-center">
            <span>Total</span>
            <span>{toRupiah(total)}</span>
          </div>
          <Button className="cursor-pointer" onClick={onSubmit}>
            Checkout
          </Button>
        </div>
      )}
    </>
  );
};

export default OrderSummary;
