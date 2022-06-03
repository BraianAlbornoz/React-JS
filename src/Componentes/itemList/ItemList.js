import { Grid } from "@mui/material"
// Componentes
import Item from "../Item/Item"

const ItemList =( {products} )=>{
    return(
        <>
            <Grid container spacing={2}>
                {
                    products.map((products)=> {
                        return(

                            <Grid item md={3} key={products.id} >

                                <Item products={products} />

                            </Grid>
                        )
                    })
                }
                
            </Grid>
        </>   
    )
}
export default ItemList
