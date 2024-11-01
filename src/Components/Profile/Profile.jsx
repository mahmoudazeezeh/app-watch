// src/components/Profile/Profile.jsx
import React, { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { updateProfilePicture } from '../../api/auth'; // Import update function
import './Profile.css';

const Profile = () => {
  const { user, login } = useContext(UserContext);
  const [profilePictureUrl, setProfilePictureUrl] = useState(user?.profilePictureUrl || '');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdateProfilePicture = async () => {
    if (!profilePictureUrl) {
      setMessage('Please enter a valid URL.');
      return;
    }

    setLoading(true);
    setMessage('');
    try {
      // Call the update profile picture API
      const updatedUser = await updateProfilePicture(profilePictureUrl);

      if (updatedUser) {
        login(updatedUser, localStorage.getItem('token')); // Update context with new user data
        setMessage('Profile picture updated successfully!');
      } else {
        setMessage('Failed to update profile picture.');
      }
    } catch (error) {
      console.error("Error updating profile picture", error);
      const errorMsg = error.message || 'An error occurred while updating.';
      setMessage(errorMsg);
    }
    setLoading(false);
  };

  if (!user) {
    return <p>Loading profile...</p>;
  }

  return (
    <div className="profile-container">
      <h2>Your Profile</h2>
      <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        <div className="profile-picture-section">
          <img src={user.profilePictureUrl || '/assets/images/default-profile.png'} alt="Profile" className="profile-picture" />
          <div className="update-picture">
            <input 
              type="url" 
              placeholder="New Profile Picture URL" 
              value={profilePictureUrl} 
              onChange={(e) => setProfilePictureUrl(e.target.value)} 
            />
            <button onClick={handleUpdateProfilePicture} disabled={loading}>
              {loading ? "Updating..." : "Update Picture"}
            </button>
          </div>
        </div>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Profile;
