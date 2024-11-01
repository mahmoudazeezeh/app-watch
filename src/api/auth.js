// src/api/auth.js
import axiosInstance from './axiosInstance';

// Login Function
export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

// Fetch Current User
export const fetchCurrentUser = async () => {
  try {
    const response = await axiosInstance.get('/auth/me');
    return response.data.user;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch user' };
  }
};

// Update Profile Picture
export const updateProfilePicture = async (profilePictureUrl) => {
  try {
    const response = await axiosInstance.put('/auth/update-profile-picture', { profilePictureUrl });
    return response.data.user;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to update profile picture' };
  }
};
