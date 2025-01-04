const RestaurantCard = () => {
  return (
    <div className="w-[300px] flex-shrink-0 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <img
        src="https://b.zmtcdn.com/data/pictures/4/2004/cf143d93fcc2e558297441ac25dcbad7.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
        alt="Restaurant Image"
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4 mt-4">
        {/* Title */}
        <span className="block text-xl font-semibold text-gray-800 mb-2">
         Zing Bites Restaurant 
        </span>
        {/* Description */}
        <div className="text-gray-600 text-sm mb-4">
          A brief description of the restaurant goes here.
        </div>
        
      </div>
    </div>
  );
}

export default RestaurantCard