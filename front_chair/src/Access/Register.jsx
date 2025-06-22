import React from 'react';
import '../App.css';
import './Auth.css'
import Button from '../Default/Button';
import Check from './Check';

export default function Register({isActive}) {
 
  async function HandleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const users = Object.fromEntries(formData.entries());

        if(!users.name_user || !users.surname_user || !users.login || !users.password || !users.address)
            {alert("Пожайлуста, заполните все поля!"); return;}
        Check(users.password);
        
        try{
            const responce = await fetch("https://localhost:7153/api/v1/users", {
                method: "POST", 
                headers:{"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({
                    name_user: users.name_user,
                    surname_user: users.surname_user,
                    secondname_user: users.secondname_user,
                    login: users.login,
                    password: users.password,
                    address: users.address,
                    role: "user"
                })
            })
            await responce.json();
            if(responce.ok){
                alert('Успешно! Теперь перейдите во вкладку Войти и введите данные!');
            } 
                if(responce.status === 400){alert("Ошибка 400 (Bad Request)")}
        } catch(error){
            alert("Проблема с сервером " + error)
        }
    }

  return (
      <form onSubmit={HandleSubmit} className={`auth-form register-form ${isActive ? 'active' : ''}`}>
        <h2>Регистрация</h2>
        <input type ="text" placeholder="Имя" name = "name_user"></input>
        <input type ="text" placeholder="Фамилия" name = "surname_user"></input>
        <input type ="text" placeholder="Отчество (если есть)" name = "secondname_user"></input>
        <input type ="text" placeholder="Логин" name = "login"></input>
        <div className='smallWords'>
            Пароль должен быть длинной более 8ми символов, а также иметь цифры, заглавные и маленькие латинские буквы!
        </div>
        <input type ="password" placeholder="Пароль" name = "password" ></input>
        <input type ="text" placeholder="Адрес доставки на дом" name = "address"></input>
        <Button type ="submit">Зарегистрироваться</Button>
      </form>
  );
}
