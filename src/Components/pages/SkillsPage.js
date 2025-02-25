import React, { useState } from 'react';
import graphicDesignImg from '../images//graphic-design.jpg';
import tutoringImg from '../images/tutoring.jpg';
import PhotographyImg from '../images/Photography.jpg';
import WebDevelopmentImg from '../images/Web-Devlopment.jpg';
import PublicSpeakingImg from '../images/Public-Speaking.jpg';
import cookingImg from '../images/Cooking.jpg';
import { motion } from 'framer-motion';

const SkillsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Sample skills data with images and descriptions
  const skillsData = [
    {
      title: 'Graphic Design',
      description: 'Create stunning visuals using Adobe Photoshop, Illustrator, and more.',
      image: graphicDesignImg,
      category: 'Creative',
      price: '$49.99/month',
      duration: '3 months',
      rating: 4.8,
      students: 1200
    },
    {
      title: 'Web Development',
      description: 'Build modern websites using HTML, CSS, JavaScript, and React.',
      image: WebDevelopmentImg,
      category: 'Technical',
      price: '$59.99/month',
      duration: '6 months',
      rating: 4.9,
      students: 2500
    },
    {
      title: 'Photography',
      description: 'Master the art of capturing moments with your camera.',
      image: PhotographyImg,
      category: 'Creative',
      price: '$39.99/month',
      duration: '2 months',
      rating: 4.7,
      students: 800
    },
    {
      title: 'Tutoring',
      description: 'Help students excel in subjects like math, science, and more.',
      image: tutoringImg,
      category: 'Educational',
      price: '$29.99/hour',
      duration: 'Flexible',
      rating: 4.9,
      students: 3000
    },
    {
      title: 'Cooking Classes',
      description: 'Learn how to cook delicious meals from professional chefs.',
      image: cookingImg,
      category: 'Creative',
      price: '$44.99/month',
      duration: '2 months',
      rating: 4.6,
      students: 1500
    },
    {
      title: 'Public Speaking',
      description: 'Boost your confidence and presentation skills through expert guidance.',
      image: PublicSpeakingImg,
      category: 'Personal Development',
      price: '$49.99/month',
      duration: '3 months',
      rating: 4.8,
      students: 950
    }
  ];

  const categories = ['All', ...new Set(skillsData.map(skill => skill.category))];

  // Filter the skills based on search term and category
  const filteredSkills = skillsData.filter(skill =>
    skill.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || skill.category === selectedCategory)
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen py-12"
    >
      <div className="container mx-auto p-6">
        <motion.h1 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 text-center"
        >
          Explore Skills
        </motion.h1>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-gray-600 text-font-bold text-2xl">
            Discover and master new skills with our expert-led courses. Join thousands of students learning and growing together.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-12 space-y-4">
          <div className="flex justify-center">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              placeholder="Search skills..."
              className="w-full md:w-1/2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } transition-all duration-200 shadow-md`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
          <h3 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            Available Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSkills.length > 0 ? (
              filteredSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                    <span className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {skill.category}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-blue-600">{skill.title}</h4>
                  <p className="text-gray-600 mb-4">{skill.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{skill.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-semibold text-green-600">{skill.price}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Rating:</span>
                      <span className="flex items-center">
                        <span className="text-yellow-500 mr-1">★</span>
                        {skill.rating} ({skill.students} students)
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Enroll Now
                  </motion.button>
                </motion.div>
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-gray-600 text-xl">No skills found for "{searchTerm}".</p>
                <button 
                  onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsPage;
