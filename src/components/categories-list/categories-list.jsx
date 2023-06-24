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
                        <Link key={category.id} to={`/catalog/${category.id}`}>
                            <div className='category-card card-preview'>
                                <img src={category.img} />
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