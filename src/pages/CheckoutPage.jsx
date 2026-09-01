import OrderSummary from "@/components/cart/OrderSummary";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useCart from "@/hooks/useCart";
import useCheckout from "@/hooks/useCheckout";
import { useState } from "react";
import { toast } from "sonner";

const CheckoutPage = () => {
  const [address, setAddress] = useState("");
  const { id, items } = useCart();
  const { handleCheckout } = useCheckout();

  const handleClick = async (e) => {
    e.preventDefault();

    if (!address.trim()) {
      toast.error("Address cannot be empty!");
      return;
    }

    const data = await handleCheckout(id, address);
    if (data?.token) {
      window.snap.pay(data.token);
    }
  };

  const handleChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div className="flex lg:flex-row flex-col justify-center gap-4 p-6">
      <div className="flex flex-col gap-4 w-full max-w-sm p-6 border rounded-lg">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Shipping Address</h1>
          <p className="text-sm text-muted-foreground">
            Enter your full address for delivery.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="address">Address</Label>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Jl. Contoh No. 123, Kecamatan, Kota"
            value={address}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="w-full lg:w-80">
        <OrderSummary items={items} onSubmit={handleClick} />
      </div>
    </div>
  );
};

export default CheckoutPage;
