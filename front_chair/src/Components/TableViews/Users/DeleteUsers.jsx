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
            <input type ="number" placeholder="ID" name="id_user">{user.id_user}</input>
            <Button onClick={Delete("https://localhost:7153/api/v1/users/" + user.id_user)}>Удалить</Button>
        </form>
        <Footer/>
        </>
    );
}