import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
//Componentes
import ItemDetails from "../ItemDetails/ItemDetails"
import productosMock from "../../Utils/ProductosMock"

const ItemDetailsContainer = ()=>{
    const { id }= useParams()
    const [details,setDetails] = useState({})

    // const getItemDetails = () => {
    //     return new Promise( (resolve, reject) => {
    //         // setTimeout(() => {
    //             resolve(productoDetail)
    //         // }, 2000)
    //     })
    // }

    // useEffect( () => {
    //     getItemDetails()
    //     .then( (res) => {
    //      setDetails(res)
    //     //  console.log(res)
    //     })
    //     .catch( (err) => {
    //         //  console.log("Fallo la llamada.", err)
    //     })
    //     .finally( () => {
            
    //     })
    // }, [])
    
    const productFilter= productosMock.find( (producto) => {
        return producto.id === id
    })

    useEffect( () => {
       console.log("el producto filtrado es: ", productFilter)
       setDetails(productFilter)
    }, [])



    return(
        
        <ItemDetails data={details}/>

    )
}

export default ItemDetailsContainer