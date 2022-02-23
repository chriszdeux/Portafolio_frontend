import React from 'react'
import { NavLink } from 'react-router-dom'
import { FadeLeft } from '../fade/FadeLeft'
import image from '../../temp/temp.jpg'
import { icons } from '../../data/icons';
export const Hero = () => {
  return (
    <div  className="main__sections hero__area animation__animated animation__fadeIn" style={{ animationDelay: '1s' }}>
      {/* <NavLink exact to='hero__area'>
      <h2 className="titles">{ section }</h2>
      </NavLink> */}
      <div className='i__am'>
        <h1 >Hi, my name is Christian Meza</h1>
        <h2 >
        I am a front end developer focused on <span>React { icons.react_icon }</span>
        </h2>
        <p >
        Welcome to my portfolio and feel free to to review it and see what I can offer to your team
        </p>
      </div>
      <FadeLeft />
      
      <figure className='section__background'>
        <img src={ image } alt="" />
      </figure>
      
    </div>
  )
}
