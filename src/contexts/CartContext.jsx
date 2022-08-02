import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [quantity, setQuantity] = useState()
    
    const addToCart = (item, qty, totalPrice) => {
        const itemDuplicated = cartList.findIndex((f) => f.id === item.id)
        
        if (itemDuplicated !== -1) {
            cartList[itemDuplicated].qty += qty;
            cartList[itemDuplicated].total += totalPrice;
            
        } else {
            setCartList([...cartList, {
                id: item.id,
                title: item.title,
                description: item.description,
                price: item.price,
                images: item.images,
                qty: qty,
                total: totalPrice,
            }])
        }
    }
    
    const calcQuantity = (counter) => {
        let allQtyItems = cartList.map((m) => m.qty)
        setQuantity(allQtyItems)
        /* return allQtyItems.reduce(((previousValue, currentValue) => previousValue + currentValue), 0) */
    }
    // Aquí veo que al primer click sale vacio [], pero a partir de ahi me suma los número que es como lo quiero tener
    console.log(quantity)

    const deleteItemFromCard = (item, id) => {
        const deleteItemProd = item && item.filter((f) => f.id !== id);
        console.log(deleteItemProd)
        setCartList(deleteItemProd);
      };

    return(
    <CartContext.Provider value={{cartList, quantity, calcQuantity, addToCart, deleteItemFromCard}}>
        {children}
    </CartContext.Provider>

    )
}

export default CartContextProvider