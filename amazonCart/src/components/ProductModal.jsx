function ProductModal({ product, isOpen, onClose }) {
  if (!isOpen || !product) return null;

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal-title">{product.name.substring(0, 21)}</h2>
        <div className="modal-content">
          <div className="image-container">            
            <img
              src={product.img}
              alt={product.name}
              className="modal-img"
            />
          </div>
          <div className="modal-details">
            <p className="price">₹{product.price.toFixed(2)}</p>
          </div>
        </div>
        <div className="button-container">
          <button className="btn-addToCart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;