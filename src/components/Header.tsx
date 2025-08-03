import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
      
      {/* Left: Logo / Studio Name */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors duration-200"
      >
        SriHariDigital Studio
      </Link>

      {/* Right: Navigation */}
      <nav className="flex space-x-4 mt-4 sm:mt-0 text-gray-700 text-sm sm:text-base">
        <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
        <Link to="/services" className="hover:text-blue-600 transition-colors">Services</Link>
        <Link to="/booking" className="hover:text-blue-600 transition-colors">Booking</Link>
        <Link to="/gallery" className="hover:text-blue-600 transition-colors">Gallery</Link>
        <Link to="/admin" className="hover:text-blue-600 transition-colors">Admin</Link>
      </nav>
    </div>
  </header>
);

export default Header;
