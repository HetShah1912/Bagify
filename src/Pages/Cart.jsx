import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { ChevronLeft, Zap } from "lucide-react";
import CartItem from "../Components/CartItem";

const Cart = () => {
  const { cart, cartTotal, cartCount } = useCart();

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
      <div className="flex items-center mb-10">
        <Link
          to={"/"}
          className="flex items-center text-slate-300 hover:text-blue-400 transition duration-150 font-semibold text-lg">
          <ChevronLeft className="w-6 h-6 mr-1" />
          <span>Back to Store</span>
        </Link>
      </div>

      <h2 className="text-4xl font-extrabold text-white mb-10 tracking-tight">
        Shopping Cart ({cartCount})
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <div className="lg:col-span-1 p-8 bg-slate-800 rounded-2xl shadow-2xl sticky top-20 h-fit border border-slate-700">
          <h3 className="text-3xl font-bold text-white mb-5 border-b border-slate-700 pb-3 flex items-center space-x-2">
            <div className="flex justify-between">
              <span className="w-6 h-6 text-blue-400">₹</span>
              <span>Order Total</span>
            </div>
          </h3>

          <div className="space-y-4 text-slate-300">
            <div className="flex justify-between text-xl">
              <span>Sub Total :</span>
              <span className="font-semibold text-white">
                ₹{cartTotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between text-xl">
              <span>Shipping (Express) :</span>
              <span className="font-semibold text-green-400">Free</span>
            </div>

            <div className="flex justify-between pt-6 border-t border-slate-700">
              <span className="text-2xl font-extrabold text-white">
                Estimated Total :
              </span>

              <span className="text-2xl font-extrabold text-blue-400">
                ₹{cartTotal.toFixed(2)}
              </span>
            </div>
          </div>

          <Link
            to={"/checkout"}
            className="w-full mt-8 py-4 bg-blue-600 text-white font-extrabold text-xl rounded-full shadow-lg shadow-blue-900/40 cursor-pointer hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-blue-500 uppercase tracking-wider">
            <Zap className="w-6 h-6" />
            <span>Proceed Securely</span>
          </Link>

          <p className="text-xs text-slate-400 text-center mt-4">
            All Transactions are Encrypted and Secure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
