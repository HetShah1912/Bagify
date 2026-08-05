import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const OrderConfirmation = ({ deliveryDetails }) => {
  return (
    <div className="max-w-7xl mx-auto md:px-8 pt-12">
      <div className="p-12 bg-slate-800 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-green-600 text-white">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg" />

        <h2 className="text-4xl font-extrabold text-white mb-4">
          Order Confirmed!
        </h2>

        <p className="text-lg text-slate-300 mb-6">
          Your Transaction is Completed. Thank You for Ordering, Have a Good
          Day.
        </p>

        <div className="p-6 bg-green-900/20 border border-green-700 rounded-xl font-mono text-left inline-block text-green-300 text-sm">
          <p className="font-semibold text-lg mb-1">{deliveryDetails?.name}</p>
          <p>{deliveryDetails?.address}</p>
          <p>{deliveryDetails?.zip}</p>
        </div>

        <div className="flex items-center justify-center">
          <Link
            to={"/"}
            className="w-70 mt-10 px-10 py-4 bg-blue-600 text-white font-extrabold rounded-full shadow-lg shadow-blue-900/40 cursor-pointer hover:bg-blue-700 transition duration-300 flex items-center justify-center space-x-2 transform hover:ring-4 hover:ring-blue-500 uppercase tracking-wider">
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
