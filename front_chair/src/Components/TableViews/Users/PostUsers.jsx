import { useEffect, useState } from "react";
import Button from "../../../Default/Button";

export default function PostUsers(){

    async function HandleSubmit(event){
        event.preventDefault();

        const formData = new FormData(document.getElementById('post'));
        const users = Object.fromEntries(formData.entries());

        if(!users.name || !users.surname || !users.login || !users.password)
        {allert("Пожайлуста, заполните все поля!"); return;}
        try{
            const responce = await fetch('https://localhost:7153/api/v1/users', {
                method:"POST",
                headers:{"Accept": "application/json", "Content-Type": "application/json"},
                body: JSON.stringify({
                    name: users.name,
                    surname: users.surname,
                    secondname: users.secondname,
                    login: users.login,
                    password: users.password,
                    adress: users.adress,
                    role: users.role
                })
            });

            await responce.json();
            if(responce.ok) allert("Успешно!")
                if(responce.status === 400){allert("Ошибка 400 (Bad Request)")}
        }catch(error){
            alert("Проблема с сервером " + error)
        }
    }
    return(
        <>
        <form onSybmit={HandleSubmit}>
            <input type="text" placeholder="Имя" name ="name"></input>
            <Button type ="submit">Создать</Button>
        </form>
        </>
    )
}