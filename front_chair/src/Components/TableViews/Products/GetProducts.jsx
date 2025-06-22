import { useEffect, useState } from "react";
import Button from "../../../Default/Button";
import { useNavigate } from "react-router-dom";
import Delete from '../CRUD/Delete';

export default function GetProducts(){
    const[loading, setLoadind] = useState(false);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    async function FetchProducts() {
        setLoadind(true);
        const responce = await fetch('https://localhost:7153/api/v1/products');
        const product = await responce.json();
        setProducts(product);
        setLoadind(false);
    }
    useEffect(() =>{FetchProducts()}, [])
     return(
            <>
            <h2>Товары</h2>
            <div>
                <Button onClick={() => {navigate("/post/products")}}>Создать</Button>
            </div>
            <div className='goods'>
                {loading && <p>Loading...</p>}
                {!loading &&<ul>{products.map(product => 
                    <li key={product.id_product}>
                            <div className="info">
                                <h4>ID: {product.id_product}</h4>
                                <h4>Название: {product.name_product}</h4>
                                <h4>Цена: {product.price}</h4>
                                <h4>Кол-во: {product.count}</h4>
                                <h4>Описание: {product.description}</h4>
                                <h4>Имя картинки: {product.picture}</h4>
                            </div>
                                <Button onClick={() => {navigate("put/products/" + product.id_product)}}>Редактировать</Button>
                                <Button onClick={() => {navigate("delte/products/" + product.id_product)}}>Удалить</Button>
                              </li>
                )}</ul>}
            </div>
            </>
        )
}