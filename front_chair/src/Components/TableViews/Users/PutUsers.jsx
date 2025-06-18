import { useNavigate } from "react-router-dom";
import Button from "../../../Default/Button";

export default function PutUsers(){
    const navigate = useNavigate();
    
    async function HandleSubmit(event) {
        event.preventDefault();
        const formdata = new FormData(event.target);
        const users = Object.fromEntries(formdata.entries());

        if(!users.id_user || !users.name || !users.surname || !users.login || !users.password || !users.role)
        {allert("Пожайлуста, заполните все поля!"); return;}

        try{
            const responce = await fetch("https://localhost:7153/api/v1/users", {
              method: "PUT",
              headers: {"Accept": "application/json", "Content-Type": "application/json"},
              body: JSON.stringify({
                id_user: parseInt(users.id_user),
                name: users.name,
                surname: users.surname,
                secondname: users.secondname,
                login: users.login,
                password: users.password,
                address: users.address,
                role: users.role
              })  
            })
            await responce.json();
            if(responce.ok) allert("Успешно!")
                if(responce.status === 400){
                    allert("Ошибка 400 (Bad Request)")
                }
        }catch(error){
        allert("Проблема с сервером " + error)
    } 
}

    return(
        <>
        <form onSubmit={HandleSubmit}>
            <input type="text" placeholder="Имя" name = "name"></input>
            <Button type ="submit">Редактировать</Button>
        </form>
        </>
    );
}