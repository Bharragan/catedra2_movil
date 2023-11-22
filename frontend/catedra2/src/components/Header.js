import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#3498db', // Puedes cambiar el color a tu preferencia
    color: '#fff', // Color del texto
    padding: '20px',
    textAlign: 'center',
    fontSize: '24px',
  };

  return (
    <div style={headerStyle}>
      <h1>Sistema Cátedra 2</h1>
    </div>
  );
};

export default Header;
