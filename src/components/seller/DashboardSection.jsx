import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import ProductCard from "../product/ProductCard";
import useSellerProducts from "@/hooks/useSellerProducts";

const DashboardSection = () => {
  const { products } = useSellerProducts();

  return (
    <section className="flex flex-col p-8 gap-8">
      <div className="flex lg:flex-row flex-col justify-between gap-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>My Shop</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Link
          className={cn(
            buttonVariants({ variant: "default" }),
            "cursor-pointer",
          )}
        >
          Edit Shop Profile
        </Link>
      </div>
      {products && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default DashboardSection;
