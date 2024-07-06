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

  console.log(products);
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

                <div className="space-y-2">
                  {colors.map((color) => (
                    <div
                      key={color.value}
                      className={`cursor-pointer`}
                      onClick={() => handleColorChange(color.value)}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div className={`w-4 h-4 ${color.bgColor} rounded-full`}></div>
                          <span className="ml-2">{color.name}</span>
                        </div>

                        <span className="p-1 rounded-full bg-[#EFF3ED] text-sm">{color.total}</span>

                      </div>

                    </div>
                  ))}
                </div>
              </div>
              {/* <select onChange={handleColorChange} value={sortColor}>
                <option value="">All Colors</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
              </select> */}
              <div className="pt-5">
              <h3 className="text-xl font-medium py-3">Sort By Price</h3>
        <div className="space-y-2 flex flex-col">
          <button
            onClick={() => handleSortChange('asc')}
            className={`py-2 px-4 rounded-lg ${
              sortOrder === 'asc' ? 'bg-green-200 text-green-700' : 'bg-gray-100  hover:bg-gray-200'
            } `}
          >
            Price: Low to High
          </button>
          <button
            onClick={() => handleSortChange('desc')}
            className={`py-2 px-4 rounded-lg ${
              sortOrder === 'desc' ? 'bg-green-200 text-green-700' : 'bg-gray-100  hover:bg-gray-200'
            }`}
          >
            Price: High to Low
          </button>
        </div>
              </div>

              <div className="py-5">
                <h3 className="text-xl font-medium py-3">Filter By Units</h3>
                <div className="space-y-2">
                  {units.map((unit) => (
                    <div
                      key={unit.value}
                      onClick={() => handleUnitChange(unit.value)}
                      className={`flex items-center text-center p-2 cursor-pointer rounded-lg transition duration-300 ease-in-out 
              ${sortUnit === unit.value ? 'bg-green-200 text-green-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                    >
                      <span>{unit.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* <select onChange={handleUnitChange} value={sortUnit}>
                <option value="">All Units</option>
                <option value="kg">Kg</option>
                <option value="head">Head</option>
                <option value="bunch">Bunch</option>
              </select> */}
            </div>
          </div>
          <div className="">
            <div className="">
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
              <div className="pt-5 grid grid-cols-1 md:grid-cols-2 gap-10 relative mt-14">

                {products && products.map(product => <ProductDetails key={product._id} product={product} />)}
              </div>
            </div>
          </div>
        </div>
      </div>




    </>
  );
};

export default Product;
