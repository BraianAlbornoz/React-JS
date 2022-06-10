import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom"
// Componentes
import ItemCount from '../ItemCount/ItemCount.js';



const Item = ({products})=> {

  
  
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

        <ItemCount products={products} />
        
      </CardContent>
    </Card>

  )
}
export default Item