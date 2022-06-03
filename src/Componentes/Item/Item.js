import './Item.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// Componentes
import ItemCount from '../ItemCount/ItemCount.js';



const Item = ({products})=> {

  

  return (

    <Card>
      <CardContent className='Carditem'>

          <div>
            <img src={`/${products.image}`} alt='Por Completar' />
          </div>

          <p>{products.title}</p>
          <span>{products.price}</span>

        <ItemCount products={products} />
          
      </CardContent>
    </Card>
  );
}
export default Item