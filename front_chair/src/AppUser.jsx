import React from 'react';
import './App.css';
import Header from './Default/Header'
import Footer from './Default/Footer'
import CatalogAndBasket from './Components/CatalogAndBasket'
import MenuUser from './Components/MenuUser'

export default function AppUser() {
  return (
    <div>
        <Header/>
        <div className='menu'>
          <MenuUser/>
          <CatalogAndBasket/>
        </div>
        <Footer/>
    </div>
  );
}
