import React from 'react'
import { NavLink } from 'react-router-dom'
import { projects } from '../../data/projectsData'
import { useCarrousel } from '../hooks/useCarrousel'
const cover = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/awamage%2FImageCrack.jpg?alt=media&token=76f19aba-8b31-4aab-a705-bbb9895ec57a'
export const Projects = () => {
  const {currentPosition, animation} = useCarrousel( projects, 7 )

  return (
    <div  className={`main__sections projects__area `} style={{ animationDelay: '1s' }}>
      <figure className={` section__background ${ animation } `}>
        <img src={ cover } alt="cover cracked" />
      </figure>
      <NavLink exact to='/projects'>
        <h2 className="titles"> Projects </h2>
      </NavLink>
      {/* <div className='fade--left'></div> */}
    </div>
  )
}
