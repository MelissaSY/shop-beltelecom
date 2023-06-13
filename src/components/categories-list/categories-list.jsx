import React from 'react'

import './categories-list.css'
import { Link } from 'react-router-dom'

function CategoriesList(props) {
    return (
        <div className='content-container'>
            <div className='section-title'>
                Категории
            </div>
            <div className='category-list'>
                {props.categories.map((category) => {
                    return (
                        <Link to={`/catalog/${category.id}`}>
                            <div className='category-card'>
                                <img src={category.img} />
                                <div className='category-name'>
                                    {category.name}
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