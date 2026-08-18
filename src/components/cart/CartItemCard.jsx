import { toRupiah } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "../ui/button";

const CartItemCard = ({
  name,
  imageUrl,
  price,
  quantity,
  subtotal,
  onRemove,
  onAdd,
  onSubtract,
}) => {
  return (
    <article className="flex items-center justify-between gap-8 p-4">
      <Button variant="ghost" size="icon" onClick={onRemove}>
        <X
          className="text-muted-foreground hover:text-foreground transition-colors"
          size={20}
        />
      </Button>
      <img src={imageUrl} alt={name} className="w-30 h-30 object-cover" />
      <span>{name}</span>
      <span>{toRupiah(price)}</span>
      <div className="flex items-center justify-center gap-6">
        <Button variant="ghost" size="icon" onClick={onSubtract}>
          -
        </Button>
        <span>{quantity}</span>
        <Button variant="ghost" size="icon" onClick={onAdd}>
          +
        </Button>
      </div>
      <span>{toRupiah(subtotal)}</span>
    </article>
  );
};

export default CartItemCard;
