import React from 'react'

import './review.css'

function Review(props) {
    return (
        <div className='review-container card-preview'>
            <div className='review-avatar'>
                <img src={props.avatar}/>
            </div>
            <div className='review-text'>
                <span className='review-user'>
                    {props.userName}
                </span>
                <span className='review-content'>
                    {props.content}
                </span>

            </div>
        </div>
    )
}

export default Review