import React, { useState } from 'react'
import NameInput from './checkout-fields/name-field'
import PhoneInput from './checkout-fields/phone-field'
import AddressInput from './checkout-fields/address-field'
import DateInput from './checkout-fields/date-field'
import CommentInput from './checkout-fields/comment-field'

function CheckoutForm(props) {
    const maxLength = 2500
    const currDate = new Date()
    const intervalDays = 7;

    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [phoneNumber, setPhobeNumber] = useState('')
    const [address, setAddress] = useState('')
    const [comment, setComment] = useState('')

    const [validName, setValidName] = useState(true)
    const [validDate, setValidDate] = useState(true)
    const [validAddress, setValidAddress] = useState(true)
    const [validPhoneNumber, setValidPhoneNumber] = useState(true)
    const [validComment, setValidComment] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validAddress && validDate && validName && validPhoneNumber && validComment) {
            props.submitAction()
        }
    }

    return (
        <form className={'user-checkout'} onSubmit={handleSubmit} >

            <NameInput name={name} setName={setName} validName={validName} setValidName={setValidName} />
            <PhoneInput phoneNumber={phoneNumber} setPhobeNumber={setPhobeNumber} validPhoneNumber={validPhoneNumber} setValidPhoneNumber={setValidPhoneNumber} />
            <AddressInput address={address} setAddress={setAddress} validAddress={validAddress} setValidAddress={setValidAddress} />
            <DateInput minDateDate={currDate} setDate={setDate} date={date} setValidDate={setValidDate} validDate={validDate} intervalDays={intervalDays} />
            <CommentInput comment={comment} setComment={setComment} maxLength={maxLength} validComment={validComment} setValidComment={setValidComment} />

            <button type='submit' id='submit-checkout'>
                Заказать
            </button>
        </form>
    )
}

export default CheckoutForm