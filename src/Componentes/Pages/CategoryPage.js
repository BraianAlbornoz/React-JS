import {Grid} from '@mui/material';
import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom';
//Componentes
import ItemList from '../itemList/ItemList';
import productosMock from "../../Utils/ProductosMock"

const CategoryPage=()=>{
    
    const [productos,setProductos] = useState( [] )
    const { category } = useParams()


    useEffect( () => {
        setProductos([])
        productCategoryFilter(productosMock)
    }, [category])
    
    
    const productCategoryFilter = (array) =>{
        return array.map( (item) =>{
            if(item.category == category){
                return setProductos ( productos => [...productos,item] )
            }
        })
    }
    
  
    return(

        <Grid>
            <ItemList products={productos}/>
        </Grid>
    )
}

export default CategoryPage