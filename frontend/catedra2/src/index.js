import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css'; // Ajusta la ruta según la ubicación de tu archivo de estilos
import ProductManagement from './components/ProductManagement';

ReactDOM.render(
  <React.StrictMode>
    <ProductManagement />
  </React.StrictMode>,
  document.getElementById('root')
);
