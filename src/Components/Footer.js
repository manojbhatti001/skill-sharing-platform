import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 space-y-8 md:space-y-0">
          {/* Links Section */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-center md:text-left">
            <Link to="/" className="hover:text-gray-300 transition-colors duration-300">
              Home
            </Link>
            <Link to="/skills" className="hover:text-gray-300 transition-colors duration-300">
              Skills
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors duration-300">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors duration-300">
              Contact
            </Link>
            <Link to="/profile" className="hover:text-gray-300 transition-colors duration-300">
              Profile
            </Link>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transform transition-transform duration-300">
              <FaFacebook size={26} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:scale-110 transform transition-transform duration-300">
              <FaTwitter size={26} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transform transition-transform duration-300">
              <FaInstagram size={26} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:scale-110 transform transition-transform duration-300">
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-400 pt-6 space-y-6 md:space-y-0">
          {/* Call to Action */}
          <div className="text-center md:text-left">
            <h4 className="text-2xl font-bold mb-2">Join Our Vibrant Community!</h4>
            <p className="text-sm mb-3">Start sharing and mastering new skills with like-minded individuals.</p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Copyright Info */}
          <div className="text-center md:text-right">
            <p className="text-sm">&copy; 2024 SkillShare Platform. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
