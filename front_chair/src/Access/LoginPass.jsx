import React from 'react';
import '../App.css';
import './Auth.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../Default/Button';

export default function LoginPass({isActive}) {
  const navigate = useNavigate();
  const [login, SetLogin] = useState('');
  const [password, SetPassword] = useState('');

  async function LP(login, password) {
    const formdata = new FormData();
    formdata.append('login', login)
    formdata.append('password', password)

    const findata = JSON.stringify(Object.fromEntries(formdata))
      if( !password || !login ){alert('Пожайлуста, заполните все поля'); return;}
      try{
        const responce = await fetch('https://localhost:7153/api/v1/users/login', {
          method:"POST",
          headers: {"Accept": "application/json", "Content-Type":  "application/json"},
          body: findata
        })
        const data = await responce.json();
        if(responce.ok){
          localStorage.setItem('body', JSON.stringify(data.users));
          localStorage.setItem('tokenKey', data.token);
          localStorage.setItem('role', data.role);
          if(data.role == 'admin'){
            navigate('/admin_chair')
          }
          else if(data.role == 'emplo') {
            navigate('/staff_chair')
          }
          else{
            navigate('/users_chair/'+ data.users.id_user)
          }
          console.log(data.token);
        }
        if(responce.status === 400) alert("Ошибка 400 (Bad Request)")
      }catch(error){alert("Проблема с сервером " + error)}
  }

  return (
      <form className={`auth-form login-form ${isActive ? '' : 'active'}`} onSubmit={(e) => e.preventDefault()}>
        <h2>Вход</h2>
        <input type ="text" placeholder="Логин" name = "login" onChange={(e) => SetLogin(e.target.value)}></input>
        <input type ="password" placeholder="Пароль" name = "password" onChange={(e) => SetPassword(e.target.value)}></input>
        <Button type ="submit" onClick={() => LP(login, password)}>Войти</Button>
      </form>
  );
}
