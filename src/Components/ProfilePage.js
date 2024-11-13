// ProfilePage.js
import React from 'react';

const ProfilePage = () => {
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p className="text-lg mb-4">Name: John Doe</p>
      <p className="text-lg mb-4">Email: johndoe@example.com</p>
      <h3 className="text-lg font-bold mb-2">Skills:</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
};

export default ProfilePage;