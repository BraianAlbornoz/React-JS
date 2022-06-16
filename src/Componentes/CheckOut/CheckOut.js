import { Button} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

//component
import './CheckOut.css'
import CartWidgetContext from '../Context/CartWidgetContext';

const CheckOut = () => { 
    const { cartListItems,totalPrice,deleteItemCart } = useContext(CartWidgetContext)
    return(
        <>

            <div className='cart-items-container'>   
                
                <div className='cart-section'>
                    <div className='col-cart-table__head'>
                        <h2>Producto</h2>
                        <h2>Descripcion</h2>
                        <h2>Precio</h2>
                        <h2>Cantidad</h2>
                        <h2>Quitar</h2>
                    </div>
                         {cartListItems.length === 0 ? 
                            (
                                <p><Link to={`/`}>Tu Carrito esta Vacio </Link></p>
                            ):
                            (
                                <div>
                                    {cartListItems.map( (item) => {
                                        return(
                                            <div className='cart-table__content' key={item.id} >
                                                <div className='cart-table__content-img'>
                                                    <img src={`/${item.image}`} alt='Por Completar' />
                                                </div>
                                                <div className='cart-table__content-title'>
                                                    <p>{item.title}</p>
                                                </div>
                                                <div className='cart-table__content-price'>
                                                    <p>${item.price}</p>
                                                </div>
                                                <div className='cart-table__content-quantity'>
                                                    <p>{item.cantidad}</p>
                                                </div>
                                                <div className='cart-table__content-price'>
                                                    <Button className='btn-delete'onClick={ () => deleteItemCart(item) } >
                                                        <DeleteIcon/>
                                                    </Button>
                                                </div>
                                            </div>
                                        )
                                    })}
                        
                
                                    <div className='cart-footer'>
                                        
                                        <div className='cart-checkout-details'>
                                            <div className='cart-checkout__total'>
                                                <span>Total:</span>
                                                <span>${totalPrice} </span>
                                            </div>                                   
                                            <Button className='btn-custom'>Completar Compra</Button>
                                        </div>
                                        
                                    </div>
                                </div>
                            )   
                        }     
                </div>
            </div>

                    
        </>
    )
}

export default CheckOut