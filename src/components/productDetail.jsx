export default function ProductDetail({ product, onBack, onAddToCart }) {
  return (
    <div className="product-detail">
      <button className="back-btn" onClick={onBack}>← Back to Shop</button>
      <div className="detail-content">
        <img src={product.image} alt={product.title} />
        <div>
          <h2>{product.title}</h2>
          <p className="category">{product.category}</p>
          <p className="price">${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
          <button className="add-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}