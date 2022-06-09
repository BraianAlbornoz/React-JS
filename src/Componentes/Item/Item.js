import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom"
import { Button } from '@mui/material';
import { useContext } from 'react';
// Componentes
import  CartWidgetContext  from '../Context/CartWidgetContext';
// import ItemCount from '../ItemCount/ItemCount.js';



const Item = ({products})=> {

  const { addProductToCart } = useContext(CartWidgetContext)
  
  return (

    <Card>
      <CardContent className='Carditem'>
        <Link to={`/Detalle/${products.id}`}>
          <div>
            <img src={`/${products.image}`} alt='Por Completar' />
          </div>
        </Link>

        <p>{products.title}</p>
        <span>{products.price}</span>
        

        {/* <ItemCount products={products} /> */}
        
        <Button 
          variant='contained'
          onClick={ () => addProductToCart(products) }
        > 
          Agrega al carrito 
        </Button>


      </CardContent>
    </Card>

  )
}
export default Item