import * as React from 'react';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './componants/Header'
import Footer from './componants/Footer'
import Catagories from './componants/Categories'
import Products from './componants/products'
import './App.css';

function App() {
  return (
    <>
<ResponsiveAppBar/>
<Catagories/>
<Products/>

<Footer/>
</>
  );
}

export default App;
