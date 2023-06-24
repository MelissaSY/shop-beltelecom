import React, { Fragment, useEffect, useState } from 'react'
import CartItem from './cart-item'
import './cart.css'
import { useCartDispatch } from '../../contexts/cart-context'
import { actions } from '../../reducer/cart-reducer'

function Cart(props) {
    const [totalPrice, setTotalPrice] = useState(0)

    const dispatch = useCartDispatch()

    const clearAll = () => {
        dispatch({
            type: actions.CLEAR_ALL
        })
    }

    useEffect(() => {

        if (props.cartItems) {
            let curPrice = 0;
            for (let i = 0; i < props.cartItems.length; i++) {
                curPrice += (props.cartItems[i].product.price * props.cartItems[i].count)
            }
            setTotalPrice((curPrice / 100).toFixed(2))
        }

    }, [props.cartItems])

    return (
        <div className='user-cart'>
            <table className='cart-product-list'>
                <tbody>

                    {
                        props.cartItems ?
                            props.cartItems.map((cartItem, cartInd) => {
                                return (
                                    <Fragment key={cartInd}>
                                        <CartItem cartItem={cartItem} />
                                    </Fragment>
                                )
                            })
                            : <Fragment />
                    }
                    <tr>
                        <td colSpan={3} className='total'>
                            <span>
                                итого:
                            </span>
                        </td>
                        <td>
                            <input id='total-price' className='cart-product-price' value={totalPrice} disabled={true} />
                        </td>
                        <td onClick={() => clearAll()}>
                            <button className='remove-button'>Очистить корзину</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Cart