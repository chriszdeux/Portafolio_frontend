import React from 'react'
import { icons } from '../../data/icons'
import { ContactForm } from './ContactForm'

export const ContactModal = ({handleOpenContent}) => {
  return (
    <div className='contact__modal animate__animated animate__fadeInRight'>
      <div className='close' onClick={ handleOpenContent }>
          { icons.close_icon }
        </div>
      <ContactForm />
    </div>
  )
}
