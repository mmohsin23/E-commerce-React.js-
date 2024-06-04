import './App.scss';
import Navbar from './components/navbar/navbar';
import ShopPage from './pages/shopPage';
import Footer from './pages/footer';
import ReviewSlider from './components/reviewSlider';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductSlider from './components/productSlider'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ShopPage />} />
          <Route path="/login" element={<loginSignup/>} />
          <Route path="/shop" element={[<ReviewSlider />,<ProductSlider />]} />
          <Route path="/about" element={<aboutUs/>} />
          <Route path="/contact" element={<contactUs/>} />
          <Route path="/product" element={<products/>}>
            <Route path=':productId' element={<product/>} />
          </Route>
          <Route path="/cart" element={<cart/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
