import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Register'); // Navigate to registration page
  };

  // Enhanced animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-gray-100 overflow-hidden">
      {/* Hero Section with smoother header */}
      <motion.header 
        className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-lg"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1 
            className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            whileHover={{ 
              scale: 1.05,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            SkillShare
          </motion.h1>
          {/* <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {["Features", "About Us", "Contact", "Testimonials"].map((item) => (
                <motion.li 
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <button 
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                    className="text-gray-700 hover:text-blue-600 relative group cursor-pointer"
                  >
                    {item}
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full"
                      transition={{ duration: 0.3 }}
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </nav> */}
          
          <motion.button 
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </motion.header>

      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* Enhanced Hero Section */}
        <motion.section 
          className="bg-gradient-to-br from-blue-600 to-blue-800 text-white min-h-[90vh] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
          initial="initial"
          animate="animate"
          variants={staggerChildren}
        >
          {/* Animated background with smoother gradient */}
          <motion.div 
            className="absolute top-0 left-0 w-full h-full"
            animate={{ 
              background: [
                "linear-gradient(45deg, #3b82f6 0%, #1d4ed8 100%)",
                "linear-gradient(45deg, #1d4ed8 0%, #3b82f6 100%)"
              ]
            }}
            transition={{ 
              duration: 8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />

          {/* Floating particles effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                animate={{
                  y: [-20, -40, -20],
                  x: [-10, 10, -10],
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </motion.div>

          <motion.h2 
            className="text-5xl font-bold mb-4 relative"
            variants={fadeIn}
          >
            Transform Your Skills Journey
          </motion.h2>

          <motion.p 
            className="text-xl mb-6 relative"
            variants={fadeIn}
          >
            Connect, Learn, and Grow with our Global Community of Skill Enthusiasts
          </motion.p>
          {/* Enhanced Benefits Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12 relative"
            variants={staggerChildren}
          >
            {[
              {
                icon: "💫",
                title: "Unlock Your Potential", 
                description: "Embark on a magical journey of skill discovery with personalized learning adventures and expert mentorship.",
                color: "from-violet-400 to-purple-600"
              },
              {
                icon: "🌈",
                title: "Connect & Inspire",
                description: "Join forces with industry wizards and creative geniuses from every corner of the globe.",
                color: "from-emerald-400 to-green-600"
              },
              {
                icon: "⚡",
                title: "Time Mastery",
                description: "Our AI time-bending technology adapts to your unique rhythm and schedule.",
                color: "from-amber-400 to-yellow-600"
              },
              {
                icon: "🚀", 
                title: "Thrive Together",
                description: "Launch into an orbit of like-minded learners and collaborate on mind-blowing projects.",
                color: "from-rose-400 to-pink-600"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br ${benefit.color} p-6 rounded-full shadow-xl`}
                variants={fadeIn}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: {
                    type: "spring",
                    stiffness: 300
                  }
                }}
              >
                <motion.span 
                  className="text-6xl mb-6 block"
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5 }
                  }}
                >
                  {benefit.icon}
                </motion.span>
                <h3 className="font-bold text-2xl mb-3">{benefit.title}</h3>
                <p className="text-white/90 text-lg">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Animated CTA Button */}
          <motion.button
            onClick={handleGetStarted}
            className="bg-white text-blue-600 mb-5 px-10 py-4 rounded-full shadow-xl hover:bg-gray-100 transition duration-300 text-lg font-semibold relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          id="features" 
          className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="container mx-auto px-4 relative">
            {/* Floating animated elements */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)",
                  "radial-gradient(circle at 70% 70%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)"
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />

            <motion.h2 
              className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              ✨ Explore Skills & Talents ✨
            </motion.h2>
            <p className="text-center text-gray-600 mb-16 text-xl font-light">Discover and master new skills through our enchanted learning platform</p>
            
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div 
                className="text-center transform hover:scale-105 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-blue-100 to-purple-100 p-10 rounded-[2rem] inline-block mb-6 shadow-lg hover:shadow-2xl relative overflow-hidden group"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.span 
                    className="text-6xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    🔮
                  </motion.span>
                </motion.div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-4">Technical Skills</h3>
                <p className="mt-4 text-gray-600 px-6 leading-relaxed">Master in-demand skills like Web Development, Mobile App Development, Data Science, AI/ML, Cloud Computing, and DevOps. Learn from industry experts and build real-world projects.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Python</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">JavaScript</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                </div>
              </motion.div>

              <motion.div 
                className="text-center transform hover:scale-105 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-emerald-100 to-teal-100 p-10 rounded-[2rem] inline-block mb-6 shadow-lg hover:shadow-2xl relative overflow-hidden group"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(16, 185, 129, 0.5)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.span 
                    className="text-6xl"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    ⭐
                  </motion.span>
                </motion.div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 mb-4">Creative Skills</h3>
                <p className="mt-4 text-gray-600 px-6 leading-relaxed">Unleash your creativity with courses in Digital Art, UI/UX Design, Animation, Video Editing, and Content Creation. Transform your artistic vision into professional skills.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">Photoshop</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">Figma</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">After Effects</span>
                </div>
              </motion.div>

              <motion.div 
                className="text-center transform hover:scale-105 transition-all duration-500"
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="bg-gradient-to-br from-amber-100 to-orange-100 p-10 rounded-[2rem] inline-block mb-6 shadow-lg hover:shadow-2xl relative overflow-hidden group"
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(251, 191, 36, 0.5)"
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <motion.span 
                    className="text-6xl"
                    animate={{ 
                      rotateY: [0, 360]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    🌟
                  </motion.span>
                </motion.div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-orange-600 mb-4">Business Skills</h3>
                <p className="mt-4 text-gray-600 px-6 leading-relaxed">Excel in the business world with courses in Digital Marketing, Project Management, Business Analytics, and Leadership. Build the skills needed for professional success.</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Marketing</span>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Analytics</span>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">Leadership</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
        {/* About Us Section */}
        <motion.section 
          id="about" 
          className="py-24 bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ 
            scale: 1.02,
            backgroundImage: "linear-gradient(to bottom right, #dbeafe, #fae8ff)",
            transition: { duration: 0.5 }
          }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 text-center relative">
            {/* Floating animated elements */}
            <motion.div 
              className="absolute inset-0 pointer-events-none"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 80%, rgba(219, 39, 119, 0.1) 0%, transparent 50%)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
            />
            
            <motion.h2 
              className="text-6xl font-bold mb-12 bg-clip-text"
            
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              ✨ Our Magical Story ✨
            </motion.h2>

            <div className="max-w-5xl mx-auto space-y-10">
              <motion.div
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.25)"
                }}
              >
                <motion.div
                  className="text-2xl text-indigo-700 mb-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  🌟
                </motion.div>
                <p className="text-2xl text-gray-800 leading-relaxed font-light">
                  Step into SkillShare, where ordinary moments transform into extraordinary learning adventures! We're not just a platform - we're a living, breathing universe of knowledge where every click sparks a new constellation of possibilities.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(219, 39, 119, 0.25)"
                }}
              >
                <motion.div
                  className="text-2xl text-purple-700 mb-4"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🎭
                </motion.div>
                <p className="text-2xl text-gray-800 leading-relaxed font-light">
                  Born from stardust and dreams, SkillShare has blossomed into a magical garden where knowledge flows like starlight. Here, coding wizards dance with artistic souls, and musical enchantments blend with scientific wonders. Every member adds their unique sparkle to our ever-growing constellation!
                </p>
              </motion.div>

              <motion.div
                className="bg-white/60 backdrop-blur-lg rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 25px 50px -12px rgba(167, 139, 250, 0.25)"
                }}
              >
                <motion.div
                  className="text-2xl text-pink-700 mb-4"
                  animate={{ 
                    y: [0, -10, 0],
                    filter: ["hue-rotate(0deg)", "hue-rotate(360deg)"]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🌈
                </motion.div>
                <p className="text-2xl text-gray-800 leading-relaxed font-light">
                  Our mission shimmers with purpose: to weave a tapestry of shared wisdom that spans the digital cosmos. Each skill shared is a thread of gold, each connection a precious gem in our crown of collective growth. Ready to sprinkle your magic into our enchanted tale?
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-16 flex justify-center space-x-8"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <span className="text-7xl filter drop-shadow-lg">✨</span>
              <span className="text-7xl filter drop-shadow-lg">🌟</span>
              <span className="text-7xl filter drop-shadow-lg">✨</span>
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          id="testimonials" 
          className="py-24 bg-gradient-to-br from-white via-blue-50 to-purple-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          whileHover={{ 
            scale: 1.02,
            backgroundImage: "linear-gradient(to bottom right, #f0f9ff, #f5f3ff)",
            transition: { duration: 0.3 }
          }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Voices of Our Community
            </h2>
            <p className="text-gray-600 mb-16 text-lg">Real stories from our magical community of learners and mentors</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "SkillShare transformed my coding journey! I went from complete beginner to landing my dream job in tech. My mentor, Jake, was incredibly patient and supportive throughout the process. The personalized learning path made all the difference!",
                  author: "Sarah Lawrence",
                  role: "Frontend Developer",
                  avatar: "👩‍💻",
                  gradient: "from-blue-100 to-indigo-100",
                  borderGradient: "from-blue-400 to-indigo-400"
                },
                {
                  quote: "As a photography enthusiast, I found my creative tribe here! The weekly workshops and feedback sessions have helped me develop my unique style. The community's support is simply magical - it's like having a second family!",
                  author: "Mark Thompson",
                  role: "Professional Photographer",
                  avatar: "📸",
                  gradient: "from-purple-100 to-pink-100",
                  borderGradient: "from-purple-400 to-pink-400"
                },
                {
                  quote: "The platform's AI-powered scheduling is a game-changer! I've been able to learn guitar while managing my busy career. My mentor and I connected instantly, and now I'm performing at local events. Dreams do come true!",
                  author: "Emma Wilson",
                  role: "Music Enthusiast",
                  avatar: "🎸",
                  gradient: "from-emerald-100 to-teal-100",
                  borderGradient: "from-emerald-400 to-teal-400"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${testimonial.gradient} p-8 rounded-2xl shadow-xl`}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  <div className="relative">
                    <div className={`absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br ${testimonial.borderGradient} rounded-full flex items-center justify-center text-4xl`}>
                      "
                    </div>
                    <div className="mb-6">
                      <span className="text-6xl">{testimonial.avatar}</span>
                    </div>
                    <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        {testimonial.author}
                      </p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            
            {/* Community Stats */}
            <motion.div 
              className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              {[
                { number: 10000, label: "Active Members", icon: "👥", gradient: "from-blue-400 to-indigo-400" },
                { number: 5000, label: "Skills Shared", icon: "🎯", gradient: "from-purple-400 to-pink-400" }, 
                { number: 15000, label: "Success Stories", icon: "🌟", gradient: "from-orange-400 to-red-400" },
                { number: 50000, label: "Learning Hours", icon: "⏰", gradient: "from-green-400 to-teal-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${stat.gradient} p-8 rounded-2xl shadow-xl text-white backdrop-blur-lg`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ 
                    scale: 1,
                    opacity: 1,
                    transition: {
                      delay: index * 0.2,
                      duration: 0.5
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotate: [0, -2, 2, 0],
                    transition: {
                      rotate: {
                        repeat: Infinity,
                        duration: 0.5
                      }
                    }
                  }}
                >
                  <motion.span 
                    className="text-5xl mb-4 block"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      transition: {
                        repeat: Infinity,
                        duration: 2
                      }
                    }}
                  >
                    {stat.icon}
                  </motion.span>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }} // Changed to false to allow repeat
                  >
                    <CountUp
                      end={stat.number}
                      duration={3}
                      separator=","
                      suffix="+"
                      start={0}
                      enableScrollSpy={true}
                      scrollSpyOnce={false} // Changed to false to allow repeat
                      className="text-4xl font-bold"
                      redraw={true} // Added to force redraw
                    />
                  </motion.div>
                  <p className="text-lg mt-2 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action within Testimonials */}
            <motion.div 
              className="mt-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-gray-600 mb-8">
                Ready to write your own success story? Join our thriving community today!
              </p>
              <motion.button
                onClick={handleGetStarted}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          id="cta" 
          className="py-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white text-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.4 }
          }}
          viewport={{ once: true }}
        >
          {/* Animated background shapes */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
              backgroundSize: ['100% 100%', '120% 120%']
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M50 0 L100 50 L50 100 L0 50 Z" fill="white"/%3E%3C/svg%3E")',
              backgroundRepeat: 'repeat'
            }}
          />

          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Transform Your Skills Journey Today
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Join thousands of learners and mentors in a vibrant community where skills meet opportunity. Your next level awaits!
            </motion.p>
            <motion.button 
              onClick={handleGetStarted} 
              className="bg-white text-blue-600 px-10 py-4 rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-bold text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Begin Your Adventure
            </motion.button>
          </div>
        </motion.section>

        {/* Footer with animation */}
        <motion.footer 
          className="bg-gray-800 text-white py-6"
          whileHover={{ 
            backgroundColor: "#1f2937",
            transition: { duration: 0.3 }
          }}
        >
          <div className="container mx-auto text-center">
            <p>&copy; 2024 SkillShare. All Rights Reserved.</p>
          </div>
        </motion.footer>

        {/* Add smooth scroll behavior */}
        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
          
          * {
            transition: background-color 0.3s ease,
                      transform 0.3s ease,
                      box-shadow 0.3s ease;
          }
        `}</style>
      </div>
    </div>
  );
};

export default LandingPage;
