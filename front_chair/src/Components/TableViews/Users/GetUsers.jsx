import { useEffect, useState } from "react";
import Button from "../../../Default/Button";
import { useNavigate } from "react-router-dom";

export default function GetUsers(){
    const[loading, setLoadind] = useState(false);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    async function FetchUsers() {
        setLoadind(true);
        const responce = await fetch('https://localhost:7153/api/v1/users');
        const user = await responce.json();
        setUsers(user);
        setLoadind(false);
    }
    useEffect(() =>{FetchUsers()}, [])
    return(
        <>
        <h2>Пользователи</h2>
        <div>
            <Button onClick={() => {navigate("post/users")}}>Создать</Button>
        </div>
        <div className='goods'>
            {loading && <p>Loading...</p>}
            {!loading &&<ul>{users.map(user => 
                <li key={user.id_user}>
                        <div className="info">
                            <h4>ID: {user.id_user}</h4>
                            <h4>Имя: {user.name_user}</h4>
                            <h4>Фамилия: {user.surname_user}</h4>
                            <h4>Логин: {user.login}</h4>
                            <h4>Пароль: {user.password}</h4>
                            <h4>Домашний адресс: {user.address}</h4>
                            <h4>Роль: {user.role}</h4>
                        </div>
                            <Button onClick={() => {navigate("put/users/" + user.id_user)}}>Редактировать</Button>
                            <Button onClick={() => {navigate("delete/users/" + user.id_user)}}>Удалить</Button>
                          </li>
            )}</ul>}
        </div>
        </>
    )
}