import { Link } from "react-router";
import { toRupiah } from "@/lib/utils";

const ProductCard = ({ id, imageUrl, name, price }) => {
  return (
    <article className="">
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
        <p className="text-sm text-muted-foreground">{toRupiah(price)}</p>
      </Link>
    </article>
  );
};

export default ProductCard;
