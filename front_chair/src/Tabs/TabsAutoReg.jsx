import Button from "../Default/Button"

export default function TabsAutoReg({active, onChange}){
    return(
        <section className="tar">
            <Button isActive = {active === 'auto'} onClick = {() => onChange('auto')}>Авторизация</Button>
            <Button isActive = {active === 'reg'} onClick = {() => onChange('reg')}>Регистрация</Button>
        </section>
    )
}