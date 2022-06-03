import { Button } from "@mui/material";
import { useState } from 'react';
import { Link } from "react-router-dom";
//componente
import './ItemCount.css';

const ItemCount = ({products}) =>{

    const [count,setCount] = useState (1)
    const [stock,setStock] = useState (products.stock)

    const addCount=()=>{
        if(count < stock)
        setCount(count + 1)
    }
    
    const removeCount =()=>{
        if(count > 1 ){
            setCount(count - 1)
        }
    }

    const onAdd = ()=>{
        if(stock === 0){
            console.log("No hay stock Disponible")
        }else{
            console.log(`Usted compro ${count} ${products.title}`)
            setStock (stock - count)
        }
        
    }
    
    
    return(
        <div className="ItemContainer">

            <div className="ItemCount">   
                <Button variant="outlined" onClick={removeCount} >-</Button>
                <p>{count}</p>
                <Button variant="outlined" onClick={addCount} >+</Button>
            </div>

            <Button variant="outlined" onClick={onAdd}>Comprar</Button>
            <Button variant="outlined" > <Link to={`/Detalle/${products.id}`}>Ver Detalle</Link> </Button>
        </div>
    );
}

export default ItemCount
