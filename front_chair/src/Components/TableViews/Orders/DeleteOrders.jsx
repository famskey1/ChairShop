import Header from "../../../Default/Header";
import Footer from "../../../Default/Footer";
import Button from "../../../Default/Button";
import Delete from '../CRUD/Delete';

export default function DeleteUsers(){
    return(
        <>
        <Header/>
        <h1>Перед удалением, убедитесь, что вы точно хотите это удалить!</h1>
        <form>
            <input type ="number" placeholder="ID" name="id_order">{order.id_order}</input>
            <Button onClick={Delete("https://localhost:7153/api/v1/orders/" + order.id_order)}>Удалить</Button>
        </form>
        <Footer/>
        </>
    );
}