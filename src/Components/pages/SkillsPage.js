import React, { useState } from 'react';
import graphicDesignImg from '../images//graphic-design.jpg';
import tutoringImg from '../images/tutoring.jpg';
import PhotographyImg from '../images/Photography.jpg';
import WebDevelopmentImg from '../images/Web-Devlopment.jpg';
import PublicSpeakingImg from '../images/Public-Speaking.jpg';
import cookingImg from '../images/Cooking.jpg';

const SkillsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  


  // Sample skills data with images and descriptions
  const skillsData = [
    {
      title: 'Graphic Design',
      description: 'Create stunning visuals using Adobe Photoshop, Illustrator, and more.',
      image: graphicDesignImg,
      category: 'Creative'
    },
    {
      title: 'Web Development',
      description: 'Build modern websites using HTML, CSS, JavaScript, and React.',
      image: WebDevelopmentImg,
      category: 'Technical'
    },
    {
      title: 'Photography',
      description: 'Master the art of capturing moments with your camera.',
      image: PhotographyImg,
      category: 'Creative'
    },
    {
      title: 'Tutoring',
      description: 'Help students excel in subjects like math, science, and more.',
      image: tutoringImg,
      category: 'Educational'
    },
    {
      title: 'Cooking Classes',
      description: 'Learn how to cook delicious meals from professional chefs.',
      image: cookingImg,
      category: 'Creative'
    },
    {
      title: 'Public Speaking',
      description: 'Boost your confidence and presentation skills through expert guidance.',
      image: PublicSpeakingImg,
      category: 'Personal Development'
    }
  ];

  // Filter the skills based on the search term
  const filteredSkills = skillsData.filter(skill =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold text-blue-600 mb-6 text-center">Explore Skills</h1>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search skills..."
            className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Skills Grid with background color */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-4xl font-bold text-center mb-10 text-blue-600">Available Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-2xl font-bold mb-2 text-blue-600">{skill.title}</h4>
                  <p className="text-gray-600 mb-4">{skill.description}</p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-center">No skills found for "{searchTerm}".</p>
            )}
          </div>
        </div>


      </div>
    </div>
  );
};

export default SkillsPage;
