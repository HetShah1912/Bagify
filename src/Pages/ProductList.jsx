import React from "react";
import SearchFilter from "../Components/SearchFilter";
import CategoryFilter from "../Components/CategoryFilter";
import { useCart } from "../Context/CartContext";

const ProductList = () => {
  console.log(useCart());
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SearchFilter />
      <CategoryFilter />
    </div>
  );
};

export default ProductList;
