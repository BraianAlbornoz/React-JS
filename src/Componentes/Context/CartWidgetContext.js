import { createContext, useState } from "react";


const CartWidgetContext = createContext()

const CartWidgetProvider = ({children}) => {

    
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalCantidad, setTotalCantidad] = useState (0)

    const addProductToCart = (products) => {

        let isInCart = cartListItems.find( (itemInCart) => itemInCart.id === products.id);
            
        if(!isInCart){
            
            console.log("Agregaste products NEW: ",products)
            setTotalPrice(totalPrice + products.price)
            setTotalCantidad(totalCantidad + products.cantidad)
            setCartListItems( [ ...cartListItems, {...products, cantidad: 1 } ])
            // setCartListItems (cartListItems => [...cartListItems, products,]
           
        }else{
            setCartListItems(
                cartListItems.map( (itemInCart) => {
                    if( itemInCart.id === products.id ){
                        if(itemInCart.cantidad < products.stock){
                            setTotalCantidad(totalCantidad + products.cantidad)
                            setTotalPrice(totalPrice + products.price)
                            console.log("Repetiste Producto: ",isInCart)
                            return{...isInCart, cantidad: isInCart.cantidad + 1, price: isInCart.price + products.price }
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

