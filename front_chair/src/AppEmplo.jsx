import React from 'react';
import './App.css';
import Header from './Default/Header';
import Footer from './Default/Footer';
import TabsEmplo from './Tabs/TabsEmplo';
import { useState } from 'react'
import GetProducts from './Components/TableViews/Products/GetProducts';
import GetOrders from './Components/TableViews/Orders/GetOrders';
import GetOrd_det from './Components/TableViews/Ord_det/GetOrd_det';

export default function AppEmplo() {
  const [tab, setTab] = useState('products', 'orders', 'ord_det')
  return (
    <div>
      <Header/>
      <section className='goods'>
      <TabsEmplo active = {tab} onChange = {(current) => setTab(current)}/>
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
