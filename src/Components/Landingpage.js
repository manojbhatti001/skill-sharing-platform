import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Register'); // Navigate to registration page
  };

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-blue-600">SkillShare</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="#features" className="text-gray-700 hover:text-blue-600">Features</Link></li>
              <li><Link to="#about" className="text-gray-700 hover:text-blue-600">About Us</Link></li>
              <li><Link to="#contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
              <li><Link to="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link></li>
            </ul>
          </nav>
          <button 
            onClick={handleGetStarted} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </header>

      {/* Hero */}
<section className="bg-blue-600 text-white h-[80vh] flex flex-col justify-center items-center text-center px-4">
  <h2 className="text-4xl font-bold mb-2">Skill Sharing Made Simple</h2>
  <p className="text-lg mb-4">Connect with people and exchange skills effortlessly.</p>
  
  {/* Additional Description */}
  <p className="text-md mb-6 max-w-xl">
    Join our vibrant community where you can offer your skills and learn from others. Whether you're 
    looking to pick up a new hobby, advance your career, or simply meet new friends, SkillShare has 
    something for everyone.
  </p>
  
  {/* List of Benefits */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <span className="text-3xl mb-2">✨</span>
    <h3 className="font-bold text-lg">Discover Talents</h3>
    <p className="text-gray-600">Explore new skills and passions that ignite your creativity.</p>
  </div>
  
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <span className="text-3xl mb-2">🤝</span>
    <h3 className="font-bold text-lg">Connect with Others</h3>
    <p className="text-gray-600">Meet like-minded individuals who share your interests.</p>
  </div>
  
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <span className="text-3xl mb-2">🗓️</span>
    <h3 className="font-bold text-lg">Flexible Scheduling</h3>
    <p className="text-gray-600">Arrange skill exchanges at times that work for you.</p>
  </div>
  
  <div className="bg-white p-4 rounded-lg shadow-md text-center">
    <span className="text-3xl mb-2">🌟</span>
    <h3 className="font-bold text-lg">Supportive Environment</h3>
    <p className="text-gray-600">Learn and share in a community that encourages growth.</p>
  </div>
</div>

  <button 
    onClick={handleGetStarted} 
    className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-200"
  >
    Get Started
  </button>
</section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full inline-block mb-4">
                <span className="text-3xl text-blue-600">🔍</span>
              </div>
              <h3 className="text-xl font-bold">Find Skills</h3>
              <p className="mt-4 text-gray-600">Discover skills that meet your needs, from coding to painting.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full inline-block mb-4">
                <span className="text-3xl text-blue-600">🤝</span>
              </div>
              <h3 className="text-xl font-bold">Connect & Share</h3>
              <p className="mt-4 text-gray-600">Easily connect with individuals offering the skills you need.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-6 rounded-full inline-block mb-4">
                <span className="text-3xl text-blue-600">⏰</span>
              </div>
              <h3 className="text-xl font-bold">Flexible Scheduling</h3>
              <p className="mt-4 text-gray-600">Schedule skill exchanges at times that are convenient for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">About Us</h2>
          <p className="text-lg text-gray-700 mb-6">
            SkillShare is a community-driven platform designed to help individuals connect and share their skills.
            Whether you're looking to learn something new or share your expertise, SkillShare is the place for you.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to empower individuals to learn and grow through shared experiences. Join us in building a vibrant community!
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-10">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-4 md:mb-0">
              <p className="text-gray-600 italic">"SkillShare helped me find a coding mentor when I needed it the most!"</p>
              <p className="font-bold mt-4">- Sarah L.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-4 md:mb-0">
              <p className="text-gray-600 italic">"I learned so much from the photography workshops offered by my neighbors."</p>
              <p className="font-bold mt-4">- Mark T.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"A great platform for sharing skills and making new friends!"</p>
              <p className="font-bold mt-4">- Emma W.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Join the Community Today</h2>
          <p className="mb-8">Start offering and requesting skills from people in your area.</p>
          <button 
            onClick={handleGetStarted} 
            className="bg-white text-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-gray-100"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 SkillShare. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
