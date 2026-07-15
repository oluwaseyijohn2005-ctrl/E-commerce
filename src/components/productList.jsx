export default function ProductList({ products, onAddToCart, onSelectProduct }) {
  return (
    <div>
      <h2 className="products-title">Available Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.title} 
              className="product-image" 
              onClick={() => onSelectProduct(product)} // click image to view details
              style={{cursor: 'pointer'}}
            />
            <h3 onClick={() => onSelectProduct(product)} style={{cursor: 'pointer'}}>{product.title}</h3>
            <p className="price">${product.price}</p>
            <div className="product-buttons">
              <button className="btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
              <button className="btn" onClick={() => onSelectProduct(product)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}