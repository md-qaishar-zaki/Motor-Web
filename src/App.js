import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Products/Products.jsx';  // Change to your correct path
import ProductDetails from './Pages/Product_Details/Project_Details';  // Change to your correct path
import Home from './Pages/home/Home.jsx';  // Ensure Home component is imported
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* This is your Home page */}
        <Route path="/products" element={<Products SectionTitle="Product List" />} /> {/* Products page */}
        <Route path="/product/:id" element={<ProductDetails />} /> {/* Product Details page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
