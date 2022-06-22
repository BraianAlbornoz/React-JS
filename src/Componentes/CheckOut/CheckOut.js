import { Button, Modal ,TextField,Box} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import {addDoc,collection} from 'firebase/firestore'
import db from '../../Utils/FirebaseSettings';

//component
import './CheckOut.css'
import CartWidgetContext from '../Context/CartWidgetContext';


const CheckOut = () => { 
    const { cartListItems,totalPrice,deleteItemCart,deleteAll } = useContext(CartWidgetContext)
     
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [formValue , setFormValue] = useState({
        name:'',
        phone:'',
        email:'',
    })
    const [order,setOrder]= useState({
        buyer:{},
        items: cartListItems.map ( (item) => {
            return{
                id: item.id,
                title: item.title,
                price :item.price,
                cantidad: item.cantidad
            }
        }),
        total: totalPrice
    })
    const [success,setSuccess] = useState()

   
    const handleSubmit = (e) => {
        e.preventDefault()
        setOrder({...order, buyer: formValue})
        saveData({...order, buyer: formValue})
        
    }

    const hadleChange = (e) => {
        setFormValue({ ...formValue,[e.target.name] : e.target.value })
    }

    const saveData = async (newOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, newOrder)
        // Se genera la orden (ID) de la colleccion
        console.log("orden generada: ", orderDoc.id)
        setSuccess(orderDoc.id)
    }

    const Delete = () =>{
        deleteAll()
    }
    
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
                                                    <Button className='btn-delete' onClick={ () => deleteItemCart(item) } >
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

                                            <div className='container-modal-buttom'>
                                                <Button variant="contained" onClick={handleOpen}>Completar la compra</Button>
                                                <Modal
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style}>

                                                        {success ? (
                                                            <div className='container-orden-generada'>
                                                                <p>Tu orden se genero con exito: {success}</p>
                                                                <Button variant="contained" onClick = {()=>Delete()} ><Link to={`/`}> Volver al Home </Link></Button>
                                                            </div>
                                                        ): (
                                                            
                                                            <form className="form-contact" onSubmit={handleSubmit} >
                                                                <h3>Formulario de compra</h3>
                                                                <TextField 
                                                                    id="outlined-basic" 
                                                                    name="name"
                                                                    label="Nombre y Apellido" 
                                                                    variant="outlined"
                                                                    value = {formValue.name}
                                                                    onChange={hadleChange} 
                                                                />
                                                                <TextField 
                                                                    id="outlined-basic" 
                                                                    name="phone"
                                                                    label="Telefono" 
                                                                    variant="outlined"
                                                                    value = {formValue.phone}
                                                                    onChange={hadleChange} 
                                                                />
                                                                <TextField 
                                                                    id="outlined-basic" 
                                                                    name="email"
                                                                    label="Mail"
                                                                    variant="outlined" 
                                                                    value = {formValue.email}
                                                                    onChange={hadleChange} 
                                                                />
                                                                <Button type='submit' variant="contained">Enviar</Button>
                                                            </form>
                                                        )}
                                                    </Box>
                                                </Modal>
                                            </div>
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
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default CheckOut