import React, { useContext } from 'react';
import './ProductList.css';
import { ShopContext } from '../ShopContext/ShopContext';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const { filteredProducts, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className="product_list">
      <h2>Our Elegant Collections</h2>
      <div className="product_grid">
        {filteredProducts.map((product) => {
          const { id, image, title, price } = product;
          return (
            <div className="product_card" key={id}>
              <Link to={`/product/${id}`}>
                <img src={image} alt={title} className="product_image" />
                <div className="product_info">
                  <h4>{title}</h4>
                  <p>${price}</p>
                </div>
              </Link>
              <button onClick={() => addToCart(product, id)} className="add-to-cart">
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* زر "+" لإضافة منتج جديد */}
      <button className="add_product_button" onClick={() => navigate('/add-product')}>
        +
      </button>
    </div>
  );
};

export default ProductList;
