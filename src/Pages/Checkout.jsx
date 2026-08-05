import React, { useState } from "react";
import { useCart } from "../Context/CartContext";
import { Package, MapPin } from "lucide-react";
import OrderConfirmation from "./OrderConfirmation";

const Checkout = () => {
  const { cartTotal, clearCart, cart } = useCart();

  const [deliveryDetails, setDeliveryDetails] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });

  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryDetails((prev) => ({ ...prev, [name]: value }));
  };

  console.log("Shipping Data : ", deliveryDetails);

  const handleSubmit = (e) => {
    e.preventDefault();
    clearCart();
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return <OrderConfirmation deliveryDetails={deliveryDetails} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8">
      <h2 className="text-5xl font-extrabold text-white mb-10 tracking-tight">
        Finalize Order
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 p-6 pl-8">
          <h3 className="text-3xl font-bold text-blue-400 flex items-center space-x-3 border-b border-slate-700 pb-4 mb-6">
            <MapPin className="w-7 h-7 text-blue-500" />
            <span>Shipping Information</span>
          </h3>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {Object.keys(deliveryDetails).map((key) => (
              <div key={key}>
                <label
                  htmlFor={key}
                  className="block text-sm font-semibold text-slate-300 capitalize mb-1">
                  {key === "zip" ? "Pin Code" : key}
                </label>

                <input
                  type={key === "zip" ? "number" : "text"}
                  id={key}
                  name={key}
                  value={deliveryDetails[key]}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-5 py-3 border border-slate-700 rounded-xl shadow-inner text-white bg-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}

            <div className="pt-6">
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-extrabold text-xl rounded-full shadow-lg shadow-blue-900/40 cursor-pointer hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-blue-500 uppercase tracking-wider">
                <span>₹ Pay and Confirm Order ₹({cartTotal.toFixed(2)})</span>
              </button>
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1 p-8 bg-slate-800 rounded-2xl shadow-2xl sticky top-20 h-fit border border-slate-700">
          <h3 className="text-3xl font-bold text-white mb-5 border-b border-slate-700 pb-3 flex items-center space-x-2">
            <Package className="w-6 h-6 text-blue-400" />
            <span>Summary</span>
          </h3>

          <div className="space-y-4 text-slate-300">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between text-base border-b border-slate-700 pb-2">
                <span className="truncate text-slate-300">{item.name}</span>

                <span className="font-medium text-blue-300">
                  ₹{item.price * item.quantity.toFixed(2)}
                </span>
              </div>
            ))}

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
                  Total Due :
                </span>

                <span className="text-3xl font-extrabold text-blue-400">
                  ₹{cartTotal.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
