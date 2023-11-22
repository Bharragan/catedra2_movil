import React from 'react';
import ProductRow from './ProductRow';

function ProductTable({ products, onViewProduct, onEditProduct, onDeleteProduct }) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow
              key={product.id} // Asegúrate de tener una propiedad única para cada producto (como id)
              id={product._id}
              name={product.name}
              price={product.price}
              description={product.description}
              onView={() => onViewProduct(product._id)}
              onEdit={() => onEditProduct(product._id)}
              onDelete={() => onDeleteProduct(product._id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
