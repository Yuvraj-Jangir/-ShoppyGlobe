import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../redux/productSlice";
import "../styles/Header.css";

const Header = () => {
  const cartItems = useSelector(state => state.cart.items);
  const searchTerm = useSelector(state => state.products.searchTerm);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <header className="header">
      <div className="logo-nav">
        <Link to="/">ShoppyGlobe</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart ({cartItems.length})</Link>
        </nav>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};

export default Header;
