import React, { Fragment, useEffect, useState } from 'react'
import Slider from '../../components/slider/slider'
import './home.css'
import CategoriesList from '../../components/categories-list/categories-list'
import { getAllCategories } from '../../services/plug-api'

function Home() {

  const [categories, setCategories] = useState([])

  const domain = '/shop-beltelecom'

  const slides = [

    (
      <img className='main-slider-image' alt='slide_1' src={`${domain}/main-slider-images/Ipad_slider.jpg`} />
    ),
    (
      <img className='main-slider-image' alt='slide_2' src={`${domain}/main-slider-images/iphone_slider.jpg`} />
    ),
    (
      <img className='main-slider-image' alt='slide_3' src={`${domain}/main-slider-images/LGTV__slider.jpg`} />
    ),
    (
      <img className='main-slider-image' alt='slide_4' src={`${domain}/main-slider-images/robot_slider.jpg`} />
    ),
    (
      <img className='main-slider-image' alt='slide_5' src={`${domain}/main-slider-images/xiaomi13lite_slider.jpg`} />
    ),

  ]

  useEffect(() => {
    getAllCategories()
      .then((result) => { setCategories(result) })
  }, [])

  const slideClassName = "slide-home"
  const bannerWidth = "1200"

  return (
    <Fragment>
      <div className='slider-home' style={{ width: bannerWidth + 'px' }}>
        <Slider
          slides={slides}
          bannerWidth={bannerWidth}
          slideClassName={slideClassName}
        />
      </div>
      <CategoriesList categories={categories} />
    </Fragment>
  )
}

export default Home