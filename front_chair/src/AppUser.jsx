import React from 'react';
import './App.css';
import Header from './Default/Header'
import Footer from './Default/Footer'
import Basket from './Components/Basket'
import Catalog from './Components/Catalog'
import MenuUser from './Components/MenuUser'

export default function AppUser() {
  return (
    <div>
        <Header/>
        <div className='menu'>
          <MenuUser/>
          <Catalog/>
          <Basket/>
        </div>
        <Footer/>
    </div>
  );
}
