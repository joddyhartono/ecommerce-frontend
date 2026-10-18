import useOrderDetail from "@/hooks/useOrderDetail";
import { cn, toRupiah } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const OrderDetailSection = () => {
  const { order } = useOrderDetail();

  return (
    <section className="flex flex-col p-8 gap-8">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/orders">Orders</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{order?.midtransOrderId}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="flex lg:flex-row flex-col justify-between items-center gap-4">
        <h1 className="font-semibold">{order?.midtransOrderId}</h1>
        <span
          className={cn(
            "text-white font-medium px-2 py-1 rounded-md",
            order?.status === "settlement"
              ? "bg-green-500"
              : order?.status === "pending"
                ? "bg-yellow-500"
                : "bg-red-500",
          )}
        >
          {order?.status}
        </span>
      </div>
      <div className="flex lg:flex-row flex-col gap-8 w-full">
        {order?.items.length > 0 && (
          <div className="flex lg:flex-row flex-col justify-between items-center lg:w-2/3 w-full border rounded-md">
            {order?.items?.map((item) => (
              <article
                key={item.product.id}
                className="flex lg:flex-row flex-col items-center justify-between w-full gap-8 p-4"
              >
                <img
                  src={item.product.imageUrl}
                  alt={item.product.name}
                  className="w-30 h-30 object-cover"
                />
                <span>{item.product.name}</span>
                <span>{toRupiah(item.product.price)}</span>
                <span>{item.quantity}</span>
                <span>{toRupiah(item.subtotal)}</span>
              </article>
            ))}
          </div>
        )}
        {order?.items.length > 0 && (
          <div className="flex flex-col justify-between items-center lg:w-1/3 border rounded-md p-4 gap-4">
            {order?.items.map((item) => (
              <div className="flex lg:flex-row flex-col justify-between items-center w-full">
                <span>{item.quantity}x</span>
                <span>{item.product.name}</span>
              </div>
            ))}
            <div className="border w-full"></div>
            <div className="flex lg:flex-row flex-col justify-between items-center w-full">
              <span>Total</span>
              <span>{toRupiah(order?.grossAmount)}</span>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center w-full">
              <span>Via</span>
              <span>{order?.paymentType}</span>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center w-full">
              <span>Sent to</span>
              <span>{order?.address}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default OrderDetailSection;
