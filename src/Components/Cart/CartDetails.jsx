import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext/ShopContext';
import { FiTrash2 } from 'react-icons/fi';  // Assuming you're using this icon
import { IoMdRemove, IoMdAdd } from 'react-icons/io';  // Assuming these icons are used

const CartDetails = ({ item }) => {
  const { id, title, image, price, amount } = item;
  const { removeFromCart, increaseAmount, decreaseAmount } = useContext(ShopContext);

  return (
    <div className="cart_item">
      <div className="product_detail">
        <img src={image} alt={title} className="product_image" />
        <div className="product_info">
          <h3>{title}</h3>
          <div onClick={() => removeFromCart(id)} className="cart_item_remove">
            <FiTrash2 /> Remove
          </div>
        </div>
      </div>

      <div className="quantity">
        <button onClick={() => decreaseAmount(id)} className="quantity_btn">
          <IoMdRemove />
        </button>
        <span>{amount}</span>
        <button onClick={() => increaseAmount(id)} className="quantity_btn">
          <IoMdAdd />
        </button>
      </div>

      <div className="price">${price}</div>
      <div className="total">${(price * amount).toFixed(2)}</div>
    </div>
  );
};

export default CartDetails;
