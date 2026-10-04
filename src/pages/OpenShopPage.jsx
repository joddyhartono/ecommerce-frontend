import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const OpenShopPage = () => {
  const { openShop } = useAuth();

  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({
      ...errors,
      [e.target.name]: e.target.value
        ? ""
        : `The ${e.target.name} field is required`,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name) {
      setErrors((prev) => ({ ...prev, name: "The name field is required" }));
      return;
    }

    if (!form.description) {
      setErrors((prev) => ({
        ...prev,
        description: "The description field is required",
      }));
      return;
    }

    try {
      await openShop(form);
      navigate("/seller/dashboard");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-6 w-full max-w-md p-6 border rounded-lg shadow-sm"
      >
        <div className="text-center mb-2">
          <h1 className="text-xl font-semibold">Open Shop</h1>
          <p className="text-sm text-muted-foreground">
            Set up your store and start selling your products
          </p>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label
            htmlFor="name"
            className={errors.name ? "border-red-500 text-red-500" : ""}
          >
            Store Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            placeholder="Electronic Shop"
            value={form.name}
            className={errors.name ? "border-red-500 text-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <Label
            htmlFor="description"
            className={errors.description ? "border-red-500 text-red-500" : ""}
          >
            Description
          </Label>
          <Input
            id="description"
            name="description"
            type="text"
            placeholder="Tell buyers what you sell"
            value={form.description}
            onChange={handleChange}
            className={errors.description ? "border-red-500 text-red-500" : ""}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>
        <Button className="w-full" type="submit">
          Open Shop
        </Button>
      </form>
    </div>
  );
};

export default OpenShopPage;
