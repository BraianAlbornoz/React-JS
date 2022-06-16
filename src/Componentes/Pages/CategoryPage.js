import {Grid} from '@mui/material';
import { useEffect,useState } from "react"
import { useParams } from 'react-router-dom';
import { collection,getDocs } from 'firebase/firestore';
//Componentes
import ItemList from '../itemList/ItemList';
// import productosMock from "../../Utils/ProductosMock"
import db from '../../Utils/FirebaseSettings';

const CategoryPage=()=>{
    
    const [productos,setProductos] = useState( [] )
    const { category } = useParams()


    const getProducts = async () => {
        const productsSnapshot = await getDocs( collection (db,"Productos") );

        const productList = productsSnapshot.docs.map( (doc) => {
            
            let product = doc.data()
            product.id = doc.id
            
            return product
        })
        return productList
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

        <Grid className='item-list-category-container'>
            <ItemList products={productos}/>
        </Grid>
    )
}

export default CategoryPage