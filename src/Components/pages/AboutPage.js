import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold text-blue-600 mb-6 text-center">About Us</h1>

        {/* Intro Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Community SkillShare is a platform designed to bring people together through skill-sharing opportunities. Our mission is to create a thriving community where individuals can offer their talents and skills to help others, while also learning new skills from fellow members.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you need help with coding, design, cooking, tutoring, or any other skill, Community SkillShare is the place where you can connect with like-minded people and grow together.
          </p>
        </div>

        {/* Mission Statement Section */}
        <div className="mb-16 bg-blue-100 p-10 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-xl text-gray-700">
            To empower communities by fostering a collaborative environment where people can share their skills, knowledge, and experiences with one another, creating mutual growth and opportunities.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Why Choose Us?</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">A growing community of skilled individuals ready to offer and receive help.</li>
              <li className="mb-2">Easy-to-use platform with search and filtering options for specific skills.</li>
              <li className="mb-2">Safe, supportive environment for collaboration and growth.</li>
              <li className="mb-2">Completely free to join and explore!</li>
            </ul>
          </div>

          {/* Testimonials Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-blue-600 mb-4">Testimonials</h3>
            <p className="italic text-gray-700 mb-4">
              "I found the perfect coding mentor through Community SkillShare. It's been a game-changer for my career!" - Sarah K.
            </p>
            <p className="italic text-gray-700 mb-4">
              "Offering my graphic design skills has been incredibly rewarding. I've met so many talented people!" - John D.
            </p>
            <p className="italic text-gray-700">
              "This platform helped me improve my photography skills in ways I never thought possible." - Emily T.
            </p>
          </div>
        </div>

        {/* Join Us Section
        <div className="mt-16 bg-blue-600 text-white py-10 text-center rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Community Today!</h2>
          <p className="text-lg mb-6">
            Become a part of the SkillShare family and start your journey of learning, sharing, and growing together.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Get Started
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AboutPage;
