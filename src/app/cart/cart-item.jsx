import React, { useEffect, useState } from 'react'
import { getProduct } from '../../services/plug-api'
import { Link } from 'react-router-dom'

function CartItem(props) {

    const [cartItem, setCartItem] = useState(null)

    useEffect(() => {
        setCartItem({
            product: getProduct(props.cartProduct.id),
            count: props.cartProduct.count
        })

    }, [])



    return (
        cartItem ? (
            <div className='cart-item'>
                <div className='cart-product-image'>
                    <Link to={`/products/${cartItem.product.id}`}>
                        <img src={cartItem.product.imgs[0]} />
                    </Link>
                </div>
                <div className='cart-product-name'>
                    <Link to={`/products/${cartItem.product.id}`}>
                        <span>{cartItem.product.name}</span>
                    </Link>
                </div>
                <div className='cart-product-count'>
                    {cartItem.count}
                </div>
                <div className='cart-product-price'>
                    {(cartItem.product.price * cartItem.count / 100).toFixed(2)}
                </div>
            </div>)
            :
            <div>loading</div>
    )
}

export default CartItem