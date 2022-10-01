import './App.css';
import {Routes  ,Route} from 'react-router-dom' ;
import Navbarr from './component/Navbar';

import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Login from './component/Login';
import 'react-loading-skeleton/dist/skeleton.css'
import Register from './component/Register';

function App() {
  return (
    <> 
      <Navbarr/> 
    <Routes >
     <Route exact path="/" element={<Home/>}/>
     <Route  path="/products" element={<Products/>}/>
     <Route  path="/products/:id" element={<Product/>}/>
     <Route  path="/cart" element={<Cart/>}/>
     <Route  path="/checkout" element={<Checkout/>}/>
     <Route  path="/login" element={<Login/>}/>
     <Route  path="/register" element={<Register/>}/>



  

    </Routes >
      
    </>
  );
}

export default App;
