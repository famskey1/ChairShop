import React from 'react';
import '../App.css';
import Button from '../Default/Button'

export default function Basket() {
  return (
      <aside>
        <div className='container'>
          <h1>КОРЗИНА</h1>
          А тут твоя корзина с туего тучей товаров!
        </div> 
        <div className='content'>
          <Button>Оплатить</Button>
          <ul className='basket'>
           <li>
              <h2>Имя товара</h2>
              Описание товара
              <h4>Цена</h4>
              <Button>Выкинуть из корзины</Button>
            </li>
          </ul>
        </div>
        
      </aside>
  );
}
