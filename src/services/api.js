const fetchData = async() =>{
    try{
        const res = await fetch("https://fakestoreapi.in/api/products")        
        if(res.status === 200){
            const data = await res.json()
            return data.products
        }
        else{
            throw new Error("Error",res.status)
        }
    }
    catch(err){
        console.error("Unable to fetch data from server", err)
        throw err
    }
}


export default fetchData