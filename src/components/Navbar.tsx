import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary' : 'text-gray-400 hover:text-primary';
  };

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Car className="h-8 w-8 text-primary" />
              <span className="ml-2 text-xl font-bold text-white">Ignition Hub</span>
            </Link>
          </div>
          
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              <Link to="/" className={`${isActive('/')} transition-colors duration-200 font-medium`}>
                Home
              </Link>
              <Link to="/inventory" className={`${isActive('/inventory')} transition-colors duration-200 font-medium`}>
                Inventory
              </Link>
              <Link to="/about" className={`${isActive('/about')} transition-colors duration-200 font-medium`}>
                About
              </Link>
              <Link to="/contact" className={`${isActive('/contact')} transition-colors duration-200 font-medium`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;