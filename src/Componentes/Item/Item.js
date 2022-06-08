import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom"
// Componentes
// import ItemCount from '../ItemCount/ItemCount.js';



const Item = ({products})=> {

  

  return (
<Link to={`/Detalle/${products.id}`}>
    <Card>
      <CardContent className='Carditem'>

          <div>
            <img src={`/${products.image}`} alt='Por Completar' />
          </div>

          <p>{products.title}</p>
          <span>{products.price}</span>

        {/* <ItemCount products={products} /> */}
          
      </CardContent>
    </Card>
</Link>
  )
}
export default Item