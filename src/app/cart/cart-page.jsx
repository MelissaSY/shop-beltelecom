import React, { useEffect, useState } from 'react'
import './cart-page.css'
import { getProduct } from '../../services/plug-api'
import { useCart, useCartDispatch } from '../../contexts/cart-context'
import { actions } from '../../reducer/cart-reducer'
import Modal from '../../components/modal/modal'
import Cart from './components/cart/cart'
import CheckoutForm from './components/checkout-form'


function CartPage() {
  const dispatch = useCartDispatch()

  const [cartItemsInfo, setCartItemsInfo] = useState([])

  const [modalActive, setModalActive] = useState(false)

  const cartItems = useCart()

  const handleModal = () => {
    dispatch({
      type: actions.CLEAR_ALL
    })
    setModalActive(false)
  }

  const submitAction = () => {
    setModalActive(true)
  }

  useEffect(() => {
    setCartItemsInfo(
      cartItems.map((cartProduct) => {
        return {
          product: getProduct(cartProduct.id),
          count: cartProduct.count
        }
      })
    )
  }, [cartItems])


  return (
    <div className='content-container user-cart-page'>
      {
        cartItemsInfo.length > 0 ?
          <Cart cartItems={cartItemsInfo} />
          : <p className='section-title'>В корзине нет товаров</p>
      }
      {
        cartItemsInfo.length > 0 ?
          <CheckoutForm submitAction={submitAction} />
          : <></>

      }
      <Modal active={modalActive} handleModal={handleModal} text={'Заказ успешно оформлен'} />
    </div>
  )
}

export default CartPage