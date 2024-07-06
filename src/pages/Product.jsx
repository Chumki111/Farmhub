import { useState, useEffect } from "react";
import PrimaryHero from "../components/Banner/PrimaryHero";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/products";
import ProductCard from "../components/Product/ProductCard";
import ColorList from "../components/Product/ColorList";
import PriceSort from "../components/Product/PriceSort";
import UnitList from "../components/Product/UnitList";


const Product = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortColor, setSortColor] = useState('');
  const [sortUnit, setSortUnit] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const categories = [
    { label: "All", value: "" },
    { label: "Fresh", value: "fresh" },
    { label: "Organic", value: "organic" },
    { label: "Vegetable", value: "vegetable" }
  ];
  const colors = [
    { name: 'All', value: '', bgColor: '', total: 15 },
    { name: 'Red', value: 'red', bgColor: 'bg-red-500', total: "03" },
    { name: 'Green', value: 'green', bgColor: 'bg-green-500', total: "07" },
    { name: 'Orange', value: 'orange', bgColor: 'bg-orange-500', total: "02" },
    { name: 'White', value: 'white', bgColor: 'bg-white border border-gray-400', total: "01" },
    { name: 'Various', value: 'various', bgColor: 'bg-gray-400', total: "02 " }
  ];

  const units = [
    { name: 'All Units', value: '' },
    { name: 'Kg', value: 'kg' },
    { name: 'Head', value: 'head' },
    { name: 'Bunch', value: 'bunch' },

  ];

  const handleSortChange = (order) => {
    // setSortOrder(e.target.value);
    setSortOrder(order)
  };

  const handleColorChange = (color) => {
    setSortColor(color);

  };

  const handleUnitChange = (unit) => {
    setSortUnit(unit);
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
  return (
    <>
      <PrimaryHero text={"Product List"} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row mt-28 space-y-8 md:space-y-0 md:space-x-8 space-x-10">
          <div className="border-[#EFF3ED] border-[1px] px-4">
            <div className="flex flex-col gap-2 pt-5">
              {/* colors filter */}
              <div className="">
                <h3 className="text-xl font-medium py-3">Filter By Color</h3>
                <div className="">
                  {colors.map(color => (
                    <ColorList
                      key={color.value}
                      color={color}
                      handleColorChange={handleColorChange}
                    />
                  ))}
                </div>
              </div>
              {/* price filter */}
              <PriceSort sortOrder={sortOrder} handleSortChange={handleSortChange} />
              {/* units filter */}
              <UnitList units={units} sortUnit={sortUnit} handleUnitChange={handleUnitChange} />
            </div>
          </div>
          <div className="">
            {/* filter by category button */}
            <div className="flex justify-center items-center">
              <div className="flex flex-wrap">
                {
                  categories.map(({ label, value }) => (
                    <button key={value} className={`border-[#EFF3ED] border-[1px] px-6 py-2 ml-6 text-lg font-medium rounded-lg transition duration-300  ${activeCategory === value ? 'bg-[#2AB939] text-white' : ''
                      }`} onClick={() => handleCategoryClick(value)}>
                      {label}
                    </button>
                  ))
                }
              </div>
            </div>
            {/* all product map and product card */}
            <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-10 relative mt-14">
              {products && products.map(product => <ProductCard key={product._id} product={product} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
