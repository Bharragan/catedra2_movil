import React, { useState } from 'react';

function ProductModal({ isOpen, onClose, onSave, productToEdit }) {
  const [formData, setFormData] = useState({
    name: productToEdit ? productToEdit.name : '',
    price: productToEdit ? productToEdit.price : 0,
    description: productToEdit ? productToEdit.description : '',
    image: productToEdit ? productToEdit.image : '', // Agrega el campo 'image' con la URL del producto editado
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{productToEdit ? 'Editar Producto' : 'Crear Producto'}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />

          <label htmlFor="price">Precio:</label>
          <input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} required />

          <label htmlFor="description">Descripción:</label>
          <textarea id="description" name="description" value={formData.description} onChange={handleInputChange} required />

          <label htmlFor="image">Imagen URL:</label>
          <input type="text" id="image" name="image" value={formData.image} onChange={handleInputChange} required />

          <button type="submit">{productToEdit ? 'Guardar Cambios' : 'Crear Producto'}</button>
        </form>
      </div>
    </div>
  );
}

export default ProductModal;
