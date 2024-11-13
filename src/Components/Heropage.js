import React from 'react';
import { useNavigate } from 'react-router-dom';

import graphicDesignImg from './images/graphic-design.jpg';
import codingImg from './images/coding.jpg';
import tutoringImg from './images/tutoring.jpg';

import cookingImg from './images/Cooking.jpg'; 

const HeroPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Register'); // Navigate to registration page
  };

  // Skill data: Each object contains the image, title, and description of the skill.
  const skills = [
    {
      image: graphicDesignImg, // Replace with actual skill image URL
      title: 'Graphic Design',
      description: 'Learn how to create stunning visuals with tools like Photoshop and Illustrator.'
    },
    {
      image: codingImg, // Replace with actual skill image URL
      title: 'Coding',
      description: 'Develop your coding skills in languages like JavaScript, Python, and more.'
    },
    {
        image: tutoringImg, // Replace with actual skill image URL
      title: 'Tutoring',
      description: 'Share knowledge and help others excel in subjects like math, science, and more.'
    },
    {
        image: cookingImg, // Replace with actual skill image URL
      title: 'Cooking Classes',
      description: 'Learn how to cook delicious meals from experienced chefs.'
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="container mx-auto py-16 text-center px-6 md:px-12">
        <h2 className="text-6xl font-extrabold mb-6">Unlock Skills in Your Community</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Offer and request skills from people around you. Whether you're seeking help with coding, design, tutoring, or something else, Community SkillShare connects you to the right people.
        </p>
        <button 
          onClick={handleGetStarted} 
          className="bg-white text-blue-600 px-8 py-4 rounded-full shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105"
        >
          Get Started
        </button>
      </div>

      {/* Skills Cards Section */}
      <div className="bg-white text-gray-900 p-10 mt-16 w-full">
        <h3 className="text-4xl font-bold text-center mb-12 text-blue-600">Explore Skills</h3>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <img 
                src={skill.image} 
                alt={skill.title} 
                className="w-full h-48 object-cover rounded-md mb-4 transition-transform transform hover:scale-105"
              />
              <h4 className="text-2xl font-bold mb-2">{skill.title}</h4>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
