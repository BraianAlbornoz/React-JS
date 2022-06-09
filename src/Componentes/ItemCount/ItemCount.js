import { Button } from "@mui/material";
import { useState } from 'react';
// import { Link } from "react-router-dom";
//componente
import './ItemCount.css';

const ItemCount = ( {products} ) =>{

    const [count,setCount] = useState (1)
    

    const addCount= () => {
       if(count < products.stock){
        setCount(count + 1)
       }
        
    }
    
    const removeCount = () => {
        if(count > 1 ){
            setCount(count - 1)
        }
    }

    
    
    
    return(
    
        <div className="ItemContainer">

            <div className="ItemCount" >   
                <Button variant="outlined" onClick={removeCount} >-</Button>
                <p>{count}</p>
                <Button variant="outlined" onClick={addCount} >+</Button>
            </div>

            <Button variant="outlined" >Agregar Producto</Button>

            {/* <Button variant="outlined" > <Link to={`/Detalle/${products.id}`}>Ver Detalle</Link> </Button> */}

        </div>
            
         
    )
    
}

export default ItemCount
