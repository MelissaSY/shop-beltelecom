import React, { Fragment } from 'react'
import Review from './review'
import './review.css'

function ReviewList(props) {
    return (
        <Fragment>
            <div className='review-list'>
                <span className='section-title'>
                    Отзывы
                </span>
                <Review
                    userName='Melissa'
                    content=' dct jr jnkbxyj ghjcnj cegth dcdct jr jnkdct jr jnkbxyj ghjcnj cegthdct jr jnkbxyj ghjcnj cegthbxyj ghjcnj cegthdct jr jnkbxyj ghjcnj cegtht jr jnkbxyj ghjcnj cegth dct jr jnkbxyj ghjcnj cegth dct jr jnkbxyj ghjcnj cegth'
                    avatar='/categories-images/phone.png'
                />
                <Review
                    userName='Melissa'
                    content=' dct jr jnkbxyj ghjcnj cegth'
                    avatar='/categories-images/phone.png'
                />
            </div>
        </Fragment>
    )
}

export default ReviewList