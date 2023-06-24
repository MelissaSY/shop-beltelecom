import React, { useEffect, useRef, useState } from 'react'
import './cart-page.css'
import { getProduct } from '../../services/plug-api'
import { useCart, useCartDispatch } from '../../contexts/cart-context'
import Cart from '../../components/cart/cart'
import PhoneInput from '../../components/phone-input'
import { actions } from '../../reducer/cart-reducer'

const NAME_REG = /^[а-яА-ЯёЁ]+$/
const ADDRESS_REG = /^[/?!,.а-яА-ЯёЁ0-9\s]+$/

const PHONE = '(__) ___-__-__'
function CartPage() {
  const maxLength = 2500

  const currDate = new Date()
  let maxDateDate = new Date()

  maxDateDate.setDate(currDate.getDate() + 7)

  const minDateWarning = currDate.toLocaleDateString();
  const maxDateWarning = maxDateDate.toLocaleDateString()

  const minDate = currDate.toJSON().slice(0, 10)
  const maxDate = maxDateDate.toJSON().slice(0, 10)

  const dispatch = useCartDispatch()

  const [cartItemsInfo, setCartItemsInfo] = useState([])

  const [name, setName] = useState('')
  const [date, setDate] = useState(minDate)
  const [phoneNumber, setPhobeNumber] = useState(PHONE)
  const [address, setAddress] = useState('')
  const [comment, setComment] = useState('')

  const [commentCounter, setCommentCounter] = useState(0)

  const [validName, setValidName] = useState(true)
  const [validDate, setValidDate] = useState(true)
  const [validAddress, setValidAddress] = useState(true)
  const [validPhoneNumber, setValidPhoneNumber] = useState(true)
  const [validComment, setVAlidComment] = useState(true)

  const [nameFocus, setNameFocus] = useState(false)
  const [dateFocus, setDateFocus] = useState(false)
  const [addressFocus, setAddressFocus] = useState(false)

  const dateRef = useRef()

  const cartItems = useCart()

  const handleSubmit = (e) => {
    e.preventDefault();
    if(validAddress && validDate && validName && validPhoneNumber && validComment) {
      dispatch({
        type: actions.CLEAR_ALL
      })
    }
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



  useEffect(() => {
    setCommentCounter(comment.length)
  }, [comment])

  const handleName = (e) => {
    setName(e.target.value)
    setValidName(NAME_REG.test(e.target.value))
  }

  const handleDate = (e) => {
    console.log(minDate)
    setDate(e.target.value)
    setValidDate(dateRef.current.validity.valid)
  }

  const handleAddress = (e) => {
    setAddress(e.target.value)
    setValidAddress(ADDRESS_REG.test(e.target.value))
  }

  return (
    <div className='content-container user-cart-page'>
      {
        cartItemsInfo.length > 0 ?
          <Cart cartItems={cartItemsInfo} />
          : <div>В корзине нет товаров</div>
      }
      {
        cartItemsInfo.length > 0 ?
          <form className={'user-checkout'} onSubmit={handleSubmit} >
            <input className={'checkout-input name-input ' + (!nameFocus && !validName ? 'invalid' : '')}
              placeholder='имя'
              value={name} onChange={(e) => handleName(e)}
              onBlur={() => setNameFocus(false)}
              onFocus={() => setNameFocus(true)}
              aria-invalid={!validName}
              aria-required='true'
              aria-describedby='name-error'
              disabled={!(cartItemsInfo.length > 0)}
              required
              id='name-checkout'
            />
            <p id="name-error" className={!nameFocus && !validName ? 'error' : 'off'}>
              Имя должно содержать только кириллические символы
            </p>

            <PhoneInput phoneNumber={phoneNumber}
              setPhobeNumber={setPhobeNumber}
              validPhoneNumber={validPhoneNumber}
              setValidPhoneNumber={setValidPhoneNumber}
            />

            <input className={!addressFocus && !validAddress ? 'checkout-input invalid' : 'checkout-input'} placeholder='адрес доставки'
              value={address}
              onChange={(e) => handleAddress(e)}
              aria-required='true'
              aria-invalid={!validAddress}
              aria-describedby='address-error'
              onBlur={() => setAddressFocus(false)}
              onFocus={() => setAddressFocus(true)}
              id='address-checkout'
            />
            <p id='adress-error' className={!addressFocus && !validAddress ? 'error' : 'off'}>
              Адрес указан некорректно
            </p>
            <input className={!dateFocus && !validDate ? 'checkout-input invalid' : 'checkout-input'}
              type='date' placeholder='дата доставки'
              value={date} onChange={(e) => handleDate(e)}
              min={minDate}
              max={maxDate}
              ref={dateRef}
              onFocus={() => setDateFocus(true)}
              onBlur={() => setDateFocus(false)}
              aria-describedby='date-error'
              required
              id='date-checkout' />
            <p id='date-error' className={!dateFocus && !validDate ? 'error' : 'off'}>
              Дата должна быть в диапазоне {minDateWarning} - {maxDateWarning}
            </p>

            <textarea className='checkout-input' placeholder='комментарии'
              maxLength={maxLength} value={comment}
              onChange={(e) => setComment(e.target.value)}
              id='comment-checkout'
            />
            <span className='comment-character-counter'
              id='comment-count-checkout'>{commentCounter}/{maxLength}</span>

            <button type='submit' id='submit-checkout'>
              Заказать
            </button>
          </form>
          : <></>

      }

    </div>
  )
}

export default CartPage