import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We are an online bookstore offering a wide range of books across all genres. Shop now for the best deals on your favorite books.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link href="/"><p className="text-sm hover:text-yellow-500">Home</p></Link></li>
              <li><Link href="/categories"><p className="text-sm hover:text-yellow-500">Categories</p></Link></li>
              <li><Link href="/about"><p className="text-sm hover:text-yellow-500">About Us</p></Link></li>
              <li><Link href="/contact"><p className="text-sm hover:text-yellow-500">Contact</p></Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul>
              <li><span className="text-sm">📞 +1 234 567 890</span></li>
              <li><span className="text-sm">📧 support@bookshop.com</span></li>
              <li><span className="text-sm">🏢 123 Book Lane, City, Country</span></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-xl hover:text-yellow-500">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" className="text-xl hover:text-yellow-500">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-xl hover:text-yellow-500">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-xl hover:text-yellow-500">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-10 border-t border-gray-600 pt-4 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} BookShop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
