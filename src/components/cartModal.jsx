export default function CartModal({ cart, cartTotal, onClose, onUpdateQty, onRemove, onCheckout }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Your Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">Cart is empty</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-info">
                    <h4>{item.title}</h4>
                    <p className="cart-price">${item.price.toFixed(2)}</p>
                    
                    <div className="qty-controls">
                      <button onClick={() => onUpdateQty(item.id, item.qty - 1)}>-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button className="remove-btn" onClick={() => onRemove(item.id)}>Delete</button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <h3>Total: ${cartTotal.toFixed(2)}</h3>
              <button className="btn checkout-btn" onClick={onCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}