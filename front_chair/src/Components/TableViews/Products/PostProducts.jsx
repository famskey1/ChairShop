import Header from "../../../Default/Header";
import Footer from "../../../Default/Footer";
import Button from "../../../Default/Button";
import Post from '../CRUD/Post';

export default function PostProducts(){
    function Create(e){
        e.preventDefault();
        const body = JSON.parse(localStorage.getItem('body'))
        const chooseValue = document.querySelector('select').value;
    }
    const formData = new FormData(document.getElementById('create'))
    const data = Object.fromEntries(formData);
    console.log(data);
    Post(data, "https://localhost:7153/api/v1/users")
    alert('Успешно!')

    return(
        <>
        <Header/>
        <form id='create' onSubmit={Create}>
            <input type="text" placeholder="Название товара" name = "name_product"></input>
            <input type="number" placeholder="Цена" name = "price"></input>
            <input type="number" placeholder="Кол-во на складе" name = "count"></input>
            <input type="text" placeholder="Описание(не обязательно)" name = "description"></input>
            <input type="url" placeholder="Имя картинки" name = "picture"></input>
            <Button type ="submit">Создать</Button>
        </form>
        <Footer/>
        </>
    )
}