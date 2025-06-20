import React from 'react';
import './App.css';
import Header from './Default/Header';
import Footer from './Default/Footer';
import TabsAdmin from './Tabs/TabsAdmin';
import { useState } from 'react'
import GetUsers from './Components/TableViews/Users/GetUsers';


export default function AppAdmin() {
  const [tab, setTab] = useState('users','products', 'orders', 'ord_det')
  return (
    <div>
      <Header/>
      Страничка запривачена админом магазина стульев!!!1!     
      <section className='goods'>
        <TabsAdmin active = {tab} onChange = {(current) => setTab(current)}/>
          {tab === 'users' &&(
            <GetUsers/> 
            )}
          {tab === 'products' &&(
            <GetUsers/> 
            )}
          {tab ===  'orders' &&(
            <GetUsers/> 
            )}
          {tab === 'ord_det' &&(
            <GetUsers/>
            )}
            </section>
      <Footer/>
    </div>
  );
}
