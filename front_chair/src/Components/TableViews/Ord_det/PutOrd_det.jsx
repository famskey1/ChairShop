import Header from "../../../Default/Header";
import Footer from "../../../Default/Footer";
import Button from "../../../Default/Button";
import Put from '../CRUD/Put';

export default function PutOrd_det(){
    function Update(e){
        e.preventDefault();
        const body = JSON.parse(localStorage.getItem('body'))
        const chooseValue = document.querySelector('select').value;
    }
    const formData = new FormData(document.getElementById('update'))
    const data = Object.fromEntries(formData);
    console.log(data);
    Put(data, "https://localhost:7153/api/v1/products")
    alert('Успешно!')

    return(
        <>
        <Header/>
        <form onSubmit={Update}>
            <input type="number" placeholder="ID" name ="id_od"></input>
            <input type="number" placeholder="ID заказа" name ="id_order"></input>
            <input type="number" placeholder="ID товара" name ="id_product"></input>
            <input type="number" placeholder="Кол-во" name ="quantity"></input>
            <Button type ="submit">Создать</Button>
        </form>
        <Footer/>
        </>
    )
}