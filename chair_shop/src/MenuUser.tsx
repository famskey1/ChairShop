import React from 'react';
import './App.css';
import typicalUser from './Assets/typicalUser.jpg'
export default function MenuUser() {
  return (
    <div>
      <nav>
        <h1>Ваш аккаунт</h1>
        <div>
          <img src={typicalUser}/>
        </div>
        Хотите до нас достучаться? Не стоит ребят! Мы дурачьё!
      </nav>
      
    </div>
  );
}