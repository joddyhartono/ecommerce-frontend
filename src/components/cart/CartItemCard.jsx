import { toRupiah } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "../ui/button";

const CartItemCard = ({
  id,
  name,
  imageUrl,
  price,
  quantity,
  subtotal,
  onRemove,
  onIncrement,
  onDecrement,
}) => {
  return (
    <article className="flex items-center justify-between gap-8 p-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          onRemove(id);
        }}
        className="cursor-pointer"
      >
        <X
          className="text-muted-foreground hover:text-foreground transition-colors"
          size={20}
        />
      </Button>
      <img src={imageUrl} alt={name} className="w-30 h-30 object-cover" />
      <span>{name}</span>
      <span>{toRupiah(price)}</span>
      <div className="flex items-center justify-center gap-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={
            quantity === 1
              ? () => {
                  onRemove(id);
                }
              : () => {
                  onDecrement(id);
                }
          }
          className="cursor-pointer"
        >
          -
        </Button>
        <span>{quantity}</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            onIncrement(id);
          }}
          className="cursor-pointer"
        >
          +
        </Button>
      </div>
      <span>{toRupiah(subtotal)}</span>
    </article>
  );
};

export default CartItemCard;
