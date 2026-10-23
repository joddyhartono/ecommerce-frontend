import { Link } from "react-router";
import { getInitials, toRupiah } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const ProductCard = ({ id, imageUrl, name, price, seller }) => {
  return (
    <article>
      <Link
        to={`/products/${id}`}
        className="flex flex-col items-center justify-center gap-2"
      >
        <div className="w-full aspect-3/4">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-medium text-foreground">{name}</h3>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-muted-foreground/70">by</span>
          <Avatar>
            <AvatarImage src={seller.image} alt={seller.name} />
            <AvatarFallback>{getInitials(seller.name)}</AvatarFallback>
          </Avatar>
        </div>
        <p className="text-sm text-muted-foreground">{toRupiah(price)}</p>
      </Link>
    </article>
  );
};

export default ProductCard;
