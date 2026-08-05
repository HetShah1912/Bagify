import React from "react";
import { Handbag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const Navbar = () => {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md text-white shadow-2xl shadow-black/30 border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Handbag className="w-8 h-8 text-blue-500 drop-shadow-lg" />
            <h1 className="text-4xl font-extrabold tracking-widest uppercase">
              Bag<span className="text-blue-500">ify</span>
            </h1>
          </div>
        </Link>

        <nav className="flex items-center">
          <Link
            to="/cart"
            className="relative p-3 bg-blue-600/10 rounded-xl hover:bg-blue-600/20 transition duration-200 border border-blue-500/40 shadow-lg">
            <ShoppingCart className="w-6 h-6 text-blue-500" />

            {cartCount > 0 && (
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full min-w-6 min-h-5">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
