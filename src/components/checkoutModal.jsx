export default function CheckoutModal({ cartTotal, onClose, onPay }) {
  return (
    <div className="overlay">
      <div className="checkout-modal">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Demo Checkout</h2>
        <form onSubmit={onPay}>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Card Number 4242 4242 4242 4242" required />
          <div className="row">
            <input type="text" placeholder="MM/YY" required />
            <input type="text" placeholder="CVC" required />
          </div>
          <p><b>Total: ${cartTotal.toFixed(2)}</b></p>
          <button type="submit">Pay Now</button>
        </form>
      </div>
    </div>
  );
}