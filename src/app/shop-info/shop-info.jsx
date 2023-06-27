import React, { Fragment, useEffect, useState } from 'react'
import { getShopInfo } from '../../services/plug-api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './shop-info.css'

function ShopInfo() {

  const [info, setInfo] = useState(null)

  useEffect(() => {
    getShopInfo()
      .then((response) => {
        setInfo(response)
      })
  }, [])

  return (
    <div className='content-container'>
      <h1 className='section-title'>Миссия и философия</h1>
      {
        info ?
          <div className='info'>
            <p className='info-paragraph'>
              <span>Миссия компании «Белтелеком» – </span>{info.mission}
            </p>
            <p className='info-paragraph'>
              <span>Позиционирование: </span>{info.position}
            </p>
            <p className='info-paragraph'>
              <span>Слоган, девиз: </span>{info.moto}
            </p>
            <p className='info-paragraph'>
              {info.after_moto}
            </p>

          </div>
          : <p>you spin me round round<FontAwesomeIcon icon={faCoffee} spin /></p>
      }
    </div>
  )
}

export default ShopInfo