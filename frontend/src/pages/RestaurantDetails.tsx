import {
  Search as SearchIcon,
  StarBorderOutlined as Star,
} from "@mui/icons-material";
import FoodCard from "../components/FoodCard";
import Header from "../components/Header";

const RestaurantDetails = () => {
  return (
    <div className="">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[40vh] bg-gradient-to-b from-gray-900 to-gray-700">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
          <h1 className="text-4xl font-bold mb-2">Restaurant Name</h1>
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="text-lg">4.5</span>
          </div>
          <div className="flex items-center gap-2 text-gray-200">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>Location Address</span>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h2 className="text-2xl font-bold mb-6">Top Picks</h2>{" "}
        {/* Horizontal scrollbar */}
        <div className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
      <div className="my-8 flex  flex-col justify-items-center items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Menu</h2>
          <p className="text-gray-600 mt-2">Explore our delicious offerings</p>
          {/* Search Box  */}
          <div className="my-1 relative w-[80vw] max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search for dishes"
              className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none 
              focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-500
               text-gray-900 transition-all duration-200  shadow-sm hover:shadow-md"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 w-[50%] md:w-[70%] lg:w-[80%] xl:w-[65%]  h-[90%]  overflow-y-auto">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-6 items-center justify-center ">
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
            <FoodCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
