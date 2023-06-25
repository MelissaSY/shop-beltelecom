import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { actions } from '../../../../reducer/cart-reducer'
import { useCartDispatch } from '../../../../contexts/cart-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'

function CartItem(props) {

    const [cartItem, setCartItem] = useState(null)

    const dispatch = useCartDispatch()

    useEffect(() => {
        setCartItem(props.cartItem)
    }, [props.cartItem])

    const increaseNumber = (id) => {
        dispatch({
            type: actions.INCREASE_NUMBER,
            id: id,
        })
    }

    const decreaseNumber = (id) => {
        dispatch({
            type: actions.DECREASE_NUMBER,
            id: id,
        })
    }

    const removeFromCart = (id) => {
        dispatch({
            type: actions.REMOVE_FROM_CART,
            id: id
        })
    }

    return (
        cartItem ? (
            <tr>
                <td>
                    <div className='cart-product-image'>
                        <Link to={`/products/${cartItem.product.id}`}>
                            <img src={cartItem.product.imgs[0].preview} alt={cartItem.product.name} />
                        </Link>
                    </div>
                </td>
                <td>
                    <div className='cart-product-name'>
                        <Link to={`/products/${cartItem.product.id}`}>
                            <span>{cartItem.product.name}</span>
                        </Link>
                    </div>
                </td>
                <td>
                    <div className='cart-product-count'>
                        <button className='control-amount' onClick={() => decreaseNumber(cartItem.product.id)}
                            disabled={cartItem.count < 2}>
                            <FontAwesomeIcon icon={faMinus} size='xs' />

                        </button>
                        <input value={cartItem.count} id={`${cartItem.product.id}-count`} disabled={true} />
                        <button className='control-amount' onClick={() => increaseNumber(cartItem.product.id)}>

                            <FontAwesomeIcon icon={faPlus} size='xs' />
                        </button>
                    </div>
                </td>
                <td>
                    <input className='cart-product-price'
                        id={`${cartItem.product.id}-price`}
                        value={(cartItem.product.price * cartItem.count / 100).toFixed(2)}
                        disabled={true} />
                </td>
                <td>
                    <div className='remove-cart-item'>
                        <button className='remove-button' onClick={() => removeFromCart(cartItem.product.id)}>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </td>
            </tr>)
            :
            <tr>
                <td>
                    <div>loading</div>
                </td>
            </tr>
    )
}

export default CartItem