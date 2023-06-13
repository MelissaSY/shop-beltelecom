import React, { useEffect, useState } from 'react'
import './cart.css'
import CartItem from './cart-item'

function Cart() {
  const [cartItems, setCartItems] = useState([])
  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart')))
  }, [])
  return (
    <div className='content-container'>
      <div className='user-cart'>
        {
          cartItems ?
            cartItems.map((cartProduct) => {
              return (
                <CartItem cartProduct={cartProduct} />
              )
            })
            : <></>
        }
      </div>
      <div className='user-checkout'>
        <input placeholder='имя'/>
        <input placeholder='телефон'/>
        <input placeholder='адрес доставки'/>
        <input placeholder='дата доставки'/>
        <input placeholder='комментарии'/>
        <button>
          Заказать
        </button>
      </div>
    </div>
  )
}

export default Cart