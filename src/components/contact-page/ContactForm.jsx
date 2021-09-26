import React from 'react'
import { GrClose as CloseIcon } from 'react-icons/gr';

export const ContactForm = ({ handleForm }) => {
  return (
    <>
      <form action="" className="contact__form c9 animate__animated animate__fadeIn">
        <input type="text" className="name--field" placeholder="name"/>
        <input type="email" className="email--field" placeholder="email" required/>
        <input type="number" className="phone--field" placeholder="phone"/>
        <input type="text" className="subject--field" placeholder="subject"/>
        <textarea name="" id="" className="message--field">

        </textarea>
      </form>
      <button className="btn btn-primary">send</button>
    </>
  )
}
