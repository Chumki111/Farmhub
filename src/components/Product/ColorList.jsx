const ColorList = ({ color, handleColorChange }) => {
  return (
    <div className="flex justify-between items-center p-2 cursor-pointer" onClick={() => handleColorChange(color.value)}>
      <div className="flex items-center">
        <div className={`w-4 h-4 ${color.bgColor} rounded-full`}></div>
        <span className="ml-2">{color.name}</span>
      </div>
      <div className="bg-[#EFF3ED] text-sm p-1 rounded-full">
        {color.total}
      </div>
    </div>
  );
};

export default ColorList;
