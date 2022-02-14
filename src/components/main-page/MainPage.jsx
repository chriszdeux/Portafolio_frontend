import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/dataContext'
import { BackgroundAnimation } from '../animations/BackgroundAnimation'

export const gridTemplate = [
  {
    section: 'Hero section',
    area: 'hero__area',
    route: '/',
    animation: 'hero--animation',
    delay: '0s',
  },
  {
    section: 'My Projects',
    area: 'projects__area',
    route: '/project-page',
    animation: 'projects--animation',
    delay: '.4s',
  },
  {
    section: 'About Me',
    area: 'about__area',
    route: '/about-me-page',
    animation: 'about--animation',
    delay: '.8s',
  },
  {
    section: 'My skills',
    area: 'skills__area',
    route: '/skills-page',
    animation: 'skills--animation',
    delay: '1.2s',
  },
  {
    section: 'Hobbies',
    area: 'hobbies__area',
    route: '/hobbies-page',
    animation: 'hobbies--animation',
    delay: '1.6s',
  },
  {
    section: 'Contact',
    area: 'contact__area',
    route: '/contact-page',
    animation: 'contact--animation',
    delay: '2s',
  },
]

export const MainPage = () => {
  const { animation: { fade_in, fade_out } } = useContext( DataContext )

  const [delay, setDelay] = useState(0)
  const handleDelay = () => {
    debugger
    handleDelay(delay + .2)
    return delay
  }

  // useEffect(() => {
  //   handleDelay()
  // }, [ delay ])

  // const [delay, setDelay] = useState(initialState)
  // debugger
  return (
    <>
    <main className="main c9 hero--animation">
      {
        gridTemplate.map(({section, area, route, animation, delay} ) => (
          <div key={ area } className={`main__sections ${area} animation__animated animation__fadeIn`} style={{ animationDelay: '1s' }}>
            <NavLink exact to={ route }>
            <h2 className="titles">{ section }</h2>
            </NavLink>
            <div className="info__section c9" >
              <div className="info__list c8">
                <h2 className="info--item">project</h2>
                <h2 className="info--item">project</h2>
                <h2 className="info--item">project</h2>
              </div>
              <h3 className="more">More</h3>
            </div>
          </div>

))
}
    </main>
      {/* <BackgroundAnimation /> */}
    </>
  )
}
