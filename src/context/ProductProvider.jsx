import { createContext, useEffect, useState } from "react"
import fetchData from "../services/api"

export const productContext = createContext()


const ProductProvider = ({children}) =>{
    const [productData, setProductData] = useState([])
    
    useEffect(()=>{
        (async()=>{
            const data = await fetchData()
            setProductData(data)

        })()
    },[])
    return(
        <productContext.Provider value={productData}>
            {children}
        </productContext.Provider>
    )
}

export default ProductProvider