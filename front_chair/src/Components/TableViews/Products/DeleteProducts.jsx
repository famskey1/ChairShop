import Header from "../../../Default/Header";
import Footer from "../../../Default/Footer";
import Button from "../../../Default/Button";
import Delete from '../CRUD/Delete';

export default function DeleteProducts(){
    // onClick={Delete("https://localhost:7153/api/v1/products/" + product.id_product)}{product.id_product}
    return(
        <>
        <Header/>
        <h1>Перед удалением, убедитесь, что вы точно хотите это удалить!</h1>
        <form>
            <input type ="number" placeholder="ID" name="id_product"></input>
            <Button >Удалить</Button>
        </form>
        <Footer/>
        </>
    );
}