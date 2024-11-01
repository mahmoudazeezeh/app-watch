// src/api/products.js
import axiosInstance from './axiosInstance';

// Fetch All Products
export const getAllProducts = async () => {
  try {
    const response = await axiosInstance.get('/products');
    return response.data.products;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to fetch products' };
  }
};

// Add New Product
export const addProduct = async (productData) => {
  try {
    const response = await axiosInstance.post('/products', productData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.product;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to add product' };
  }
};
