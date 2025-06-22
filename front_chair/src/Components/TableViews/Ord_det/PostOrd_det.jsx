import Header from "../../../Default/Header";
import Footer from "../../../Default/Footer";
import Button from "../../../Default/Button";
import Post from "../CRUD/Post";

export default function PostOrd_det(){
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
            <input type="number" placeholder="ID заказа" name ="id_order"></input>
            <input type="number" placeholder="ID товара" name ="id_product"></input>
            <input type="number" placeholder="Кол-во" name ="quantity"></input>
            <Button type ="submit">Создать</Button>
        </form>
        <Footer/>
        </>
    )
}
