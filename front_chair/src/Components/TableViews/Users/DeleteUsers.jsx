import Button from "../../../Default/Button";

export default function DeleteUsers(){
    let num;
    function Handle(event){
        num = parseInt(event.target.value);
    }
    function Delete(id){
        fetch("https://localhost:7153/api/v1/users/" + id, {
            method:"DELETE"
        })
        .then(responce => {
            if(!responce.ok){
                throw new Error()
            }alert("Успешно!")
        }).catch(error => {
            alert("Проблема с сервером " + error);
        })
    }
    return(
        <>
        <form>
            <input type ="number" placeholder="ID" name="id_user" onChange={Handle}></input>
            <Button onClick={() => Delete(num)}>Удалить</Button>
        </form>
        </>
    );
}