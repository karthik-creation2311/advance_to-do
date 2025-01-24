import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="bg-light min-vh-100">
      {children}
    </div>
  );
};

export default Layout;