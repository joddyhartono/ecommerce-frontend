import { CloudMoon } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between bg-background gap-8 p-4 border-t border-border">
      <div className="flex items-center gap-1">
        <CloudMoon className="text-foreground" size={20} />
        <span className="text-foreground font-semibold text-lg tracking-widest">
          Noir
        </span>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div className="flex flex-col items-start gap-2">
          <span className="font-medium">Shop</span>
          <Link
            to="/products"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            All Products
          </Link>
        </div>
      </div>

      <span className="text-muted-foreground text-sm">
        © 2026 Noir. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
