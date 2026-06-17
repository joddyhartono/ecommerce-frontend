import { useSelector } from "react-redux";
import { Link } from "react-router";
import { CloudMoon, Search, ShoppingCart, UserPen } from "lucide-react";

const Navbar = () => {
  const user = useSelector((state) => state.auth.user);

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
        <Link
          to="/products"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Products
        </Link>
        <Link
          to="/categories"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Categories
        </Link>
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
