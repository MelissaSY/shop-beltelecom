import React from 'react'

import './categories-list.css'
import { Link } from 'react-router-dom'

function CategoriesList(props) {
    const domain = '/shop-beltelecom'
    return (
        <div className='content-container'>
            <h1 className='section-title'>
                Категории
            </h1>
            <div className='category-list'>
                {props.categories.map((category) => {
                    return (
                        <Link key={category.id} to={`${domain}/catalog/${category.id}`}>
                            <div className='category-card card-preview'>
                                <img src={domain + category.img} alt={category.category}/>
                                <div className='category-name'>
                                    <span>
                                        {category.name}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )

                })}

            </div>
        </div>
    )
}

export default CategoriesList