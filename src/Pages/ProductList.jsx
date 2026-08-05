import React, { useState } from "react";
import SearchFilter from "../Components/SearchFilter";
import CategoryFilter from "../Components/CategoryFilter";
import { useCart } from "../Context/CartContext";
import ProductCard from "../Components/ProductCard";

const ProductList = () => {
  const { products } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts = products.filter((product) => {
    const matchSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchSearch && matchCategory;
  });
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory = {setSelectedCategory}/>

      <h2 className="text-2xl font-extrabold pt-4 text-white">
        Featured Gear ({filterProducts.length} Items){" "}
      </h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-center items-center">
        {filterProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
