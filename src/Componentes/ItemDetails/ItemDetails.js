import { CardContent,Typography,Button } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
//component
import ItemCount from "../ItemCount/ItemCount"
import './ItemDetails.css'

const ItemDetails =( {data} )=>{
    const [showButton,setShowButton] = useState(false)
    

    return(
        
        
    <>
    
    
        <CardContent className='CardDetailsContainer'>
            

            <div className='CardDetailsImg'>
                <img src={`../${data.image}`} alt='Por Completar' />
            </div>

            <CardContent>
                
                <Typography variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography variant="h5" component="div">
                    ${data.price}
                </Typography>
                <Typography variant="h5" component="div">
                    STOCK: {data.stock}uni.
                </Typography>

                {!showButton ?
                <ItemCount 
                    products={data}
                    setShowButton={setShowButton} 
                /> 
                :
        
                <Button variant="outlined" > <Link to={'/cart'}> Terminar la compra </Link> </Button>
                }
            
                           
                
            </CardContent>
           
            
              
            
        </CardContent>

        
            
    </>
      
    

    
    )
}

export default ItemDetails