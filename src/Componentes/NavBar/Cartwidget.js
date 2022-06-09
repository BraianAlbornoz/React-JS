import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import { useState , useContext } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CartWidgetContext from '../Context/CartWidgetContext';

//componentes 
import './NavBar.css'



const Cartwidget =()=>{
    const { cartListItems,totalPrice,totalCantidad,deleteItemCart,deleteAll } = useContext(CartWidgetContext)
    
    const [anchorEL,setAnchorEl] = useState(null)
    const handleOpenMenu=(e)=>{
        setAnchorEl (e.currentTarget)
    }
    const handleCloseMenu=()=>{
        setAnchorEl (null)
    }


    return(
        <>

                <Button variant='contained' onClick={handleOpenMenu} aria-controls='menuCartWidge'>
                    <ShoppingCartIcon/>
                </Button>

                <Menu 
                    id='menuCartWidge' 
                    onClose={handleCloseMenu} 
                    anchorEl={anchorEL} 
                    open={Boolean(anchorEL)} 
                >
                    {cartListItems.length === 0 ? 
                    
                        (
                            <p>Tu Carrito esta Vacio</p>
                        ) : 
                        
                        (
                            <div className='container-item-list-cart'>

                                {cartListItems.map( (item) => {
                                    
                                    return(
                                        <div className='item-cart' key={item.id} >

                                            <div className='cart-image'>
                                                <img src={`../${item.image}`} alt="prod carrito" />
                                            </div>

                                            <div className='cart-info'>
                                                <p>{item.title}</p>
                                                <span>${item.price}</span>
                                            </div>

                                            <div className='cart-contador'>
                                                <span>{item.cantidad}Unidad</span>
                                                <span>(Stock: {item.stock})</span>
                                            </div>

                                            <div className='cart-Delet'>
                                                <button onClick={ () => deleteItemCart(item) } >
                                                    <DeleteIcon />
                                                </button>
                                            </div>
                                        </div> 
                                    )
                                })}

                                    <div className='container-item-total-cart'>

                                        <div className='item-total-price'>
                                            <p>Total:${totalPrice}</p>
                                        </div>

                                        <div className='item-total-cantidad'>
                                            <p>Uni:{totalCantidad}</p>
                                        </div>

                                        
                                    </div>

                                    <div className='cart-Delet-all'>
                                        <Button onClick={()=> { deleteAll() }}>
                                             Clear All
                                        </Button>
                                    </div>
                            
                            
                            </div>
                        )
                    }
                                    
                </Menu>

        </>
        
        
    )
        
   
}

export default Cartwidget