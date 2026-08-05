import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <>
      <div className="bg-slate-800 shadow-xl rounded-2xl overflow-hidden flex flex-col h-full w-full transition duration-500 transform border border-slate-700 hover:scale-[1.03] hover:shadow-blue-900/40">
        <Link
          to={`/product/${product.id}`}
          className="relative cursor-pointer overflow-hidden group"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:opacity-90"
          />

          <div className="absolute bottom-0 right-0 bg-blue-600/95 text-white px-5 py-2 text-xl font-extrabold rounded-tl-xl shadow-lg">
            ₹{product.price.toFixed(2)}
          </div>
        </Link>

        <div className="p-5 flex flex-col grow">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-2xl font-extrabold text-white mb-2 cursor-pointer hover:text-blue-400 transition duration-200 line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-slate-300 text-sm mb-4 line-clamp-3">
            {product.description}
          </p>

          <div className="flex items-center text-xs text-slate-400 mb-4">
            <span className="px-3 py-1 bg-slate-700 border border-slate-600 rounded-full font-semibold">
              {product.category}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="mx-auto w-full py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-900/40 cursor-pointer hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-blue-500 uppercase tracking-wider"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;