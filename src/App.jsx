import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
// import Home from './components/Home';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { pizzaCart } from './data/pizzas';

function App() {
  const [cart, setCart] = useState(pizzaCart);
  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar total={total} />
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <Cart cart={cart} setCart={setCart} />
      <Footer />
    </div>
  );
}

export default App;
