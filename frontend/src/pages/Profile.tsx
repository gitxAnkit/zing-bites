import Header from "../components/Header";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Body Section */}
      <div className="flex justify-center items-start h-full p-6">
        <div className="w-[70vw] bg-blue-100 min-h-screen shadow-lg rounded-lg overflow-hidden flex flex-col">
          
          {/* Profile Info Box */}
          <div className="bg-black h-[200px] flex items-center px-6 py-4 text-white">
            <img
              className="rounded-full h-[160px] w-[160px] border-4 border-white"
              src="https://img.freepik.com/free-vector/flat-style-woman-avatar_90220-2876.jpg?t=st=1740319431~exp=1740323031~hmac=c4fc2193db0a3e5dbd49af3fb754f8b4f87677d3c476382fac2bc38f5040f3fb&w=900"
              alt="User Avatar"
            />
            <div className="ml-6 flex-1 flex justify-between">
              <div>
                <h2 className="text-xl font-semibold">User's Full Name</h2>
                <p className="text-gray-300">Email/Phone</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-lg">Order Count</span>
                <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-1">
            {/* Sidebar */}
            <div className="w-[20vw] bg-gray-800 text-white p-6 flex flex-col gap-4">
              <button className="py-3 px-6 rounded-lg bg-gray-600 hover:bg-red-700 transition-all text-lg">
                Orders
              </button>
              <button className="py-3 px-6 rounded-lg bg-gray-600 hover:bg-red-700 transition-all text-lg">
                Addresses
              </button>
              <button className="py-3 px-6 rounded-lg bg-gray-600 hover:bg-red-800 transition-all text-lg">
                Delete Account
              </button>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6">
              <h2 className="text-2xl font-bold">Your Orders</h2>
              <p className="text-gray-600">No orders placed yet.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
