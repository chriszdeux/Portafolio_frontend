import React from 'react'
import { NavLink } from 'react-router-dom'

export const About = () => {
  return (
    <div  className="main__sections about__area animation__animated animation__fadeIn" style={{ animationDelay: '1s' }}>
      <NavLink exact to='/about'>
      <h2 className="titles"> About Me </h2>
      </NavLink>
      <figure className='section__background'>
        <img src="" alt="" />
      </figure>
    </div>
  )
}
