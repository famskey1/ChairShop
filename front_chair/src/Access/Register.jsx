import React from 'react';
import '../App.css';
import './Auth.css'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../Default/Button';

export default function Register({isActive}) {
  const navigate = useNavigate();
    
  async function HandleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const users = Object.fromEntries(formData.entries());

        if(!users.name || !users.surname || !users.login || !users.password || !users.address)
            {alert("Пожайлуста, заполните все поля!"); return;}
        try{
            const responce = await fetch("https://localhost:7153/api/v1/users", {
                method: "POST", 
                headers:{"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({
                    name: users.name,
                    surname: users.surname,
                    secondname: users.secondname,
                    login: users.login,
                    password: users.password,
                    address: users.address,
                    role: "user"
                })
            })

            await responce.json();
            if(responce.ok) navigate("/users_chair")
                if(responce.status === 400){alert("Ошибка 400 (Bad Request)")}
        } catch(error){
            alert("Проблема с сервером " + error)
        }
    }

  return (
      <form onSubmit={HandleSubmit} className={`auth-form register-form ${isActive ? 'active' : ''}`}>
        <h2>Регистрация</h2>
        <input type ="text" placeholder="Имя" name = "name"></input>
        <input type ="text" placeholder="Фамилия" name = "surname"></input>
        <input type ="text" placeholder="Отчество (если есть)" name = "secondname"></input>
        <input type ="text" placeholder="Логин" name = "login"></input>
        <input type ="password" placeholder="Пароль" name = "password"></input>
        <input type ="text" placeholder="Адрес доставки на дом" name = "address"></input>
        <Button type ="submit">Зарегистрироваться</Button>
      </form>
  );
}
