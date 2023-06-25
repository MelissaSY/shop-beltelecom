import React, { useEffect, useRef, useState } from 'react'

const PHONE = '(__) ___-__-__'

function PhoneInput(props) {
    const [phoneFocus, setPhoneFocus] = useState(false)

    const [phoneSelection, setPhoneSelection] = useState({ start: 0, end: 0 })

    const phoneRef = useRef()
    useEffect(() => {
        phoneRef.current.setSelectionRange(phoneSelection.start, phoneSelection.end)
    }, [phoneSelection, phoneSelection.start, phoneSelection.end])

    const applyPhoneMask = (rawInput) => {

        let phone = ''

        let rawPhoneDigits = rawInput
            .replace(/\D/g, '')

        let phoneDigits = rawPhoneDigits
            .match(/(\d{0,2})(\d{0,3})(\d{0,2})(\d{0,2})/)
        if (!phoneDigits) {
            return PHONE
        }
        phone +=
            !phoneDigits[1] ? '(__)' :
                `(${phoneDigits[1][0]}${phoneDigits[1][1] || '_'})`

        phone += ' '

        phone +=
            !phoneDigits[2] ? '___' :
                `${phoneDigits[2][0]}${phoneDigits[2][1] || '_'}${phoneDigits[2][2] || '_'}`
        phone += '-'

        phone +=
            !phoneDigits[3] ? '__' :
                `${phoneDigits[3][0]}${phoneDigits[3][1] || '_'}`
        phone += '-'
        phone += phoneDigits[4] ? `${phoneDigits[4][0]}${phoneDigits[4][1] || '_'}` : '__'
        return phone
    }

    const countSelection = (currentPhoneDigits) => {
        let currCount = 0;
        let rawPhoneDigits = currentPhoneDigits
            .slice(0, phoneRef.current.selectionStart)
            .replace(/\D/g, '')

        let masked = applyPhoneMask(rawPhoneDigits)

        for (let i = 0; i < rawPhoneDigits.length; i++) {
            while (currCount < masked.length && masked[currCount] !== rawPhoneDigits[i]) {
                currCount++
            }
            currCount++
        }
        return currCount;
    }
    const handlePhone = (e) => {
        let phone = applyPhoneMask(e.target.value)

        let currStart = countSelection(e.target.value)

        if (e.target.value.length > PHONE.length) {
            while (currStart < PHONE.length && isNaN(parseInt(phone[currStart])) && phone[currStart] !== '_' && phone[currStart] !== '(') {
                currStart++
            }
        } else {
            while (currStart > 0 && isNaN(parseInt(phone[currStart])) && phone[currStart] !== '_' && phone[currStart] !== ')' && phone[currStart] !== '-') {
                currStart--
            }
        }

        setPhoneSelection({ start: currStart, end: currStart })

        props.setPhobeNumber(phone)
        props.setValidPhoneNumber(phone.replace(/\D/g, '').length === 9)
    }

    return (
        <div className='phone-number'>
            <div className='phone-user-input'>
                <input className='checkout-input country-number' value={'+375'} disabled
                    id='phone-country-checkout' />
                <input className={!phoneFocus && !props.validPhoneNumber ?
                    'checkout-input phone-input invalid' :
                    'checkout-input phone-input'}
                    placeholder={PHONE}
                    value={props.phoneNumber}
                    onChange={(e) => handlePhone(e)}
                    ref={phoneRef}
                    type='tel'
                    required
                    aria-invalid={props.validPhoneNumber ? "false" : "true"}
                    aria-describedby='phone-error'
                    onBlur={() => setPhoneFocus(false)}
                    onFocus={() => setPhoneFocus(true)}
                    id='phone-number'
                />
            </div>
            <p id='phone-error' className={!phoneFocus && !props.validPhoneNumber ? 'error' : 'off'}>
                Введен неверный номер телефона
            </p>
        </div>
    )
}

export default PhoneInput