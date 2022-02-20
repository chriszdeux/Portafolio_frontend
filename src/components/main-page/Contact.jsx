import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/dataContext'
import { icons } from '../../data/icons'
import { ContactModal } from '../contact-page/ContactModal'
import { useOpenContent } from '../hooks/useOpenContent'

export const Contact = () => {
  const { handleOpenContent } = useContext( DataContext )
  return (
    <>
      <div  className="main__sections contact__area animation__animated animation__fadeIn" style={{ animationDelay: '1s' }} onClick={ handleOpenContent }>
        
        {/* <NavLink exact to='/skills'> */}
          <h2 className="titles"> Contact Me </h2>
        {/* </NavLink> */}
        <figure className='section__background'>
          <img src="" alt="" />
        </figure>
      </div>
    </>
  )
}
