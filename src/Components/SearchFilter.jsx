import React from "react";
import { Search } from "lucide-react";
const SearchFilter = () => {
  return (
    <div className="mb-5 p-5 mt-5 rounded-2xl border border-gray-800 shadow-2xl max-w-7xl mx-auto">
      <div className="flex items-center border-gray-700 overflow-hidden focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800 border rounded-2xl">
        <Search className="w-5 h-5 text-gray ml-4"/>
        <input type="text" placeholder="Search High Performance Product Name/Feature" className="w-full p-4 outline-none text-white bg-gray-800 placeholder-gray-500 text-font-medium"/>
      </div>
    </div>
  );
};

export default SearchFilter;
