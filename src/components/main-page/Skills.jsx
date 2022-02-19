import React from 'react'
import { NavLink } from 'react-router-dom'

const image = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2Fundraw_certificate_re_yadi.svg?alt=media&token=64cf4067-bbf8-46d5-a667-7fadb18ebc1b'
export const Skills = () => {
  return (
    <div  className="main__sections skills__area animation__animated animation__fadeIn" style={{ animationDelay: '1s' }}>
      <NavLink exact to='/skills'>
      <h2 className="titles"> Skills </h2>
      </NavLink>
      {/* <figure className='section__background' style={{
        width: '70%',
        diplay: 'flex',
        justifyContent: 'flex-end',
      }}>
        <img src={ image } alt="" />
      </figure> */}
    </div>
  )
}
