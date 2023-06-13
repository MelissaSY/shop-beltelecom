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
  }, [])


  const bannerWidth = "220"

  return (
    category ?
    <div className='content-container'>
      <div className='section-title'>
        {category.name}
      </div>
      <div className='category-list'>
        {products.map((product) => {
          let slides = (product.imgs.map((img, ind) => {
            return (
              <Link to={`/products/${product.id}`} key={ind}>
                <img src={img} />
              </Link>
            )
          }))

          return (
            <div className='category-card'>
              <div className='slider-category' style={{ width: bannerWidth + 'px' }}>
                <Slider
                  slides={slides}
                  bannerWidth={bannerWidth}
                  slideClassName={'slide-category'}
                />
              </div>

              <Link to={`/products/${product.id}`}>
                <div className='category-name'>
                  {product.name}
                </div>

              </Link>
            </div>
          )

        })}

      </div>
    </div>
    :<div>loading</div>
  )
}

export default Category