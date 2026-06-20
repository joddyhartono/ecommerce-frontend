import useFeaturedProducts from "@/hooks/useFeaturedProducts";
import ProductCard from "../ProductCard";

const FeaturedProductsSection = () => {
  const { featuredProducts } = useFeaturedProducts();

  return (
    <section className="flex flex-col items-center justify-center text-center p-8 gap-8">
      <h2 className="uppercase font-medium text-3xl tracking-widest">
        Featured Products
      </h2>
      {featuredProducts && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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

export default FeaturedProductsSection;
