/*import React, { useContext, useState } from 'react';
import { BiCart, BiSearch, BiUser } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import './Navbar.css';
import { ShopContext } from '../ShopContext/ShopContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // Scroll event to change navbar style
  window.addEventListener("scroll", function () {
    const navbar = this.document.querySelector(".navbar");
    navbar.classList.toggle("active", this.window.scrollY > 100);
  });

  // Use ShopContext to access searchProducts
  const { searchProducts,setHeroVisible,itemAmount } = useContext(ShopContext);
  
  // State for search query
  const [query, setQuery] = useState('');  // Use square brackets for useState

  // Handle search input change
  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchProducts(e.target.value);
  };
  
const handleClick = ()=>{
  setHeroVisible(false)
}

const handleCancelClich =() =>{
  setHeroVisible(true);
}


  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h2>WATCH STORE</h2>
        </div>
        <div className="search">
          <BiSearch className="search_icon" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            onClick={handleClick}
            placeholder="Search for anything ...."
          />
          <MdCancel onClick={handleCancelClich} className="cancel" />
        </div>
        <div className="nav_icon_wrapper">
          <Link to='/cart'>
          <div className="nav_cart">
            <BiCart className="nav_icon" />
            <p className="nav_cart_amount"> {itemAmount}</p>
          </div>
          </Link>
          <BiUser className="nav_icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;*/

/************************ */
// Navbar.jsx

import React, { useContext, useState } from 'react';
import { BiCart, BiSearch, BiUser, BiMenu, BiX } from 'react-icons/bi';
import { MdCancel } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { ShopContext } from '../ShopContext/ShopContext';

const Navbar = () => {
  const { searchProducts, setHeroVisible, itemAmount } = useContext(ShopContext);
  const [query, setQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle search input change
  const handleSearch = (e) => {
    setQuery(e.target.value);
    searchProducts(e.target.value);
  };

  // Handle click on search input
  const handleClick = () => {
    setHeroVisible(false);
  };

  // Handle cancel search
  const handleCancelClick = () => {
    setHeroVisible(true);
    setQuery('');
    searchProducts('');
  };

  // Handle profile (login) click
  const handleProfileClick = () => {
    navigate('/login');
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        {/* Logo */}
        <div className="logo">
          <h2>WATCH STORE</h2>
        </div>

        {/* Search Bar (Visible on Desktop) */}
        <div className="search">
          <BiSearch className="search_icon" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            onClick={handleClick}
            placeholder="Search for anything..."
          />
          {query && <MdCancel onClick={handleCancelClick} className="cancel" />}
        </div>

        {/* Icons (Visible on Desktop) */}
        <div className="nav_icon_wrapper">
          <Link to="/cart" onClick={closeMobileMenu} className="nav_cart">
            <BiCart className="nav_icon" />
            {itemAmount > 0 && <p className="nav_cart_amount">{itemAmount}</p>}
          </Link>
          <BiUser className="nav_icon" onClick={handleProfileClick} />
        </div>

        {/* Hamburger Menu Icon (Visible on Mobile) */}
        <div
          className="hamburger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <BiX /> : <BiMenu />}
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && <div className="backdrop active" onClick={closeMobileMenu}></div>}

      {/* Mobile Menu */}
      <div className={`mobile_menu ${isMobileMenuOpen ? 'active' : ''}`}>
        {/* Mobile Search Bar */}
        <div className="mobile_search">
          <BiSearch className="search_icon" />
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            onClick={handleClick}
            placeholder="Search for anything..."
          />
          {query && <MdCancel onClick={handleCancelClick} className="cancel" />}
        </div>

        {/* Cart Link */}
        <Link to="/cart" onClick={closeMobileMenu}>
          <div>
            <BiCart />
            Cart ({itemAmount})
          </div>
        </Link>

        {/* Login Link */}
        <div onClick={handleProfileClick}>
          <BiUser />
          Login
        </div>
      </div>
    </>
  );
};

export default Navbar;
