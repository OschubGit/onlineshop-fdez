import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {
            setCartList([...cartList, {
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                qty: qty,
            }])
          }

    return(
    <CartContext.Provider value={{cartList, addToCart}}>
        {children}
    </CartContext.Provider>

    )
}

export default CartContextProvider