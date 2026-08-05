import React from "react";
import { Search } from "lucide-react";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-5 p-5 mt-5 rounded-2xl border border-slate-700 shadow-2xl max-w-7xl mx-auto">
      <div className="flex items-center overflow-hidden focus-within:ring-4 focus-within:ring-blue-500/50 transition duration-300 bg-slate-800 border border-slate-700 rounded-2xl">
        <Search className="w-5 h-5 text-slate-400 ml-4" />

        <input
          type="text"
          placeholder="Search High Performance Product Name/Feature"
          className="w-full p-4 outline-none text-white bg-slate-800 placeholder:text-slate-400 font-medium"
          aria-label="Search Products"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchFilter;
