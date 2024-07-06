import { useState, useEffect } from "react";
import PrimaryHero from "../components/Banner/PrimaryHero";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/products";
import ProductDetails from "./ProductDetails";

const Product = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColor, setSortColor] = useState('');
  const [sortUnit, setSortUnit] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    { label: "All", value: "" },
    { label: "Fresh", value: "fresh" },
    { label: "Organic", value: "organic" },
    { label: "Vegetable", value: "vegetable" }
  ];

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleColorChange = (e) => {
    setSortColor(e.target.value);
  };

  const handleUnitChange = (e) => {
    setSortUnit(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const { data: products, refetch } = useQuery({
    queryKey: ['products', "selectedCategory", "sortColor", "sortUnit", "sortOrder"],
    queryFn: () => getAllProducts(selectedCategory, sortColor, sortUnit, sortOrder),
    keepPreviousData: true,
  });

  useEffect(() => {
    refetch();
  }, [selectedCategory, sortColor, sortUnit, sortOrder, refetch]);

  console.log(products);
  return (
    <>
      <PrimaryHero text={"Product List"} />
      
      <div className="gap-2 lg:grid-cols-2 grid-cols-3 grid pt-5">
        {categories.map(({ label, value }) => (
          <button
            key={value}
            className="text-sky-200 hover:bg-sky-200 hover:text-sky-900 rounded-sm border border-sky-200 block font-semibold py-1 hover:scale-110 transition-all ease-in-out"
            onClick={() => handleCategoryClick(value)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="flex gap-2 pt-5">
        <select onChange={handleSortChange} value={sortOrder}>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
        <select onChange={handleColorChange} value={sortColor}>
          <option value="">All Colors</option>
          <option value="green">Green</option>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
        </select>
        <select onChange={handleUnitChange} value={sortUnit}>
          <option value="">All Units</option>
          <option value="kg">Kg</option>
          <option value="head">Head</option>
          <option value="bunch">Bunch</option>
        </select>
      </div>
      <div className="pt-5">
        {products && products.map(product => <ProductDetails key={product._id} product={product} />)}
      </div>
    </>
  );
};

export default Product;
