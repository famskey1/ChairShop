import React from 'react';
import './App.css';
import Register from './Register';
import LoginPass from './LoginPass';
import Header from './Header';
import Basket from './Basket';
import MenuUser from './MenuUser';
import ProductDetails from './ProductDetails';
import Footer from './Footer';


export default function App() {
  return (
    <div>
      <Header/>
      <Register/>
      <LoginPass/>
      <ProductDetails/>
      <MenuUser/>
      <Basket/>
      <Footer/>
    </div>
  );
}

