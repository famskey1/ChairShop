import React from 'react';
import '../App.css';

export default function Register() {
  return (
    <div>
      <form>
        <input type ="text" placeholder='Имя' />
        <input type ="text" placeholder='Фамилия'/>
        <input type ="text" placeholder='Отчество'/>
        <input type ="text" placeholder='Логин'/>
        <input type ="password" placeholder='Пароль'/>
        <input type ="text" placeholder='Адрес доставки на дом'/>
        <input type ="submit" value="Зарегистрироваться"/>
      </form>
    </div>
  );
}

