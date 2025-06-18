export default async function Put(body, URL){
    const json = JSON.stringify(body)
    try{
        const response = await fetch(URL,{
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            },
            body: json
        });
        await response.json()
        if(response.status === 400) 
            alert("Ошибка заполнения данных")
    }catch(error){
        alert("Ошибка: " + error)
    }
}