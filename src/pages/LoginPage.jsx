import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "sonner";

const LoginPage = () => {
  const { login } = useAuth();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      await login(form);
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
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-muted-foreground">
            Welcome back! Enter your details to continue shopping.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="••••••••"
            onChange={handleChange}
          />
        </div>
        <Button type="submit" className="cursor-pointer">
          Login
        </Button>
        <p className="text-sm text-center text-muted-foreground">
          Don't have an account?{" "}
          <Link to="/register" className="underline text-foreground">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
