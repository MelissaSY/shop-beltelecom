import React, { Fragment, useEffect, useState } from 'react'
import { getAllContacts } from '../../services/plug-api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFax, faLocationDot, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons'

import './contacts.css'

function Contacts() {

  const [contacts, setContacts] = useState(null)

  useEffect(() => {
    getAllContacts()
      .then((response) => {
        console.log(response)
        setContacts(response)
      })
  }, [])

  const contactType = (contact) => {
    let icon = faTrash;
    switch (contact.type) {
      case "tel":
        icon = faPhone
        break;
      case "fax":
        icon = faFax
        break;
      case "email":
        icon = faEnvelope
        break;
      case "address":
        icon = faLocationDot
        break;
      default:
        break

    }
    return (<>
      <FontAwesomeIcon icon={icon} />
    </>)
  }

  return (
    <div className='content-container'>
      <p className='section-title'>контакты</p>
      {contacts ?
        <Fragment>
          <h2 className='contact-section'>обслуживание клиентов</h2>
          {contacts.global.map((contact, ind) => {
            return (
              <p key={ind} className='contact'>
                {
                  contactType(contact)
                }
                {
                  contact.value
                }
              </p>
            )
          })}

          <h2 className='contact-section'>для деловых партнеров</h2>

          {contacts.business.map((contact, ind) => {
            return (
              <p key={ind} className='contact'>
                {
                  contactType(contact)
                }
                {
                  contact.value
                }
              </p>
            )
          })}

          <h2 className='contact-section'>Контакты для средств массовой информации</h2>

          {contacts.mass.map((contact, ind) => {
            return (
              <p key={ind} className='contact'>
                {
                  contactType(contact)
                }
                {
                  contact.value
                }
              </p>
            )
          })}

        </Fragment>
        : <></>
      }
    </div>

  )
}

export default Contacts