import React from 'react';
import './App.css';
import Register from './Access/Register';
import LoginPass from './Access/LoginPass';
import Header from './Default/Header';
import Footer from './Default/Footer';
import Basket from './Components/Basket';
import MenuUser from './Components/MenuUser';
import ProductDetails from './Components/ProductDetails';

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
  )
}
