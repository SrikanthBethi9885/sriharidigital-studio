import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaTwitter
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-gray-600">
        <p className="text-sm mb-4 sm:mb-0">&copy; {new Date().getFullYear()} Srihari Digital Studio. All rights reserved.</p>

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
            href="https://www.linkedin.com/in/user/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://www.instagram.com/username/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
