import React from 'react';
import './App.css';

export default function LoginPass() {
  return (
    <div>
      <form>
        <input type ="text" placeholder='Логин'/>
        <input type ="password" placeholder='Пароль'/>
        <input type ="submit" value="Войти"/>
      </form>
    </div>
  );
}
