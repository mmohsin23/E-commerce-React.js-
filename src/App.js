import './App.scss';
import Navbar from './components/navbar/navbar';
import ShopPage from './pages/shopPage';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ShopPage />
        <Routes>
          <Route path="/" element={<shopPage/>} />
          <Route path="/login" element={<loginSignup/>} />
          <Route path="/shop " element={<shopCategory/>} />
          <Route path="/about" element={<aboutUs/>} />
          <Route path="/contact" element={<contactUs/>} />
          <Route path="/product" element={<products/>}>
            <Route path=':productId' element={<product/>} />
          </Route>
          <Route path="/cart" element={<cart/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;