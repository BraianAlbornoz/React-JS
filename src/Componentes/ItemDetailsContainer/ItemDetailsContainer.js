import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
//Componentes
import ItemDetails from "../ItemDetails/ItemDetails"
// import productosMock from "../../Utils/ProductosMock"
import db from "../../Utils/FirebaseSettings"

const ItemDetailsContainer = ()=>{
    const { id }= useParams()
    const [details,setDetails] = useState({})

    const getProduct = async () =>{

        const docRef = doc (db,"Productos",id)
        const docSnaptshop = await getDoc(docRef)

        let product = docSnaptshop.data()
        product.id =docSnaptshop.id

        return product
    }

    

    useEffect(() => {
       getProduct()
       .then( (res) =>{
           console.log("el producto filtrado es: ", res)
           setDetails(res)
       })
     
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []) 



    return(
        
        <ItemDetails data={details}/>

    )
}

export default ItemDetailsContainer