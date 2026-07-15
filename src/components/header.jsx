export default function Header({ cartCount, onCartClick, onNavigate, currentPage }) {
  return (
    <header className="app">
      <div className="logo-nav">
        <h1 onClick={() => onNavigate("home")}>ShopEasy</h1>
        <nav>
          <button className={currentPage === "home" ? "active" : ""} onClick={() => onNavigate("home")}>Home</button>
          <button className={currentPage === "about" ? "active" : ""} onClick={() => onNavigate("about")}>About</button>
          <button className={currentPage === "care" ? "active" : ""} onClick={() => onNavigate("care")}>Customer Care</button>
        </nav>
      </div>
      <button className="cart-btn" onClick={onCartClick}>
        Cart ({cartCount})
      </button>
    </header>
  );
}