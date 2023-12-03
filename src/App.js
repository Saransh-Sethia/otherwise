
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home cart={cart} setCart={setCart} />}></Route>
        <Route path="/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}></Route>
      </Routes>

    </div>
  );
}

export default App;
