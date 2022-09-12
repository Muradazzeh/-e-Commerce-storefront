import * as React from 'react';
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";
import Button from '@mui/material/Button';
import ResponsiveAppBar from './componants/Header'
import Footer from './componants/Footer'
import Catagories from './componants/Categories'
import Products from './componants/products'
import CartItem from './componants/simpleCart'
import Checkout from './componants/checkout'
import Details from './componants/productDetails'
import './App.css';

function App() {
  return (
    <>
      <Router>
<ResponsiveAppBar/>



<Routes>
<Route path="/"  element={[<Catagories/>,<Products/>]}/>
<Route path="/cart" element={<CartItem/>}/>
<Route path="/checkout" element={<Checkout/>}/>
<Route path="/details" element={<Details/>}/>

</Routes>
<Footer/>
</Router>
</>
  );
}

export default App;
