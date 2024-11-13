import React from 'react';

const ProfilePage = () => {
  // Sample data for the user (You can replace this with actual data)
  const user = {
    name: 'Manoj Bhatti',
    email: 'mbhatti9912@gmail.com',
    joinedDate: 'January 1, 2023',
    skillsOffered: 5,
    skillsRequested: 3,
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 py-12">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">Your Profile</h1>

        {/* Profile Information Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-800">Welcome, {user.name}!</h2>
            <p className="text-lg text-gray-700 mt-2">Email: <span className="font-semibold">{user.email}</span></p>
            <p className="text-lg text-gray-700">Joined: <span className="font-semibold">{user.joinedDate}</span></p>
          </div>

          {/* User Avatar */}
          <div className="w-40 h-40 rounded-full bg-gradient-to-r from-yellow-500 to-red-500 flex items-center justify-center text-white text-3xl font-bold">
            MB
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Skills Offered</h3>
            <p className="text-6xl font-extrabold">{user.skillsOffered}</p>
          </div>
          <div className="bg-green-600 text-white p-8 rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Skills Requested</h3>
            <p className="text-6xl font-extrabold">{user.skillsRequested}</p>
          </div>
        </div>

        {/* Profile Actions Section */}
        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Manage Your Profile</h2>
          <div className="flex justify-center space-x-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-md font-bold">
              Edit Profile
            </button>
            <button className="bg-red-400 hover:bg-red-500 text-white px-6 py-3 rounded-md font-bold">
              Change Password
            </button>
            <button className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-md font-bold">
              View Activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
