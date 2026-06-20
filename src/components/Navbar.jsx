import { useSelector } from "react-redux";
import { Link } from "react-router";
import { CloudMoon, Search, ShoppingCart, UserPen } from "lucide-react";
import { useEffect, useState } from "react";
import useCategories from "@/hooks/useCategories";
import { toast } from "sonner";

const Navbar = () => {
  const { fetchCategories } = useCategories();

  const user = useSelector((state) => state.auth.user);
  const status = useSelector((state) => state.categories.status);
  const categories = useSelector((state) => state.categories.data);
  const error = useSelector((state) => state.categories.error);

  console.log(error);

  useEffect(() => {
    if (status === "idle") {
      fetchCategories();
    }
    if (status === "failed") {
      toast.error(error);
    }
  }, [status]);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex justify-between bg-background p-4 border-b border-border sticky top-0 z-50">
      <div className="flex items-center gap-1 cursor-pointer">
        <CloudMoon className="text-foreground" width={20} height={20} />
        <span className="text-foreground font-semibold text-lg tracking-widest">
          Noir
        </span>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <Link
          to="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Home
        </Link>
        <div
          className="relative cursor-pointer"
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            onMouseOver={handleMouseOver}
          >
            Products
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full left-0 bg-background p-6 flex flex-col gap-3 min-w-40">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                to="/products"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                All products
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="flex gap-4 items-center">
        <Search
          width={20}
          height={20}
          className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        />
        {user ? (
          <>
            <Link
              to="/cart"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ShoppingCart width={20} height={20} />
            </Link>
            <Link
              to="/profile"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <UserPen width={20} height={20} />
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-sm text-foreground border border-border px-3 py-1 rounded-md hover:bg-foreground hover:text-background transition-colors"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
