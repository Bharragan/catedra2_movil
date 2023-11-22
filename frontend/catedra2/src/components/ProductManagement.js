import React, { useState, useEffect } from "react";
import ProductTable from "./ProductTable";
import ProductModal from "./ProductModal";
import ProductDetailModal from "./ProductDetailModal"; // Nuevo componente para mostrar detalles

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/api/products`);
      if (!response.ok) {
        throw new Error("Error al obtener productos");
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDeleteProduct = async (productId) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      const response = await fetch(`${apiUrl}/api/products/${productId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Actualiza el estado de 'products' después de eliminar el producto
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
        // Vuelve a obtener la lista de productos después de eliminar
        fetchProducts();
      } else {
        console.error("Error al eliminar el producto:", response.statusText);
      }
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product._id === productId);
    setSelectedProduct(productToEdit);
    setIsModalOpen(true);
  };

  const handleViewProduct = (productId) => {
    const productToShow = products.find((product) => product._id === productId);
    setSelectedProduct(productToShow);
    setIsDetailModalOpen(true);
  };

  const handleCreateProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveProduct = async (formData) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL;
      let requestOptions;

      // Si selectedProduct tiene un valor, se está editando, usa PUT
      if (selectedProduct) {
        requestOptions = {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...selectedProduct,
            ...formData,
          }),
        };
      } else {
        // Si selectedProduct es null, se está creando, usa POST
        requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        };
      }

      const response = await fetch(
        `${apiUrl}/api/products${
          selectedProduct ? `/${selectedProduct._id}` : ""
        }`,
        requestOptions
      );
      if (response.ok) {
        // Recargar la lista de productos después de guardar
        fetchProducts();
        // Cerrar el modal después de guardar
        setIsModalOpen(false);
      } else {
        throw new Error("Error al guardar el producto");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {isLoading && <p>Cargando productos...</p>}
      {error && <p>Error: {error}</p>}

      <button onClick={handleCreateProduct} className="btn btn-primary">
        Crear Producto
      </button>

      <ProductTable
        products={products}
        onViewProduct={handleViewProduct}
        onEditProduct={handleEditProduct}
        onDeleteProduct={handleDeleteProduct}
      />

      {isModalOpen && (
        <ProductModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSave={handleSaveProduct}
          productToEdit={selectedProduct}
        />
      )}

      {isDetailModalOpen && (
        <ProductDetailModal
          isOpen={isDetailModalOpen}
          onClose={() => setIsDetailModalOpen(false)}
          product={selectedProduct}
        />
      )}
    </div>
  );
}

export default ProductManagement;
