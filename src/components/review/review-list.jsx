import React from 'react'
import Review from './review'
import './review.css'

function ReviewList(props) {
    return (

        <div className='review-list'>
            <span className='section-title'>
                Отзывы
            </span>
            {props.reviews.map((review, ind) => {
                return (
                    <Review
                        userName={review.userName}
                        avatar={review.avatar}
                        content={review.content}
                        key={ind}
                    />
                )
            })}
        </div>
    )
}

export default ReviewList