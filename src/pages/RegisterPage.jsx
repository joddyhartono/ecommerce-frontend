import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const RegisterPage = () => {
  const { register } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
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

    if (!form.email) {
      setErrors((prev) => ({
        ...prev,
        email: "The email field is required",
      }));
    }

    if (!form.name) {
      setErrors((prev) => ({ ...prev, name: "The name field is required" }));
    }

    if (!form.password) {
      setErrors((prev) => ({
        ...prev,
        password: "The password field is required",
      }));
    }

    if (!form.name || !form.email || !form.password) {
      return;
    }

    try {
      await register(form);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="flex flex-col gap-4 w-full max-w-sm p-6 border rounded-lg shadow-sm"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Sign up</h1>
          <p className="text-sm text-muted-foreground">
            Create an account to start shopping.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className={errors.name && "text-red-500"}>
            Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            onChange={handleChange}
            className={errors.name && "border-red-500 text-red-500"}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className={errors.email && "text-red-500"}>
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            onChange={handleChange}
            className={errors.email && "border-red-500 text-red-500"}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <Label
            htmlFor="password"
            className={errors.password && "text-red-500"}
          >
            Password
          </Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={handleChange}
            className={errors.password && "border-red-500 text-red-500"}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <Button type="submit" className="cursor-pointer">
          Register
        </Button>
        <p className="text-sm text-center text-muted-foreground">
          Already have an account?{" "}
          <Link to="/login" className="underline text-foreground">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
