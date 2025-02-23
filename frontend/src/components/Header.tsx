import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Link to="/">
      <div className="flex justify-around p-4">
        <h1 className="z-10 text-5xl font-black text-black cursor-pointer font-montserrat drop-shadow-3xl">
          Zing Bites
        </h1>{" "}
        <div className="w-64 flex justify-between ">
          <button className='text-lg'><PersonOutlineOutlinedIcon/> Sign In</button>
          <button><ShoppingBasketOutlinedIcon/> Food Basket</button>
        </div>
      </div>
    </Link>
  );
};

export default Header;
