import React from 'react';

function ProductDetailModal({ isOpen, onClose, product }) {
  if (!isOpen || !product) {
    return null;
  }

  return (
    <div className="modal open">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Detalles del Producto</h2>
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> {product.price}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: '200px', height: '200px' }} // Fija el tamaño de la imagen a 200x200 píxeles
        />
      </div>
    </div>
  );
}

export default ProductDetailModal;
