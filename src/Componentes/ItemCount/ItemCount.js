import { Button } from "@mui/material";

// import { Link } from "react-router-dom";
//componente
import './ItemCount.css';
import { useContext } from 'react';
import CartWidgetContext from '../Context/CartWidgetContext';
import { useState } from "react"

    

const ItemCount = ( {products} ) =>{

    const { addProductToCart } = useContext(CartWidgetContext)
    const [quantity ,setQuantity] = useState(1)


    const addCount= () => {
       if(quantity < products.stock){
           
            setQuantity(
                quantity + 1,
                )
       }
        
    }
    
    const removeCount = () => {
        if(quantity > 1 ){
            
            setQuantity(quantity -1)
        }
    }

    
    
    
    return(
    
        <div className="ItemContainer">

            <div className="ItemCount" >   
                <Button variant="outlined" onClick={removeCount} >-</Button>
                <p>{quantity}</p>
                <Button variant="outlined" onClick={addCount} >+</Button>
            </div>

            <Button variant="outlined" onClick={ () => addProductToCart(products,quantity) }>Agregar Producto</Button>

            {/* <Button variant="outlined" > <Link to={`/Detalle/${products.id}`}>Ver Detalle</Link> </Button> */}

        </div>
            
         
    )
    
}

export default ItemCount
