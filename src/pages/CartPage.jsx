import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import useCart from "@/hooks/useCart";
import CartItemList from "@/components/cart/CartItemList";
import OrderSummary from "@/components/cart/OrderSummary";
import { useNavigate } from "react-router";

const CartPage = () => {
  const { items, handleRemove, handleIncrement, handleDecrement } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  };

  return (
    <section className="flex flex-col p-8 gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Cart</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-xl font-semibold">Shopping Bag</h1>
      <span className="text-sm text-muted-foreground">
        {items?.length} products
      </span>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <CartItemList
            items={items}
            onRemove={handleRemove}
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </div>
        <div className="w-full lg:w-80">
          <OrderSummary items={items} onSubmit={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default CartPage;
