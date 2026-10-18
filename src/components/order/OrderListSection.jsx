import useOrders from "@/hooks/useOrders";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import OrderCard from "./OrderCard";

const OrderListSection = () => {
  const { orders } = useOrders();

  return (
    <section className="flex flex-col p-8 gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>My Orders</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <span className="text-sm text-muted-foreground">
        {orders.length} orders
      </span>
      {orders && (
        <div className="flex flex-col gap-4">
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              id={order.id}
              midtransOrderId={order.midtransOrderId}
              status={order.status}
              grossAmount={order.grossAmount}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default OrderListSection;
