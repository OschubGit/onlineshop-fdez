import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {
        const itemDuplicated = cartList.findIndex((f) => f.id === item.id)
        if (itemDuplicated !== -1) {
            cartList[itemDuplicated].qty += qty
        } else {
            setCartList([...cartList, {
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                images: item.images,
                qty: qty,
            }])
          }
        }

    return(
    <CartContext.Provider value={{cartList, addToCart}}>
        {children}
    </CartContext.Provider>

    )
}

export default CartContextProvider