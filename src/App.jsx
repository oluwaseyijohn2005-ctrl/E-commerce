import { useState, useEffect } from "react";
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";
import CartModal from "./components/cartModal"; // CHANGED
import CheckoutModal from "./components/checkoutModal";
import About from "./components/about";
import Contact from "./components/contact";
import CustomerCare from "./components/customerCare";
import "./App.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState("home");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, newQty) => { // NEW FUNCTION
    if (newQty < 1) {
      removeFromCart(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleCheckout = () => {
    setShowCart(false);
    setShowCheckout(true);
  };

  const handlePlaceOrder = () => {
    alert("Order placed! This is a demo.");
    setCart([]);
    setShowCheckout(false);
  };

  if (loading) return <div className="loading">Loading products...</div>;

  return (
    <div className="app-container">
      <header className="app">
        <div className="logo-nav">
          <h1 onClick={() => { setPage("home"); setSelectedProduct(null); }}>ShopEasy</h1>
          <nav>
            <button className={page === "home" ? "active" : ""} onClick={() => { setPage("home"); setSelectedProduct(null); }}>Home</button>
            <button className={page === "about" ? "active" : ""} onClick={() => { setPage("about"); setSelectedProduct(null); }}>About</button>
            <button className={page === "contact" ? "active" : ""} onClick={() => { setPage("contact"); setSelectedProduct(null); }}>Contact</button>
            <button className={page === "care" ? "active" : ""} onClick={() => { setPage("care"); setSelectedProduct(null); }}>Customer Care</button>
          </nav>
        </div>
        <button className="cart-btn" onClick={() => setShowCart(true)}>
          Cart ({cart.reduce((sum, item) => sum + item.qty, 0)})
        </button>
      </header>

      <main>
        {page === "home" && !selectedProduct && (
          <ProductList
            products={products}
            onAddToCart={addToCart}
            onSelectProduct={setSelectedProduct}
          />
        )}

        {page === "home" && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onAddToCart={addToCart}
            onBack={() => setSelectedProduct(null)}
          />
        )}

        {page === "about" && <About />}
        {page === "contact" && <Contact />}
        {page === "care" && <CustomerCare />}
      </main>

      {showCart && (
        <CartModal // CHANGED
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setShowCart(false)}
          onUpdateQty={updateQty} // NEW PROP
          onRemove={removeFromCart}
          onCheckout={handleCheckout}
        />
      )}

      {showCheckout && (
        <CheckoutModal
          cart={cart}
          cartTotal={cartTotal}
          onClose={() => setShowCheckout(false)}
          onPlaceOrder={handlePlaceOrder}
        />
      )}
    </div>
  );
}