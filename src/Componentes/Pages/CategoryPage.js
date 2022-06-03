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
        console.log("category: ",category)
        getProducts()
        .then( (response) => {
            productCategoryFilter(response)
        })
    }, [category])
    
    
    const productCategoryFilter = (array) =>{
        return array.map( (item) =>{
            if(item.category == category){
                return setProductos( productos => [...productos,item] )
            }
        })
    }
    
    
    
    
    // const productCategoryFilter= productosMock.filter( (producto) => {
    //     return producto.category === category
    // })

    // useEffect( () => {
    //    console.log("el producto filtrado category: ", productCategoryFilter)
    //    setCategory(productCategoryFilter)
    // }, [])

  
    return(

        <Grid >
            <ItemList products={productos}/>
        </Grid>
    )
}

export default CategoryPage