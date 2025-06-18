import Button from "../Default/Button"

export default function TabsAdmin({active, onChange}){
    return(
        <section className="tar">
            <Button isActive = {active === 'users'} onClick = {() => onChange('users')}>Пользователи</Button>
            <Button isActive = {active === 'products'} onClick = {() => onChange('products')}>Товары</Button>
            <Button isActive = {active === 'orders'} onClick = {() => onChange('orders')}>Заказы</Button>
            <Button isActive = {active === 'ord_det'} onClick = {() => onChange('ord_det')}>Детали заказа</Button>
        </section>
    )
}