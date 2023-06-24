import React, { useContext, useReducer } from 'react'
import cartReducer from '../reducer/cart-reducer'

const CartContext = React.createContext(null)
const CartDispatchContext = React.createContext(null)

export const CartContextProvider = ({ children }) => {

    const [cartItems, dispatch] = useReducer(cartReducer, initialItems)

    return (
        <CartContext.Provider value={cartItems}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartContext.Provider>
    )
}

export default CartContext

export function useCart() {
    return useContext(CartContext)
}

export function useCartDispatch() {
    return useContext(CartDispatchContext)
}

const initialItems =  JSON.parse(localStorage.getItem('cart')) || []
