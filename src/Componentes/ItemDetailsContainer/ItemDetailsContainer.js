import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
//Componentes
import ItemDetails from "../ItemDetails/ItemDetails"
import productosMock from "../../Utils/ProductosMock"

const ItemDetailsContainer = ()=>{
    const { id }= useParams()
    const [details,setDetails] = useState({})

    
    const productFilter = productosMock.find( (producto) => {
        return producto.id === id
    })

    useEffect(() => {
       
       console.log("el producto filtrado es: ", productFilter)
       setDetails(productFilter)
     
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []) 



    return(
        
        <ItemDetails data={details}/>

    )
}

export default ItemDetailsContainer