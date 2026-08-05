import React from "react";
import { useCart } from "../Context/CartContext";
import { X } from "lucide-react";

const CartItem = ({ item }) => {
  const { addToCart, removeFromCart } = useCart();

  const increaseQuantity = () => addToCart(item);
  const decreaseQuantity = () => removeFromCart(item.id);

  return (
    <div className="flex flex-col items-center sm:flex-row justify-between p-4 sm:p-6 mb-4 bg-slate-800 rounded-xl shadow-2xl border border-slate-700 transition duration-300 hover:border-blue-600/50">
      <div className="flex items-center space-x-4 w-full sm:w-auto">
        <img
          src={item.image}
          alt={item.name}
          className="w-24 h-24 object-cover rounded-lg border-2 border-slate-700"
        />
        <div className="grow">
          <h3 className="text-xl font-bold text-white line-clamp-1">
            {item.name}
          </h3>
          <p className="text-lg text-blue-400 font-semibold">
            ₹{item.price.toFixed(2)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">
        <div className="flex items-center border border-slate-700 rounded-full overflow-hidden shadow-lg">
          <button
            onClick={decreaseQuantity}
            className="p-2 text-slate-300 bg-slate-700 hover:bg-slate-600 transition duration-150 w-8 h-8 items-center justify-center">
            -
          </button>

          <span className="px-3 text-base font-bold text-white bg-slate-700">
            {item.quantity}
          </span>

          <button
            onClick={increaseQuantity}
            className="p-2 text-slate-300 bg-slate-700 hover:bg-slate-600 transition duration-150 w-8 h-8 items-center justify-center">
            +
          </button>
        </div>

        <p className="font-extrabold text-blue-300 w-24 text-right hidden md:block">
          ₹{(item.price * item.quantity).toFixed(2)}
        </p>

        <button
          onClick={() => {
            removeFromCart(item.id, true);
          }}
          className="p-3 bg-red-900/20 text-red-400 hover:bg-red-900/40 transition duration-150 rounded-full cursor-pointer">
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
