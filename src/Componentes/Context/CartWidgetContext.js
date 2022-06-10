import { createContext, useState } from "react";


const CartWidgetContext = createContext()

const CartWidgetProvider = ({children}) => {

    
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCantidad, setTotalCantidad] = useState (0)

    const addProductToCart = (products,quantity) => {

        let isInCart = cartListItems.find( (itemInCart) => itemInCart.id === products.id);
            
        if(!isInCart){
            
            console.log("Agregaste products NEW: ",products)

            setTotalPrice(totalPrice + products.price * quantity)
            setTotalCantidad(totalCantidad + quantity)

            setCartListItems( 
                [ 
                    ...cartListItems , 
                    {...products,
                    cantidad: quantity ,
                    price: products.price * quantity,
                    stock: products.stock-quantity 
                    } 
                ])
            
            
           
        }else{
            setCartListItems(
                cartListItems.map( (itemInCart) => {
                    if( itemInCart.id === products.id ){
                        if( quantity <= itemInCart.stock ){
                            
                                setTotalCantidad(totalCantidad + quantity)
                                setTotalPrice(totalPrice + products.price * quantity)
                                console.log(" Repetiste el producto : ",itemInCart)
                                return{
                                    ...itemInCart,
                                     cantidad: itemInCart.cantidad + quantity  , 
                                     price: (itemInCart.cantidad + quantity) * products.price,
                                     stock: itemInCart.stock - quantity ,
                                    
                                    }
                                    
                            
                        }else{
                            return(itemInCart)
                        }
                        
                    }else{
                        return(itemInCart)
                    }
                    
                })
            )
           
        }

    }

    const deleteItemCart = (products) => {

        let isInCart = cartListItems.find( (itemInCart) => itemInCart.id === products.id);
        
        if(isInCart.cantidad === 1){
            setCartListItems(
                cartListItems.filter( (itemInCart) => itemInCart.id !== products.id )
            )
            setTotalPrice(totalPrice - products.price)
            setTotalCantidad(totalCantidad - 1)
        }else{
            setCartListItems(
                cartListItems.map( (itemInCart) =>{
                    if(itemInCart.id === products.id){
                        return{...isInCart, cantidad: isInCart.cantidad - 1, price: isInCart.price - products.priceAct  }
                        
                    }else{
                        return (itemInCart)
                    }
                })
            )
            console.log("IsInCart",isInCart)

           
            setTotalPrice(totalPrice - products.priceAct)
            setTotalCantidad(totalCantidad - 1)
        }
    }

    const deleteAll = () =>{
         setCartListItems([])
    }

    const data ={
        cartListItems,
        addProductToCart,
        totalPrice,
        totalCantidad,
        deleteItemCart,
        deleteAll,
    }

    return(
        <CartWidgetContext.Provider value={data}>
            {children}
        </CartWidgetContext.Provider>
    )
}

export default CartWidgetContext
export { CartWidgetProvider }

