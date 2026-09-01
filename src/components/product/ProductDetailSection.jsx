import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useProductDetail from "@/hooks/useProductDetail";
import { cn, toRupiah } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import useCart from "@/hooks/useCart";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const ProductDetailSection = () => {
  const { product } = useProductDetail();
  const { handleAddToCart } = useCart();
  const { id } = useParams();
  const items = useSelector((state) => state.cart.items);

  const isInCart = items.some((item) => item.product.id === Number(id));

  return (
    <section className="flex flex-col p-8 gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{product?.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {product && (
        <div className="flex flex-col md:flex-row justify-center items-start gap-8">
          <div className="w-full md:w-1/3 aspect-3/4">
            <img
              src={product.imageUrl}
              alt={product?.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex flex-col gap-2 pb-4 border-b border-muted-foreground">
              <h1 className="text-2xl font-semibold">{product?.name}</h1>
              <h2 className="text-lg text-muted-foreground">
                {toRupiah(product?.price)}
              </h2>
              <p className="text-sm text-muted-foreground">
                {product?.description}
              </p>
            </div>
            <button
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-full cursor-pointer",
              )}
              onClick={() => {
                return handleAddToCart(id);
              }}
              disabled={isInCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetailSection;
