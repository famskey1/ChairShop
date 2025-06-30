import Header from "../../../Default/Header";
import Footer from "../../../Default/Footer";
import Button from "../../../Default/Button";
import Put from '../CRUD/Put';

export default function PutProducts(){
    // function Update(e){
    //     e.preventDefault();
    //     const body = JSON.parse(localStorage.getItem('body'))
    //     const chooseValue = document.querySelector('select').value;
    // }
    // const formData = new FormData(document.getElementById('update'))
    // const data = Object.fromEntries(formData);
    // console.log(data);
    // Put(data, "https://localhost:7153/api/v1/products")
    // alert('Успешно!')onSubmit={Update}

    return(
        <>
        <Header/>
        <form id='update' >
            <input type="number" placeholder="ID" name = "id_product"></input>
            <input type="text" placeholder="Название товара" name = "name_product"></input>
            <input type="number" placeholder="Цена" name = "price"></input>
            <input type="number" placeholder="Кол-во на складе" name = "count"></input>
            <input type="text" placeholder="Описание(не обязательно)" name = "description"></input>
            <input type="url" placeholder="Имя картинки" name = "picture"></input>
            <Button type ="submit">Редактировать</Button>
        </form>
        <Footer/>
        </>
    )
}