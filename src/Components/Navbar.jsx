import React from "react";
import { Handbag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-gray-950/95 backdrop-blur-md text-white shadow-2xl shadow-gray-950 border-b border-orange-900">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center space-x-3 cursor-pointer">
            <Handbag className="w-8 h-8 text-orange-400 drop-shadow-lg" />
            <h1 className="text-4xl font-extrabold tracking-widest uppercase">
              Bag<span className="text-orange-400">ify</span>
            </h1>
          </div>
        </Link>

        <nav className="flex items-center">
          <Link
            to="/cart"
            className="relative p-3 bg-orange-500/10 rounded-xl hover:bg-orange-500/20 transition duration-200 border border-orange-400/50 shadow-lg">
            <ShoppingCart className="w-6 h-6 text-orange-400" />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
