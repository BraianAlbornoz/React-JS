import {Grid} from '@mui/material';
import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom';
//Componentes
import ItemList from '../itemList/ItemList';
import productosMock from "../../Utils/ProductosMock"

const CategoryPage=()=>{
    
    const [productos,setProductos] = useState( [] )
    const { category } = useParams()


    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            // setTimeout(() => {
                resolve(productosMock)
            // }, 2000)
        })
    }
    
    useEffect( () => {
        setProductos([])
        getProducts()
        .then( (response) => {
        productCategoryFilter(response)
        })

        const productCategoryFilter = (arrayResponse) =>{
            return(
                arrayResponse.map( (item) =>{
                
                    if(item.category === category){
                        return setProductos ( productos => [...productos,item] )
                    }
                    else{
                        return console.log("Usted esta en la categoria: ",category)
                    }
                })
            )
        }
        
    }, [category])


    
   
    
  
    return(

        <Grid>
            <ItemList products={productos}/>
        </Grid>
    )
}

export default CategoryPage