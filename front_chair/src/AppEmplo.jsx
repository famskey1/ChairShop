import React from 'react';
import './App.css';
import Header from './Default/Header';
import Footer from './Default/Footer';
import TabsEmplo from './Tabs/TabsEmplo';
import { useState } from 'react'
import GetUsers from './Components/TableViews/Users/GetUsers';
import Button from './Default/Button';

export default function AppEmplo() {
  const [tab, setTab] = useState('products', 'orders', 'ord_det')
  return (
    <div>
      <Header/>
      Страничка запривачена сотрудниками магазина стульев!!!1!
      <section className='goods'>
      <TabsEmplo active = {tab} onChange = {(current) => setTab(current)}/>
        {tab === 'products' &&(
                <GetUsers/> 
            )}
           {tab ===  'orders' &&(
                <GetUsers/> 
            )}
            {tab === 'ord_det' &&(
                <GetUsers/>
            )}
        
        {/* <ul>
          <li>
            <h2>Имя товара</h2>
            Описание товара
            <h4>Цена</h4>
            <Button>Выкинуть из корзины</Button>
            <Button>Выкинуть из корзины</Button>
          </li>
        </ul> */}

      </section>
      <Footer/>
    </div>
  );
}
