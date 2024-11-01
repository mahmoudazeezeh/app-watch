// src/api/sales.js
import axiosInstance from './axiosInstance';

// Add to Cart
export const addToCart = async (productId) => {
  try {
    const response = await axiosInstance.post('/cart', { productId });
    return response.data.cart;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to add to cart' };
  }
};

// Fetch Cart Items
export const getCartItems = async () => {
  try {
    const response = await axiosInstance.get('/cart');
    return response.data.cart;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch cart items' };
  }
};

// Remove Item from Cart
export const removeFromCart = async (itemId) => {
  try {
    const response = await axiosInstance.delete(/cart/${itemId});
    return response.data.cart;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to remove item from cart' };
  }
};

// Purchase Items
export const purchaseItems = async () => {
  try {
    const response = await axiosInstance.post('/purchase');
    return response.data.order; // Assuming order details are returned
  } catch (error) {
    throw error.response?.data || { message: 'Failed to purchase items' };
  }
};
