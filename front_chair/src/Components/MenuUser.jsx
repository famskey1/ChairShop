import React from 'react';
import '../App.css';
import typicalUser from '../Assets/typicalUser.jpg'

export default function MenuUser() {
  return (
      <nav>
        <div className='container'>
          <h1>Ваш аккаунт</h1>
          <img src={typicalUser} className='imgUser'/>
          Приветвую, пользователь! Хороших вам покупок!
        </div>
      </nav>
  );
}
