import FoodCard from "../components/FoodCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const Search = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <SearchBar />

      {/* Search Result Container */}
      <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
        <div>
          <button className="p-2 border border-gray-500 bg-white text-black rounded-full m-2 hover:text-white hover:bg-gray-600">
            Restaurants
          </button>
          <button className="p-2 border border-gray-500 bg-white text-black rounded-full m-2  hover:text-white hover:bg-gray-600">
            Dishes
          </button>
        </div>
        <div className="bg-gray-200 w-[50%] md:w-[70%] lg:w-[80%] xl:w-[65%]  h-[90%] p-4 rounded-lg shadow-lg overflow-auto">
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-2 items-center justify-center">
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

export default Search;
