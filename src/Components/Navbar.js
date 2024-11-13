import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if the current route is the landing page (i.e., '/')
  const hideNavbarOnLandingPage = location.pathname === '/';

  if (hideNavbarOnLandingPage) {
    return null; // Do not render the Navbar on the landing page
  }

  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600">
          <Link to="/">SkillShare</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/skills" className="text-gray-700 hover:text-blue-600">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/profile" className="text-gray-700 hover:text-blue-600">
              Profile
            </Link>
          </li>
        </ul>
        <Link to="/login">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
