import { Facebook, Twitter, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="">
            <h1 className="text-center text-3xl font-bold text-blue-500 mb-4">
              Zing Bites
            </h1>
            <p className="text-gray-400 text-center">
              Discover delicious food near you with Zing Bites. Your go-to app
              for amazing food delivery!
            </p>
          </div>

          {/* Contact Info */}
          <div className="">
            <h2 className="text-lg font-semibold text-gray-300 mb-4">
              Contact
            </h2>
            <ul>
              <li>
                <span className="text-gray-400">
                  Email: ankitv9936@gmail.com
                </span>
              </li>
              <li>
                <span className="text-gray-400">Phone: +91 8318785767</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-4">
              Follow Us
            </h2>
            <div className="flex gap-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <Instagram />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500">
                <YouTube />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center mt-8 text-gray-500">
          <p>© 2025 Zing Bites. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
