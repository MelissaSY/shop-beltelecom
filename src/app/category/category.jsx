import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from '../../components/slider/slider'
import './category.css'
import { getCategory, getProductsCategory } from '../../services/plug-api'

function Category() {

  const { category_id } = useParams()
  const [category, setCategory] = useState(null)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setCategory(getCategory(parseInt(category_id)))
    setProducts(getProductsCategory(parseInt(category_id)))
  }, [category_id])


  const bannerWidth = "220"

  return (
    category ?
      <div className='content-container'>

        <p className='section-title'>
          {category.name}
        </p>
        <div className='category-list'>
          {products.map((product) => {
            let slides = (product.imgs.map((img, ind) => {
              return (
                <Link to={`/products/${product.id}`} key={ind} className='product-slider-link'>
                  <img src={img.preview} className='product-slider-img' alt={product.name + '_' + ind} />
                </Link>
              )
            }))

            return (
              <div className='card-preview product-card' key={product.id}>
                <div className='slider-category' style={{ width: bannerWidth + 'px' }}>
                  <Slider
                    slides={slides}
                    bannerWidth={bannerWidth}
                    slideClassName={'slide-category'}
                    noPagination={true}
                  />
                </div>
                <div className='product-name'>

                  <Link to={`/products/${product.id}`}>
                    <span >
                      {product.name}
                    </span>
                  </Link>
                </div>
              </div>
            )

          })}

        </div>
      </div>
      : <div>loading</div>
  )
}

export default Category