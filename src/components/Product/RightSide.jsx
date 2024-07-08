import { Link } from "react-router-dom";

const productNames = [
  { id: 1, name: "Carrots" },
  { id: 2, name: "Spinach" },
  { id: 3, name: "Lettuce" },
  { id: 4, name: "Radishes" },
  { id: 5, name: "Tomatoes" },
  { id: 6, name: "Cucumbers" },
  { id: 7, name: "Bell Peppers" },
  { id: 8, name: "Zucchini" },
  { id: 9, name: "Apples" },
  { id: 10, name: "Bell Peppers" },
  { id: 11, name: "Broccoli" },
  { id: 12, name: "Cauliflower" },
  { id: 13, name: "Green Beans" },
  { id: 14, name: "Sweet Potatoes" },
  { id: 15, name: "Cabbage" }
];

const RightSide = () => {
  return (
    <div className="border border-[#EFF3ED] px-5 rounded-md">
      <h2 className="text-2xl font-medium px-2 py-2">Products Name</h2>
      <div className="px-4">
        <ul>
          {productNames.map((product) => (
            <Link to={`/product`} key={product.id}>
            <li
              
              className={"border-b border-[#E2E8F0] text-lg py-2"}
            >
              {product.name}
            </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RightSide;
