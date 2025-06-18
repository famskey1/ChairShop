import React from 'react';
import '../App.css';
import typicalUser from '../Assets/typicalUser.jpg'
import Button from '../Default/Button';
import Basjun from '../Assets/baskjun.png';

export default function Catalog() {
  return (
    <section className='goods'>
      <div className='container'>
        <h2>Тут будет список товаров о стульях</h2>
        Выберете себе стул по душе!
      </div>
      <div className='content'>
        <ul>
          <li>
            <img src = {Basjun} className='imgCatalog'></img>
            <h2>Имя товара</h2>
            Описание товара
            <h4>Цена</h4>
              <Button>Положить в корзину</Button>
          </li>
        </ul>
      </div>
    </section>
  );
}
