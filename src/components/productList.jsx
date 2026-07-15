export default function ProductList({ products, onSelectProduct }) {
  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-card" onClick={() => onSelectProduct(product)}>
          <img src={product.image} alt={product.title} className="product-image" />
          <h3>{product.title}</h3>
          <p>${product.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}