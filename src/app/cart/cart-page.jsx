import React, { useCallback, useEffect, useState } from 'react'
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

  const getCartProducts = useCallback(async () => {

    const items = await Promise.all(cartItems.map(async (cartProduct) => {
      const response = await getProduct(cartProduct.id)
      return {
        product: response,
        count: cartProduct.count
      }
    }))
    return items
  }, [cartItems])

  useEffect(() => {
    getCartProducts()
      .then((products) => {
        setCartItemsInfo(products)
      })

  }, [getCartProducts])


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