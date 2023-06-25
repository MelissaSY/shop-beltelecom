import React, { Fragment, useState } from 'react'

const ADDRESS_REG = /^[а-яА-ЯёЁ][/?!,.а-яА-ЯёЁ0-9\s]*$/

function AddressInput(props) {
    const [addressFocus, setAddressFocus] = useState(false)
    const handleAddress = (e) => {
        props.setAddress(e.target.value)
        props.setValidAddress(ADDRESS_REG.test(e.target.value))
    }
    return (
        <Fragment>
            <input className={'checkout-input' + (!addressFocus && !props.validAddress ? ' invalid' : '')} placeholder='адрес доставки'
                value={props.address}
                onChange={(e) => handleAddress(e)}
                aria-required='true'
                aria-invalid={!props.validAddress}
                aria-describedby='address-error'
                onBlur={() => setAddressFocus(false)}
                onFocus={() => setAddressFocus(true)}
                id='address-checkout'
            />
            <p id='adress-error' className={!addressFocus && !props.validAddress ? 'error' : 'off'}>
                Введен неверный адрес
            </p>
        </Fragment>
    )
}

export default AddressInput