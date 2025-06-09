import React from 'react';
import './App.css';
import typicalUser from './Assets/typicalUser.jpg'
export default function MenuUser() {
  return (
      <nav>
        <h1>Ваш аккаунт</h1>
        <img src={typicalUser} className='imgUser'/>
        Хотите до нас достучаться? Не стоит ребят! Мы дурачьё!
      </nav>
  );
}