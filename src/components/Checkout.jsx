import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import "../styles/Checkout.css";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Calculate total price
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <h2>Order Summary</h2>
        {cartItems.map((item) => (
          <p key={item.id}>
            {item.title} x {item.quantity} = ${item.price * item.quantity}
          </p>
        ))}

        <h3>Total: ${total.toFixed(2)}</h3>

        <button type="submit" onClick={handleOrder}>
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
