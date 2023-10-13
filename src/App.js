import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Page/Home';
import About from './components/Page/About';
import Login from './components/Auth/Login';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import ShopByType from './components/ShopByType';
import ShopByBrand from './components/ShopByBrand';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/shopbytype" element={<ShopByType />} />
      <Route path="/shopbybrand" element={<ShopByBrand />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
    </QueryClientProvider>
  );
}

export default App;
