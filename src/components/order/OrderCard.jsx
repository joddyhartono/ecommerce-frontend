import { Link } from "react-router";
import { cn, toRupiah } from "@/lib/utils";

const OrderCard = ({ id, midtransOrderId, status, grossAmount }) => {
  return (
    <Link
      className="flex lg:flex-row flex-col items-center justify-between gap-8 p-4 border rounded-md"
      to={`/orders/${id}`}
    >
      <div className="flex flex-col lg:items-start items-center justify-between gap-4">
        <h3 className="font-semibold">{midtransOrderId}</h3>
        <h4 className="font-medium">{toRupiah(grossAmount)}</h4>
      </div>
      <span
        className={cn(
          "text-white font-medium px-2 py-1 rounded-md",
          status === "settlement"
            ? "bg-green-500"
            : status === "pending"
              ? "bg-yellow-500"
              : "bg-red-500",
        )}
      >
        {status}
      </span>
    </Link>
  );
};

export default OrderCard;
