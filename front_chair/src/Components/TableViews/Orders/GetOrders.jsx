import { useEffect, useState } from "react";
import Button from "../../../Default/Button";
import { useNavigate } from "react-router-dom";
import moment from "moment"
import "moment/dist/locale/ru";

export default function GetOrders(){
    const[loading, setLoadind] = useState(false);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    async function FetchOrders() {
        setLoadind(true);
        const responce = await fetch('https://localhost:7153/api/v1/orders');
        const order = await responce.json();
        setOrders(order);
        setLoadind(false);
    }
    useEffect(() =>{FetchOrders()}, [])

    return(
            <>
            <h2>Заказы</h2>
            <div>
                <Button onClick={() => {navigate("post/orders")}}>Создать</Button>
            </div>
            <div>
                {loading && <p>Loading...</p>}
                {!loading &&<ul>{orders.map(order => 
                    <li key={order.id_order}>
                            <div className="info">
                                <h4>ID заказа: {order.id_order}</h4>
                                <h4>ID пользователя: {order.id_user}</h4>
                                <h4>Дата и время покупки: {moment(order.dt_buy).format('lll')}</h4>
                                <h4>Общая стоимость: {order.all_cost}</h4>
                                <h4>Способ оплаты: {order.way_pay}</h4>
                                <h4>Способ доставки: {order.way_delivery}</h4>
                                <h4>Доставлено?: {order.is_delivered ? 'Да' : 'Нет'}</h4>
                                <Button onClick={() => {navigate("/put/orders/"+ order.id_order)}}>Редактировать</Button>
                                <Button onClick={() => {navigate("/delete/orders/"+ order.id_order)}}>Удалить</Button>
                            </div>
                    </li>
                )}</ul>}
            </div>
            </>
            )
}