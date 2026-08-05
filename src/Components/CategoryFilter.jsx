import React from "react";
import { initialProducts } from "../Data/Product";
import { Tag } from "lucide-react";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const availableCategories = [
    "All",
    ...new Set(initialProducts.map((product) => product.category)),
  ];

  return (
    <div>
      <div className="flex flex-wrap gap-3 pb-6">
        <Tag className="w-5 h-5 text-blue-500 mt-2 mr-2 hidden sm:block" />

        {availableCategories.map((category) => (
          <button
            onClick={() => setSelectedCategory(category)}
            key={category}
            className={`px-5 py-2 text-sm font-bold rounded-full transition duration-200 shadow-md ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-blue-800/40"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-blue-400 border border-slate-700"
            } cursor-pointer`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;