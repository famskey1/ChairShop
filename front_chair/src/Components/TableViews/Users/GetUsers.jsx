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
            <Button onClick={() => {navigate("/")}}>Создать</Button>
        </div>
        <div>
            {loading && <p>Loading...</p>}
            {!loading &&<ul>{users.map(user => 
                <li key={user.id_user}>
                            <span>{user.id_user}</span>
                            <span>{user.id_user}</span>
                            <span>{user.id_user}</span>
                            <Button>Выкинуть из корзины</Button>
                            <Button>Выкинуть из корзины</Button>
                          </li>
            )}</ul>}
        </div>
        </>
    )
}