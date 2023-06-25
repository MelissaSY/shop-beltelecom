import React, { Fragment, useEffect, useRef, useState } from 'react'

function DateInput(props) {
    const [dateFocus, setDateFocus] = useState(false)
    const [minDate, setMinDate] = useState('')
    const [maxDate, setMaxDate] = useState('')
    const [minDateWarning, setMinDateWarning] = useState('')
    const [maxDateWarning, setMaxDateWarning] = useState('')
    const dateRef = useRef()

    useEffect(() => {
        let maxDateDate = new Date()
        maxDateDate.setDate(props.minDateDate.getDate() + props.intervalDays)
        setMinDateWarning(props.minDateDate.toLocaleDateString());
        setMaxDateWarning(maxDateDate.toLocaleDateString())
        setMinDate(props.minDateDate.toJSON().slice(0, 10))
        setMaxDate(maxDateDate.toJSON().slice(0, 10))
    }, [props.intervalDays, props.minDateDate])

    const handleDate = (e) => {
        props.setDate(e.target.value)
        props.setValidDate(dateRef.current.validity.valid)
    }

    return (
        <Fragment>
            <input className={'checkout-input' + (!dateFocus && !props.validDate ? ' invalid' : '')}
                type='date' placeholder='дата доставки'
                value={props.date} onChange={(e) => handleDate(e)}
                min={minDate}
                max={maxDate}
                ref={dateRef}
                onFocus={() => setDateFocus(true)}
                onBlur={() => setDateFocus(false)}
                aria-describedby='date-error'
                required
                id='date-checkout' />
            <p id='date-error' className={!dateFocus && !props.validDate ? 'error' : 'off'}>
                Дата должна быть в диапазоне {minDateWarning} - {maxDateWarning}
            </p>
        </Fragment>
    )
}

export default DateInput