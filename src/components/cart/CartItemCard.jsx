import { toRupiah } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "../ui/button";

const CartItemCard = ({
  name = "Pastry Piastee",
  imageUrl = "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnR8ZW58MHx8MHx8fDA%3D",
  price = "800000",
  quantity = "1",
  subtotal = "800000",
}) => {
  const handleRemove = () => {};
  const handleAdd = () => {};
  const handleSubtract = () => {};

  return (
    <article className="flex items-center justify-center gap-8 p-4">
      <Button variant="ghost" size="icon" onClick={handleRemove}>
        <X
          className="text-muted-foreground hover:text-foreground transition-colors"
          size={20}
        />
      </Button>
      <img src={imageUrl} alt={name} className="w-30 h-30 object-cover" />
      <span>{name}</span>
      <span>{toRupiah(price)}</span>
      <div className="flex items-center justify-center gap-6">
        <Button variant="ghost" size="icon" onClick={handleSubtract}>
          -
        </Button>
        <span>{quantity}</span>
        <Button variant="ghost" size="icon" onClick={handleAdd}>
          +
        </Button>
      </div>
      <span>{toRupiah(subtotal)}</span>
    </article>
  );
};

export default CartItemCard;
