import { useEffect,useState } from 'react';
import {Grid} from '@mui/material';
// Componentes
import './ItemListContainer.css'
import ItemList from '../itemList/ItemList';
import productosMock from '../../Utils/ProductosMock';

const ItemListContainer = ( {title}) =>{

    const [products, setProducts] = useState([])
    

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            // setTimeout(() => {
                resolve(productosMock)
            // }, 2000)
        })
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