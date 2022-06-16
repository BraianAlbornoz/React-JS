import { useEffect,useState } from 'react';
import {Grid} from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
// Componentes
import './ItemListContainer.css'
import ItemList from '../itemList/ItemList';
// import productosMock from '../../Utils/ProductosMock';
import db from '../../Utils/FirebaseSettings';

const ItemListContainer = ( {title}) =>{

    const [products, setProducts] = useState([])
    

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
        getProducts()
        .then( (response) => {
         setProducts(response)
        //  console.log(response)
        })
        .catch( (err) => {
            // console.log("Fallo la llamada.", err)
        })
        .finally( () => {
            // console.log("termino la promesa")
        })
    }, [])


    return(
        <> 
            <h2>{title}</h2>

            <Grid >
                <ItemList products={products}/>
            </Grid>
            
        </>
    );
}

export default ItemListContainer