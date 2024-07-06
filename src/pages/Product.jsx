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
  const [activeCategory, setActiveCategory] = useState("");

  
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
    setActiveCategory(category);
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row mt-28 space-y-8 md:space-y-0 md:space-x-8">
          <div className="">
            <h3>Filter By price</h3>
          </div>
          <div className="">
          <div className="flex justify-center items-center">
              <div className="">
              {
                categories.map(({label,value}) => (
                  <button key={value} className={`border-[#EFF3ED] border-[1px] px-6 py-2 ml-6 text-lg font-medium rounded-lg transition duration-300 ${activeCategory === value ? 'bg-[#2AB939] text-white' : ''
                  }`} onClick={() => handleCategoryClick(value)}>
                    {label}
                  </button>
                ))
              }
              </div>
            </div>
          </div>
        </div>
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
