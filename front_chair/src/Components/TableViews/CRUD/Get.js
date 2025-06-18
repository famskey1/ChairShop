export default async function Get(URL){
    try{
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Accept":"application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        });

        const data = await response.json();
        return data;
    }catch(error){
        console.error("Ошибка: " + error);
        return null;
    }
}