export default function Header({ cartCount, onCartClick, onHomeClick }) {
  return (
    <header className="app">
      <h1 onClick={onHomeClick}>E-Commerce Website</h1>
      <button className="cart-btn" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </header>
  );
}