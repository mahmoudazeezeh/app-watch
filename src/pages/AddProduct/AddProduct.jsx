import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsData } from '../../data'; // افتراض أنك تستعمل productsData لتخزين المنتجات
import './AddProduct.css';

const AddProduct = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // لتخزين الصورة التي تم تحميلها
  const [imagePreview, setImagePreview] = useState(null); // لمعاينة الصورة
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!image) {
      alert("Please upload an image.");
      return;
    }

    // إنشاء منتج جديد
    const newProduct = {
      id: productsData.length + 1, // توليد ID جديد
      title,
      price: parseFloat(price),
      description,
      image: URL.createObjectURL(image), // استخدام صورة محملة من الجهاز
    };

    // إضافة المنتج الجديد إلى قائمة المنتجات
    productsData.push(newProduct);

    // الرجوع إلى صفحة قائمة المنتجات
    navigate('/');
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file)); // إنشاء رابط لمعاينة الصورة
  };

  return (
    <div className="add-product-container">
      <h2 className="add-product-title">Add New Product</h2>
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Title</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
            className="form-input" 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Price</label>
          <input 
            type="number" 
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
            required 
            className="form-input" 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
            className="form-textarea" 
          />
        </div>
        <div className="form-group">
          <label className="form-label">Upload Image</label>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageUpload} 
            required 
            className="form-input" 
          />
        </div>

        {imagePreview && (
          <div className="image-preview">
            <p>Image Preview:</p>
            <img src={imagePreview} alt="Product Preview" className="image-preview-img" />
          </div>
        )}

        <button type="submit" className="submit-button">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
