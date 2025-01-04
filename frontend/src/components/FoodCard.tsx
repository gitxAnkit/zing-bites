const FoodCard = () => {
  return (
    <div className="w-[300px] flex-shrink-0 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Delicious Food"
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        {/* Title */}
        <span className="block text-xl font-semibold text-gray-800 mb-2">
          Delicious Food
        </span>
        {/* Description */}
        <div className="text-gray-600 text-sm mb-4">
          A brief description of the food goes here.
        </div>
        {/* Price */}
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-green-500">$12.99</span>
          <button className="bg-blue-500 text-white py-1 px-4 rounded-lg hover:bg-blue-600 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;