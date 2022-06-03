import { Grid } from "@mui/material"
// Componentes
import Item from "../Item/Item"

const ItemList =( {products} )=>{
    
    

    return(
        <>
            <Grid container spacing={2}>
                {
                    products.map( (producto) => {
                        
                        return(

                            <Grid item md={3} key={producto.id} >
                                
                                <Item products={producto} key={producto.id} />

                            </Grid>
                        )
                    })
                }
                
            </Grid>
        </>   
    )
}
export default ItemList
