import React, { Fragment, useState } from 'react'
const NAME_REG = /^[а-яА-ЯёЁ]+$/

function NameInput(props) {
    const [nameFocus, setNameFocus] = useState(false)

    const handleName = (e) => {
        props.setName(e.target.value)
        props.setValidName(NAME_REG.test(e.target.value))
    }
    return (
        <Fragment>
            <input className={'checkout-input name-input ' + (!nameFocus && !props.validName ? 'invalid' : '')}
                placeholder='имя'
                value={props.name} onChange={(e) => handleName(e)}
                onBlur={() => setNameFocus(false)}
                onFocus={() => setNameFocus(true)}
                aria-invalid={!props.validName}
                aria-required='true'
                aria-describedby='name-error'
                required
                id='name-checkout'
            />
            <p id="name-error" className={!nameFocus && !props.validName ? 'error' : 'off'}>
                Имя должно содержать только кириллические символы
            </p>
        </Fragment>
    )
}

export default NameInput