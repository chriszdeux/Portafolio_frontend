import React from 'react'
import { NavLink } from 'react-router-dom'
import { projects } from '../../data/projectsData'
import { useCarrousel } from '../hooks/useCarrousel'

export const Projects = () => {
  const {currentPosition, animation} = useCarrousel( projects, 7 )

  return (
    <div  className={`main__sections projects__area `} style={{ animationDelay: '1s' }}>
      <figure className={` section__background ${ animation } `}>
        <img src={ projects[currentPosition].cover_image } alt="" />
      </figure>
      <NavLink exact to='/projects'>
        <h2 className="titles"> Projects </h2>
      </NavLink>
      <div className='fade--left'></div>
    </div>
  )
}
