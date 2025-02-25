import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaEdit, FaLock, FaHistory } from 'react-icons/fa';

const ProfilePage = () => {
  // Sample user data
  const user = {
    name: 'Arjun Patel',
    email: 'arjun.patel@example.com',
    joinedDate: 'March 15, 2022',
    skillsOffered: 8,
    skillsRequested: 4,
    location: 'Mumbai, India',
    bio: 'Passionate about web development and teaching others.',
    phone: '+91 98765 43210',
    website: 'www.arjunpatel.dev',
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 flex justify-center items-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6">Profile</h1>

        {/* Profile Header */}
        <div className="flex flex-col items-center space-y-4">
          <div className="w-24 h-24 bg-indigo-500 text-white flex items-center justify-center rounded-full text-3xl font-bold">
            AP
          </div>
          <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-gray-600 flex items-center"><FaMapMarkerAlt className="mr-2" /> {user.location}</p>
        </div>

        {/* User Details */}
        <div className="mt-6 text-gray-800 space-y-2">
          <p className="flex items-center"><FaEnvelope className="mr-2" /> <span className="font-semibold">Email:</span> {user.email}</p>
          <p className="flex items-center"><FaMapMarkerAlt className="mr-2" /> <span className="font-semibold">Location:</span> {user.location}</p>
          <p className="flex items-center"><span className="font-semibold">Phone:</span> {user.phone}</p>
          <p className="flex items-center"><span className="font-semibold">Website:</span> <a href={`https://${user.website}`} className="text-blue-500" target="_blank" rel="noopener noreferrer">{user.website}</a></p>
          <p className="italic text-gray-600">“{user.bio}”</p>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 gap-6">
          <div className="bg-blue-500 text-white p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-lg font-semibold">Skills Offered</h3>
            <p className="text-4xl font-extrabold">{user.skillsOffered}</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-lg font-semibold">Skills Requested</h3>
            <p className="text-4xl font-extrabold">{user.skillsRequested}</p>
          </div>
        </div>

        {/* Profile Actions */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center">
            <FaEdit className="mr-2" /> Edit Profile
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center">
            <FaLock className="mr-2" /> Change Password
          </button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white px-5 py-2 rounded-lg font-semibold flex items-center">
            <FaHistory className="mr-2" /> View Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
