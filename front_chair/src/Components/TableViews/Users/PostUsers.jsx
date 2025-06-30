import Header from "../../../Default/Header";
import Footer from "../../../Default/Footer";
import Button from "../../../Default/Button";
import Post from '../CRUD/Post';

export default function PostUsers(){
    // function Create(e){
    //     e.preventDefault();
    //     const body = JSON.parse(localStorage.getItem('body'))
    //     const chooseValue = document.querySelector('select').value;
    // }
    // const formData = new FormData(document.getElementById('create'))
    // const data = Object.fromEntries(formData);
    // console.log(data);
    // Post(data, "https://localhost:7153/api/v1/users")
    // alert('Успешно!')onSubmit={Create}

    return(
        <>
        <Header/>
        <form id='create' >
            <input type="text" placeholder="Имя" name = "name_user"></input>
            <input type="text" placeholder="Фамилия" name = "surname_user"></input>
            <input type="text" placeholder="Отчество(если есть)" name = "secondname_user"></input>
            <input type="text" placeholder="Логин" name = "login"></input>
            <input type="password" placeholder="Пароль" name = "password"></input>
            <input type="text" placeholder="Адресс" name = "address"></input>
            Роль:
            <select name ='role'>
              <option value ='user'>Пользователь</option>
              <option value ='emplo'>Сотрудник</option>
              <option value ='admin'>Администратор</option>
            </select>
            <Button type ="submit">Создать</Button>
        </form>
        <Footer/>
        </>
    )
}