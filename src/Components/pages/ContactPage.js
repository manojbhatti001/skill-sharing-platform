import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto p-6">
        <h1 className="text-5xl font-bold text-blue-600 mb-8 text-center">Contact Us</h1>

        {/* Introduction Section */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We're here to help! Whether you have questions about how to use the platform, want to provide feedback, or need support with a specific issue, don't hesitate to reach out. Our team is always ready to assist you.
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="bg-blue-100 p-8 rounded-lg shadow-md text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-6">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Email Us</h3>
              <p className="text-gray-700 mb-2">For general inquiries and support, please email us at:</p>
              <p className="text-lg font-semibold text-gray-900">support@skillshare.com</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-3xl font-bold text-blue-600 mb-4">Call Us</h3>
              <p className="text-gray-700 mb-2">Our customer support team is available Monday to Friday, 9 AM - 5 PM:</p>
              <p className="text-lg font-semibold text-gray-900">123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-gray-100 p-10 mt-12 rounded-lg shadow-md">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">We Value Your Feedback</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
            Have suggestions for improving our platform? We would love to hear from you! Feel free to provide any feedback or suggestions by reaching out to us via email or phone.
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 bg-blue-600 text-white py-12 px-8 text-center rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Need Further Assistance?</h2>
          <p className="text-lg mb-6">Fill out the form below, and we'll get back to you as soon as possible.</p>
          <form className="space-y-4 max-w-lg mx-auto">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full p-3 rounded-md text-gray-900"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full p-3 rounded-md text-gray-900"
            />
            <textarea 
              placeholder="Your Message" 
              className="w-full p-3 h-32 rounded-md text-gray-900"
            ></textarea>
            <button 
              type="submit" 
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
