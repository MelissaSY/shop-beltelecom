import React, { Fragment, useEffect, useState } from 'react'
import Slider from '../../components/slider/slider'
import './home.css'
import CategoriesList from '../../components/categories-list/categories-list'
import { getAllCategories } from '../../services/plug-api'

function Home() {

  const [categories, setCategories] = useState([])

  const slides = [
    (<div>
      <div>a</div>

      <div>ab</div>
    </div>),
    (<div>
      b
    </div>),
    (<div>
      c
    </div>),
    (<div>
      d
    </div>),
    (<div>
      <img src='/BELTELECOMshop_logo.png' />
    </div>),

  ]

  useEffect(() => {
     setCategories(getAllCategories());
  }, [])

  const slideClassName = "slide-home"
  const bannerWidth = "1100"

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