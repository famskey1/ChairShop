import { useEffect, useState } from "react";
import Button from "../../../Default/Button";
import { useNavigate } from "react-router-dom";

export default function GetOrd_det(){
    const[loading, setLoadind] = useState(false);
    const [ods, setOrd_det] = useState([]);
    const navigate = useNavigate();

    async function FetchOrd_det() {
        setLoadind(true);
        const responce = await fetch('https://localhost:7153/api/v1/ord_det');
        const od = await responce.json();
        setOrd_det(od);
        setLoadind(false);
    }
    useEffect(() =>{FetchOrd_det()}, [])
    return(
                <>
                <h2>Детали заказа</h2>
                <div>
                    <Button onClick={() => {navigate("post/ord_det")}}>Создать</Button>
                </div>
                <section className='goods'>
                    {loading && <p>Loading...</p>}
                    {!loading &&<ul>{ods.map(od => 
                        <li key={od.id_od}>
                                <div className="info">
                                    <h4>ID: {od.id_od}</h4>
                                    <h4>ID заказа: {od.id_order}</h4>
                                    <h4>ID товара: {od.id_product}</h4>
                                    <h4>Количество: {od.quantity}</h4>
                                </div>
                                    <Button onClick={() => {navigate("/put/ord_det/"+ order.id_od)}}>Редактировать</Button>
                                    <Button onClick={() => {navigate("/delete/ord_det/"+ od.id_od)}}>Удалить</Button>
                                  </li>
                    )}</ul>}
                </section>
                </>
            )
}