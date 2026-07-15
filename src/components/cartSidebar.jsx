export default function CartSidebar({ cart, cartTotal, onClose, onRemove, onCheckout }) {
  return (
    <div className="overlay">
      <div className="cart-sidebar">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? <p>Cart is empty</p> : (
          <>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt="" />
                <div>
                  <p>{item.title}</p>
                  <p>Qty: {item.qty} x ${item.price}</p>
                </div>
                <button onClick={() => onRemove(item.id)}>Remove</button>
              </div>
            ))}
            <h3>Total: ${cartTotal.toFixed(2)}</h3>
            <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
          </>
        )}
      </div>
    </div>
  );
}