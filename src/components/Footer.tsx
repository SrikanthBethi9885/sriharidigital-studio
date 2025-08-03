import {
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-gray-600">
        <p className="text-sm mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} Srihari Digital Studio. All rights reserved.
        </p>

        <div className="flex space-x-4 text-xl">
          <a
            href="https://www.facebook.com/user/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/sriharidigitalstudio/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com/@sriharidigitalstudio3483?si=8jp0G9vEkAivH8ZJ"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-600"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
