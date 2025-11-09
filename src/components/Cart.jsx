import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../styles/Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  if (cartItems.length === 0) return <p>Your cart is empty</p>;

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Link to="/checkout">
        <button>Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
