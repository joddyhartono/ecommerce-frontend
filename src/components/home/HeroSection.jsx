import { Link } from "react-router";
import { Button, buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh] px-4 bg-foreground text-background">
      <h1 className="text-5xl font-bold tracking-widest">Discover Noir</h1>
      <p className="text-muted-foreground mt-4 max-w-md">
        Everything you need, all in one place.
      </p>
      <Link
        className={cn(buttonVariants({ variant: "secondary" }), "mt-8")}
        variant="secondary"
        to="/products"
      >
        Shop Now
      </Link>
    </section>
  );
};

export default HeroSection;
