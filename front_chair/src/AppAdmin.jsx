import React from 'react';
import './App.css';
import Header from './Default/Header';
import Footer from './Default/Footer';
import TabsAdmin from './Tabs/TabsAdmin';
import { useState } from 'react'
import GetUsers from './Components/TableViews/Users/GetUsers';
import GetProducts from './Components/TableViews/Products/GetProducts';
import GetOrders from './Components/TableViews/Orders/GetOrders';
import GetOrd_det from './Components/TableViews/Ord_det/GetOrd_det';

export default function AppAdmin() {
  const [tab, setTab] = useState('users','products', 'orders', 'ord_det')
  return (
    <div>
      <Header/>   
      
        <TabsAdmin active = {tab} onChange = {(current) => setTab(current)}/>
          <section className='goods'>{tab === 'users' &&(
              <div className='content'><GetUsers/></div>
            )}
          {tab === 'products' &&(
             <div className='content'><GetProducts/> </div>
            )}
          {tab ===  'orders' &&(
             <div className='content'><GetOrders/> </div>
            )}
          {tab === 'ord_det' &&(
             <div className='content'><GetOrd_det/></div>
            )}
            </section>
      <Footer/>
    </div>
  );
}
