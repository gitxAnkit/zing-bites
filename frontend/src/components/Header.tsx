const Header = () => {
  return (
    <div>
      <div className="flex justify-around p-4">
        <h1 className="z-10 text-5xl font-black text-black cursor-pointer font-montserrat drop-shadow-3xl">
          Zing Bites
        </h1>{" "}
        <div className="w-52 flex justify-between ">
          <div>Sign In</div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
