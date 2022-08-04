import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [quantity, setQuantity] = useState()

    //calculate price and taxes for cart component
    const initialValue = 0;
    const sumPrice = cartList.map((f) => f.total)
    const result = sumPrice.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    const calcTax = result * 0.21;
    const caclTotalWithTaxes = calcTax + result;

    
    //functions context

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
    };
    
    const calcQuantity = () => {
        let allQtyItems = cartList.reduce((previousValue, currentValue) => previousValue + currentValue.qty, 0)
        setQuantity(allQtyItems)
        return allQtyItems;
    };

    const deleteItemFromCard = (item, id) => {
        const deleteItemProd = item && item.filter((f) => f.id !== id);
        setCartList(deleteItemProd);
    };

    const deleteAll = () => {
        setCartList([])
    };

    const totalItemPrice = () => {
        return result;
    };

    const calculateTax = () => {
        return calcTax;
    };

    const caclulateTotalWithTaxes = () => {
        return caclTotalWithTaxes;
    };

    return(
    <CartContext.Provider value={{cartList, quantity, calcQuantity, addToCart, deleteItemFromCard, totalItemPrice, calculateTax, deleteAll, caclulateTotalWithTaxes}}>
        {children}
    </CartContext.Provider>

    )
}

export default CartContextProvider