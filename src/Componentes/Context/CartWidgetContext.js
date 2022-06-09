import { createContext, useState } from "react";


const CartWidgetContext = createContext()
const CartWidgetProvider = ({children}) => {

    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCantidad, setTotalCantidad] = useState (0)

    const addProductToCart = (products) => {
        
        let isInCart = cartListItems.find( (itemInCart) => itemInCart.id === products.id);
            
        if(!isInCart){
            setTotalPrice(totalPrice + products.price)
            setTotalCantidad(totalCantidad + products.cantidad)
            setCartListItems( [ ...cartListItems, {...products } ])
            // setCartListItems (cartListItems => [...cartListItems, products,])
            console.log("IsInCart",isInCart)
            console.log("Products",products)
        }else{
            setCartListItems(
                cartListItems.map( (itemInCart) => {
                    if( itemInCart.id === products.id ){
                        return{...isInCart, cantidad: isInCart.cantidad + 1 }
                        
                    }else{
                        return(itemInCart)
                    }
                    
                })
            )
            setTotalPrice(totalPrice + products.price)
            setTotalCantidad(totalCantidad + products.cantidad)
            console.log("IsInCart",isInCart)
            console.log("Products",products)
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
                        return{...isInCart, cantidad: isInCart.cantidad - 1}
                        
                    }else{
                        return (itemInCart)
                    }
                })
            )
            console.log("IsInCart",isInCart)
            console.log("Products",products)
            setTotalPrice(totalPrice - products.price)
            setTotalCantidad(totalCantidad - 1)
        }
    }

    const data ={
        cartListItems,
        addProductToCart,
        totalPrice,
        totalCantidad,
        deleteItemCart
    }

    return(
        <CartWidgetContext.Provider value={data}>
            {children}
        </CartWidgetContext.Provider>
    )
}

export default CartWidgetContext
export { CartWidgetProvider }

