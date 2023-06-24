import React, { useCallback, useEffect, useRef, useState } from 'react'
/**
 * 
 * @param {*} props slides - array of html elements
 * @returns 
 */

import './slider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

function Slider(props) {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0)

    const getBannerStyles = () => ({
        width: props.bannerWidth * props.slides.length,
        transform: `translateX(${-(currentIndex * props.bannerWidth)}px)`
    })

    const goToPrevious = () => {
        const isFirst = currentIndex === 0;
        const newIndex = isFirst ? props.slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const goToNext = useCallback(() => {
        const newIndex = (currentIndex + 1) % props.slides.length;
        setCurrentIndex(newIndex)
    }, [currentIndex, props.slides])

    const goToIndex = (index) => {
        setCurrentIndex(index)
    }

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            goToNext();
        }, 2000)

        return () => clearTimeout(timerRef.current)

    }, [goToNext])

    return (
        <div className='slider'>
            <div className='banner'>
                <div className='slider-arrow slider-left-arrow'
                    onClick={goToPrevious}
                >
                    <FontAwesomeIcon icon={faAngleLeft} size='lg' />
                </div>
                <div className='slider-arrow slider-right-arrow'
                    onClick={goToNext}>
                    <FontAwesomeIcon icon={faAngleRight} size='lg' />
                </div>
                <div className='banner-content' style={getBannerStyles()}>
                    {props.slides.map((_, slideIndex) => {
                        return (
                            <div key={slideIndex} className={props.slideClassName} style={{width: `${props.bannerWidth}px`}}>
                                {props.slides[slideIndex]}
                            </div>
                        )
                    })}
                </div>
            </div>
            {
                props.noPagination ?
                    <></>
                    : <div className='slider-pagination'>
                        {
                            props.slides.map((slide, slideIndex) => {
                                return (
                                    <span key={slideIndex} role='button'
                                        className={slideIndex === currentIndex ?
                                            'swiper-bullet swiper-bullet-active' :
                                            'swiper-bullet'}
                                        onClick={() => goToIndex(slideIndex)} />
                                )
                            })
                        }
                    </div>
            }

        </div>
    )
}

export default Slider