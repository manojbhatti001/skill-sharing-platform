import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation
import LandingPage from './Components/Landingpage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/Registerpage';
import HeroSection from './Components/Heropage';
import Navbar from './Components/Navbar';
import SkillsPage from './Components/pages/SkillsPage';
import AboutPage from './Components/pages/AboutPage';
import ContactPage from './Components/pages/ContactPage';
import ProfilePage from './Components/pages/ProfilePage';
import Footer from './Components/Footer';

const App = () => {
  const location = useLocation(); // Hook to get the current location

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/heropage" element={<HeroSection />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      {/* Conditionally render Footer: Hide on the landing page ("/") */}
      {location.pathname !== '/' && <Footer />}
    </>
  );
};

const Main = () => (
  <Router>
    <App />
  </Router>
);

export default Main;
