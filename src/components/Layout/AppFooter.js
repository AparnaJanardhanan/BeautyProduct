import React from 'react';

const AppFooter = () => {
  return (
    <footer className="bottom-0 left-0 right-0 bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} Shop Now</p>
    </footer>
  );
};

export default AppFooter;
