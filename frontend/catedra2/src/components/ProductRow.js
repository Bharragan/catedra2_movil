import React from 'react';

function ProductRow({ id, name, price, description, imageUrl, onView, onEdit, onDelete }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{description}</td>
      <td>
        <button className="btn btn-primary" onClick={() => onView(id)}>View</button>
        <button className="btn btn-warning" onClick={() => onEdit(id)}>Edit</button>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>Delete</button>
      </td>
    </tr>
  );
}

export default ProductRow;
