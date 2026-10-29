import { Link } from "react-router";
import { cn, getInitials, toRupiah } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Button, buttonVariants } from "../ui/button";

const ProductCard = ({ id, imageUrl, name, price, seller, onDelete }) => {
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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2">
          {seller && (
            <>
              <span className="text-xs text-muted-foreground/70">by</span>
              <Avatar>
                <AvatarImage src={seller?.image} alt={seller?.name} />
                <AvatarFallback>{getInitials(seller?.name)}</AvatarFallback>
              </Avatar>
            </>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{toRupiah(price)}</p>
      </Link>
      {!seller && (
        <div className="flex flex-col lg:flex-row items-center justify-center gap-2 mt-2">
          <Link
            to={`/dashboard/seller/edit/${id}`}
            className={cn(buttonVariants(), "bg-yellow-500 cursor-pointer")}
          >
            Edit Product
          </Link>
          <Button
            className={cn("bg-red-500 cursor-pointer")}
            onClick={onDelete}
          >
            Delete Product
          </Button>
        </div>
      )}
    </article>
  );
};

export default ProductCard;
