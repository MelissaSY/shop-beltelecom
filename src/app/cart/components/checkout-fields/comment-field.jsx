import React, { Fragment, useEffect, useState } from 'react'

function CommentInput(props) {

    const [maxLength, setMaxLength] = useState(0)
    const [commentCounter, setCommentCounter] = useState(0)

    const handleComment = (e) => {
        props.setComment(e.target.value)
        setCommentCounter(e.target.value.length)
    }

    useEffect(() => {
        setMaxLength(props.maxLength)
    }, [props, props.maxLength])

    return (
        <Fragment>

            <textarea className='checkout-input' placeholder='комментарии'
                maxLength={maxLength} value={props.comment}
                onChange={(e) => handleComment(e)}
                id='comment-checkout'
            />
            <span className='comment-character-counter'
                id='comment-count-checkout'>{commentCounter}/{maxLength}
            </span>
        </Fragment>
    )
}

export default CommentInput