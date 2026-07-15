export default function ProductList({ products, onSelectProduct, onAddToCart }) {
  return (
    <>
      <h2 className="products-title">Available Products</h2> {/* CHANGED HERE */}
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p className="price">${product.price.toFixed(2)}</p>
            <div className="product-buttons">
              <button 
                className="btn" 
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
              >
                Add to Cart
              </button>
              <button 
                className="btn" 
                onClick={() => onSelectProduct(product)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}