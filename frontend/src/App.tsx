import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import RestaurantDetails from "./pages/RestaurantDetails";
import LoginSignup from "./pages/LoginSignup";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/restaurants" element={<RestaurantDetails/>}></Route>
          <Route path="/login" element={<LoginSignup/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
