import React from 'react';
import '../App.css';
import Button from '../Default/Button';

export default function LoginPass() {
  return (
    <div>
      <form>
        <input type ="text" placeholder='Логин'/>
        <input type ="password" placeholder='Пароль'/>
        <Button type ="submit">Войти</Button>
      </form>
    </div>
  );
}
