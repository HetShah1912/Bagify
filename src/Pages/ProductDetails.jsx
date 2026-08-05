import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { initialProducts } from "../Data/Product";
import { ChevronLeft, Tag, Zap, ShoppingCart } from "lucide-react";
import { useCart } from "../Context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  const { addToCart } = useCart();

  useEffect(() => {
    setProduct(
      initialProducts.find((data) => {
        return data.id == id;
      })
    );
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="bg-slate-800 rounded-2xl shadow-2xl my-8 p-4 border border-slate-700">
        <Link to="/">
          <button className="flex items-center text-slate-300 hover:text-blue-400 transition duration-150 mb-12 font-semibold text-lg cursor-pointer">
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to All Products</span>
          </button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="w-full">
            <img
              src={product?.image}
              alt={product?.name}
              className="w-100 h-100 object-cover rounded-2xl shadow-2xl shadow-black/40 border-4 border-slate-700"
            />
          </div>

          <div className="flex flex-col justify-around">
            <div>
              <h1 className="text-4xl font-extrabold text-white mb-4 leading-tight tracking-tight">
                {product?.name}
              </h1>
            </div>

            <p className="text-3xl font-extrabold text-blue-400 mb-4">
              ₹{product?.price.toFixed(2)}
            </p>

            <h2 className="text-xl font-bold text-slate-200 mb-2 border-b border-slate-700 pb-2 flex items-center space-x-2">
              <Tag className="w-5 h-5 text-blue-500" />
              <span>Product Overview</span>
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-3">
              {product?.description}
            </p>

            <ul className="space-y-3 text-slate-300 p-4 bg-slate-700 rounded-xl border border-slate-600">
              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-blue-500" />
                <span>High-Quality, Professional Grade Materials</span>
              </li>

              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-blue-500" />
                <span>Comprehensive 1-Year Manufacturer Warranty</span>
              </li>

              <li className="flex items-center space-x-3 text-lg">
                <Zap className="w-5 h-5 text-blue-500" />
                <span>Immediate Shipping for In-Stock Items</span>
              </li>
            </ul>

            <div className="mt-5 space-y-4 flex justify-center items-center flex-col">
              <button
                onClick={() => addToCart(product)}
                className="w-full py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg shadow-blue-900/40 cursor-pointer hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-blue-500 uppercase tracking-wider"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>

              <Link
                to={"/"}
                className="w-full py-3 border-2 border-blue-600 text-blue-400 font-bold rounded-full shadow-lg cursor-pointer hover:bg-blue-900/20 transition duration-300 uppercase tracking-wider text-center"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;