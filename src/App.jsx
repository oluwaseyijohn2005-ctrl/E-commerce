import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import ProductList from "./components/productList";
import ProductDetail from "./components/productDetail";
import CartSidebar from "./components/cartSidebar";
import CheckoutModal from "./components/checkoutModal";
import About from "./components/about";
import CustomerCare from "./components/customerCare";

function App() {
  const ProductUrl = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home"); // "home" | "about" | "care"

  useEffect(() => {
    fetch(ProductUrl)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
    alert(`${product.title} added to cart`);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const handleFakePayment = (e) => {
    e.preventDefault();
    alert(`Payment Successful! \nOrder Total: $${cartTotal.toFixed(2)} \nThis is a demo.`);
    setCart([]);
    setShowCheckout(false);
    setShowCart(false);
  };

  const goHome = () => {
    setPage("home");
    setSelectedProduct(null);
  }

  if (loading) return <h2 className="loading">Loading products...</h2>;

  return (
    <div className="app-container">
      <Header 
        cartCount={cartCount} 
        onCartClick={() => setShowCart(true)} 
        onNavigate={setPage}
        currentPage={page}
        onHomeClick={goHome}
      />

      {/* PAGE ROUTING */}
      {page === "home" && (
        selectedProduct ? (
          <ProductDetail 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
            onAddToCart={addToCart} 
          />
        ) : (
          <ProductList 
            products={products} 
            onSelectProduct={setSelectedProduct} 
            onAddToCart={addToCart} 
          />
        )
      )}

      {page === "about" && <About />}
      {page === "care" && <CustomerCare />}

      {/* CART SIDEBAR */}
      {showCart && (
        <CartSidebar 
          cart={cart} 
          cartTotal={cartTotal} 
          onClose={() => setShowCart(false)} 
          onRemove={removeFromCart}
          onCheckout={() => setShowCheckout(true)}
        />
      )}

      {/* CHECKOUT MODAL */}
      {showCheckout && (
        <CheckoutModal 
          cartTotal={cartTotal} 
          onClose={() => setShowCheckout(false)} 
          onPay={handleFakePayment}
        />
      )}
    </div>
  );
}

export default App;