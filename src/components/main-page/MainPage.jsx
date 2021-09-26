import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/dataContext'

export const gridTemplate = [
  {
    section: 'Hero section',
    area: 'hero__area',
    route: '/',
    animation: 'hero--animation',
    delay: 0,
  },
  {
    section: 'My Projects',
    area: 'projects__area',
    route: '/project-page',
    animation: 'projects--animation',
    delay: 0,
  },
  {
    section: 'About Me',
    area: 'about__area',
    route: '/about-me-page',
    animation: 'about--animation',
    delay: 0,
  },
  {
    section: 'My skills',
    area: 'skills__area',
    route: '/skills-page',
    animation: 'skills--animation',
    delay: 0,
  },
  {
    section: 'Hobbies',
    area: 'hobbies__area',
    route: '/hobbies-page',
    animation: 'hobbies--animation',
    delay: 0,
  },
  {
    section: 'Contact',
    area: 'contact__area',
    route: '/contact-page',
    animation: 'contact--animation',
    delay: 0,
  },
]

export const MainPage = () => {
  const { animation: { fade_in, fade_out } } = useContext( DataContext )
  const [delay, setDelay] = useState(0)
  const handleDelay = () => {
    handleDelay(delay + .5)
  }
  // debugger
  return (
    <main className="main c9 hero--animation">
      {
        gridTemplate.map(({section, area, route, animation} ) => (
          <div className={`main__sections ${area} ${ animation }`}>
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
  )
}
