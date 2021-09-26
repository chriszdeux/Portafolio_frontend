import React, { useState } from 'react'
import { ContactForm } from './ContactForm'
import { SocialContact } from './SocialContact'
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';

export const ContactPage = () => {
  const [form, setForm] = useState(false)
  const [social, setSocial] = useState(false)

  const handleForm = () => {
    setSocial(false);
    setForm(!form)
  }
  const handleSocial = () => {
    setForm(false)
    setSocial(!social);
  }
  return (
    <section className="contact c10">
          <div className="contact__method c9">
            {
              !social &&
                <div className="contact__email c10 animate__animated animate__fadeInLeft">
                  {
                    form 
                    ? 
                      <>
                        <CloseIcon className="close--icon" onClick={ handleForm }/>

                        <ContactForm handleForm={ handleForm }/>
                      </>
                    :
                      <h3 className="titles" onClick={ handleForm }>email</h3>
                  }
                </div>
            }

            {
              !form && 
                <div className="contact__social c10 animate__animated animate__fadeInRight">
                  {
                    social
                      ? 
                      <>
                        <CloseIcon className="close--icon" onClick={ handleSocial }/>
                        <SocialContact />
                      </>
                      : <h3 className="titles" onClick={ handleSocial }>social</h3>
                      
                  }
                </div>
            }
          </div>
        </section>
  )
}
