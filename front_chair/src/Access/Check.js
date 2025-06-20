export default function Check(password)
{
    let check = password.toString();
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,15}$/;
    if(regex.test(check) == false){
        alert('Пароль не подходит'); return;
    }
}