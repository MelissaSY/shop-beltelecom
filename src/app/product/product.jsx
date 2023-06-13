import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './product.css'
import { getProduct } from '../../services/plug-api'

function Product() {
  const { product_id } = useParams()

  const [productInfo, setProductInfo] = useState(null)

  const addToCart = (id) => {

    let cartItem = { id: id, count: 1 }

    let currentCartItems = JSON.parse(localStorage.getItem('cart'))

    if (currentCartItems) {
      const currentItem = currentCartItems.find(item => item.id === id)
      if (currentItem) {
        const ind = currentCartItems.indexOf(currentItem);
        currentCartItems[ind].count += 1;
      } else {
        currentCartItems.push(cartItem)
      }
    } else {
      currentCartItems = [cartItem]
    }
    localStorage.setItem('cart', JSON.stringify(currentCartItems))
  }

  useEffect(() => {
    setProductInfo(getProduct(parseInt(product_id)))
  }, [])

  return (
    productInfo ?
    <div className='content-container'>
      <div className='section-title'>
        {productInfo.name}
      </div>
      <div className='product-preview'>
        <div className='product-preview-images'>
          images
        </div>
        <div className='product-preview-characteristics'>
          characteristics
        </div>
        <div className='add-to-cart'>
          <button onClick={() => addToCart(productInfo.id)}>в корзину</button>
        </div>
      </div>
      <div className='product-review-list'>
        re
      </div>
    </div>
    :
    <></>
  )
}

export default Product