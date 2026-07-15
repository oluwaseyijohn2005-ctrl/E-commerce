export default function CheckoutModal({ cart, cartTotal, onClose, onPlaceOrder }) {
  const [form, setForm] = useState({ name: '', card: '', address: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onPlaceOrder();
  }

  return (
    <div className="overlay" onClick={onClose}>
      <div className="checkout-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        
        <div className="checkout-header">
          <h2>Secure Checkout</h2>
          <p>Complete your order in 30 seconds</p>
        </div>

        <div className="checkout-body">
          {/* ORDER SUMMARY */}
          <div className="order-summary">
            <h3>Order Summary</h3>
            {cart.map(item => (
              <div key={item.id} className="summary-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <p>{item.title}</p>
                  <small>Qty: {item.qty}</small>
                </div>
                <span>${(item.price * item.qty).toFixed(2)}</span>
              </div>
            ))}
            <div className="summary-total">
              <p>Total</p>
              <h3>${cartTotal.toFixed(2)}</h3>
            </div>
          </div>

          {/* FORM */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h3>Shipping & Payment</h3>
            
            <label>Full Name</label>
            <input 
              type="text" 
              name="name" 
              placeholder="John Doe" 
              value={form.name}
              onChange={handleChange}
              required 
            />

            <label>Shipping Address</label>
            <input 
              type="text" 
              name="address" 
              placeholder="123 Main St, Ilorin, NG" 
              value={form.address}
              onChange={handleChange}
              required 
            />

            <label>Card Number</label>
            <input 
              type="text" 
              name="card" 
              placeholder="4242 4242 4242 4242" 
              value={form.card}
              onChange={handleChange}
              required 
            />

            <div className="form-row">
              <div>
                <label>Expiry</label>
                <input type="text" placeholder="MM/YY" required />
              </div>
              <div>
                <label>CVV</label>
                <input type="text" placeholder="123" required />
              </div>
            </div>

            <button type="submit" className="btn place-order-btn">
              Place Order - ${cartTotal.toFixed(2)}
            </button>
            <p className="demo-note">* This is a demo. No real payment will be made</p>
          </form>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";