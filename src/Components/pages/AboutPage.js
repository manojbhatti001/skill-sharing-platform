import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaGraduationCap, FaShieldAlt, FaLightbulb, FaPalette, FaCamera } from 'react-icons/fa';

const AboutPage = () => {
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
          About Community SkillShare
        </motion.h1>

        {/* Hero Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl mb-12"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-600 mb-6 flex items-center gap-3">
              <FaLightbulb className="text-4xl" />
              Empowering Communities Through Knowledge
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Community SkillShare is more than just a platform - it's a thriving ecosystem where passionate individuals come together to share their expertise and learn from others. We believe in the power of collaborative learning and the impact it can have on personal and professional growth.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              From coding and design to cooking and music, our diverse community spans across various domains, creating endless possibilities for skill development and meaningful connections.
            </p>
          </div>
        </motion.div>

        {/* Mission Statement Section */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl shadow-xl text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <FaUsers className="text-4xl" />
            Our Mission
          </h2>
          <p className="text-2xl text-white/90">
            "To create a world where knowledge knows no boundaries, and every individual has the opportunity to learn, teach, and grow in a supportive community environment."
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
              <FaUsers className="text-3xl" />
              Community-Driven
            </h3>
            <p className="text-gray-700">Join thousands of learners and mentors who believe in the power of shared knowledge and collaborative growth.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-3xl" />
              Diverse Skills
            </h3>
            <p className="text-gray-700">Explore a wide range of skills from technical expertise to creative arts, all taught by passionate community members.</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white/80 backdrop-blur-lg p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-4 flex items-center gap-2">
              <FaShieldAlt className="text-3xl" />
              Safe & Supportive
            </h3>
            <p className="text-gray-700">Experience learning in a welcoming environment with verified mentors and supportive community members.</p>
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/80 backdrop-blur-lg p-10 rounded-2xl shadow-xl mb-16"
        >
          <h3 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-8 flex items-center justify-center gap-3">
            <FaUsers className="text-4xl text-blue-600" />
            Community Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-md">
              <p className="italic text-gray-700 mb-4">
                "The mentorship I received here transformed my career path. I went from a beginner to a confident developer in months!"
              </p>
              <p className="font-semibold text-blue-600 flex items-center gap-2">
                <FaLightbulb />
                - Sarah K., Software Developer
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <p className="italic text-gray-700 mb-4">
                "Teaching design on this platform has been incredibly rewarding. The community's enthusiasm keeps me motivated!"
              </p>
              <p className="font-semibold text-purple-600 flex items-center gap-2">
                <FaPalette />
                - John D., UI/UX Designer
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <p className="italic text-gray-700 mb-4">
                "Found amazing photography mentors here. My Instagram following grew from 100 to 100k in just a year!"
              </p>
              <p className="font-semibold text-blue-600 flex items-center gap-2">
                <FaCamera />
                - Emily T., Photographer
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 p-12 rounded-2xl shadow-xl"
        >
          <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <FaUsers className="text-4xl" />
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start your journey of learning and sharing today. Join thousands of others who are already part of our growing community.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-bold text-transparent bg-clip-text bg-white hover:shadow-lg transition-all"
          >
            Get Started Now
          </motion.button>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
