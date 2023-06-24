import React, { Fragment, useEffect, useState } from 'react'
import Slider from '../../components/slider/slider'
import './home.css'
import CategoriesList from '../../components/categories-list/categories-list'
import { getAllCategories } from '../../services/plug-api'

function Home() {

  const [categories, setCategories] = useState([])

  const slides = [

    (
      <img className='main-slider-image' src='/main-slider-images/Ipad_slider.jpg' />
    ),
    
    (
      <img className='main-slider-image' src='/main-slider-images/iphone_slider.jpg' />
    ),
    (
      <img className='main-slider-image' src='/main-slider-images/LGTV__slider.jpg' />
    ),
    (
      <img className='main-slider-image' src='/main-slider-images/robot_slider.jpg' />
    ),
    (
      <img className='main-slider-image' src='/main-slider-images/xiaomi13lite_slider.jpg' />
    ),

  ]

  useEffect(() => {
    setCategories(getAllCategories());
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