import HomeNavBar from "../components/HomeNavBar";
import hero from "../assets/heroImage.jpg";
import ErrorBoundary from "../app/ErrorBoundary";
import { LocationOn, Search } from "@mui/icons-material";
import FoodCard from "../components/FoodCard";
import RestaurantCard from "../components/RestaurantCard";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ErrorBoundary>
      <div>
        <div
          className="h-[70vh] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="absolute h-[70vh] inset-0 bg-gray-800 bg-opacity-50"></div>
          <HomeNavBar />

          {/* Text Section */}
          <div className="flex items-center justify-center relative z-50 mt-20">
            <div className="text-white text-4xl font-bold font-inter text-center">
              <div>Explore top restaurants and savor</div>
              amazing dishes near you, only on Zing Bites!
            </div>
          </div>

          {/* Search and Address Bar Section */}
          <div className="flex items-center justify-center mt-8 z-50">
            <div
              className="z-10 w-full sm:w-[60vw] bg-white p-3 rounded-xl shadow-lg 
            flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <div className="flex items-center text-gray-700  text-lg w-[50%]">
                <LocationOn />
                <select
                  className="w-full px-4 py-2 border-none bg-white rounded-md
                   focus:outline-none text-gray-500 "
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an address
                  </option>
                  <option value="address1">
                    176, Block C, Beta1, Greater Noida
                  </option>
                </select>
              </div>

              <div className="w-full sm:w-[50%] flex justify-between items-center space-x-4">
                <input
                  type="text"
                  placeholder="Search for dishes and restaurants"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                  focus:ring-2 focus:ring-blue-500"
                />
                <Link to="/search">
                  <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                    <Search />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen p-2">
          <div className="p-3">
            <h1 className="text-2xl font-semibold">Best Food Options</h1>
            {/* A horizontal scroll for top-rated food */}
            <div className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide">
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
          <div className="p-5">
            <h1 className="text-2xl font-semibold">Top Rated Restaurants</h1>
            {/* A horizontal scroll for top-rated food */}
            <div className="flex gap-2 overflow-x-auto scroll-smooth scrollbar-hide">
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
              <RestaurantCard />
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Home;
