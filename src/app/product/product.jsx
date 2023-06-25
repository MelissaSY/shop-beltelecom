import './product.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct, getReviewsProduct } from '../../services/plug-api'
import Fancybox from '../../components/fancybox'
import { useCart, useCartDispatch } from '../../contexts/cart-context'
import { actions } from '../../reducer/cart-reducer'
import ReviewList from '../../components/review/review-list'

function Product() {
  const { product_id } = useParams()

  const [productCartNumber, setProductCartNumber] = useState(0)

  const [productInfo, setProductInfo] = useState(null)
  const [reviews, setReviews] = useState([])
  const [productPrice, setProductPrice] = useState('')

  const dispatch = useCartDispatch()

  const cart = useCart()

  const addToCart = (id) => {
    if (productCartNumber > 0) {
      dispatch({
        type: actions.INCREASE_NUMBER,
        id: id,
      })
    } else if (productCartNumber === 0) {
      dispatch({
        type: actions.ADD_TO_CART,
        id: id,
      })
    }
  }

  const removeFromCart = (id) => {
    if (productCartNumber > 1) {
      dispatch({
        type: actions.DECREASE_NUMBER,
        id: id,
      })
    } else if (productCartNumber === 1) {
      dispatch({
        type: actions.REMOVE_FROM_CART,
        id: id,
      })
    }
  }

  useEffect(() => {
    let product = getProduct(parseInt(product_id));
    let reviews = getReviewsProduct(parseInt(product_id))
    setProductInfo(product)
    setReviews(reviews)
    setProductPrice((product.price / 100).toFixed(2).toString())
  }, [product_id])

  useEffect(() => {
    const productInCart = cart.find(item => item.id === parseInt(product_id))
    if (productInCart) {
      setProductCartNumber(productInCart.count)
    } else {
      setProductCartNumber(0)
    }
  }, [cart])

  return (
    productInfo ?
      <div className='content-container'>
        <div className='section-title section-product-name'>
          {productInfo.name}
        </div>
        <div className='product-preview'>
          <div className='product-images'>
            <div className='product-main-preview '>
              {<img src={productInfo.imgs[0].img} alt='main' />}
            </div>
            <div className='product-preview-images'>
              <Fancybox options={{
                Carousel: {
                  infinite: true,
                },
              }}>
                {
                  productInfo.imgs.map((img, imgInd) => {
                    return (
                      <a key={imgInd} className='card-preview' data-fancybox="gallery" href={img.img}>
                        <img src={img.preview} alt={productInfo.name + '_' + imgInd} />
                      </a>
                    )
                  })
                }

              </Fancybox>
            </div>
          </div>

          <div className='product-preview-characteristics'>
            <p className='details-header'>
              Основные характеристики
            </p>
            <div className='details'>
              {
                productInfo.details.map((detail, detailInd) => {
                  return (
                    <p className='detail' key={detailInd}>
                      {detail.name}: <span>{detail.value}</span>
                    </p>
                  )
                })
              }
            </div>

          </div>
          <div className='product-price-cart card-preview'>
            <div className='product-price-section'>
              <span>Цена: </span>
              <span className='product-price'>
                {productPrice.slice(0, productPrice.length - 3)}
                <sub>
                  {productPrice.slice(productPrice.length - 3)}
                </sub>
              </span>
            </div>
            <p> {
              productCartNumber > 0 ?
                `Сейчас в корзине: ${productCartNumber}`
                :
                `Товар не добавлен в корзину`
            } </p>
            <div className='add-to-cart'>
              <button onClick={() => addToCart(productInfo.id)}>Добавить в корзину</button>
            </div>
            <div className='add-to-cart'>
              <button className='remove-button' onClick={() => removeFromCart(productInfo.id)} disabled={!(productCartNumber > 0)}>Удалить из корзины</button>
            </div>
          </div>
        </div>
        <ReviewList reviews={reviews} />
      </div>
      :
      <></>
  )
}

export default Product