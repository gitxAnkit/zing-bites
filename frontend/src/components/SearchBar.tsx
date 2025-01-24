import { LocationOn, Search as SearchIcon } from "@mui/icons-material";
const SearchBar = () => {
  return (
    <div className="flex items-center justify-center mt-8 z-50 w-full">
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
            <option value="address1">176, Block C, Beta1, Greater Noida</option>
          </select>
        </div>

        <div className="w-full sm:w-[50%] flex justify-between items-center space-x-4">
          <input
            type="text"
            placeholder="Search for dishes and restaurants"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none 
                  focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
