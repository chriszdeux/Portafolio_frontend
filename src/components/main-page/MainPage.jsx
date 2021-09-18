import React from 'react'
import { NavLink } from 'react-router-dom'

export const gridTemplate = [
  {
    section: 'Hero section',
    area: 'hero__area',
    route: '/'
  },
  {
    section: 'My Projects',
    area: 'projects__area',
    route: '/project-page'
  },
  {
    section: 'About Me',
    area: 'about__area',
    route: '/about-me-page'
  },
  {
    section: 'My skills',
    area: 'skills__area',
    route: '/skills-page'
  },
  {
    section: 'Hobbies',
    area: 'hobbies__area',
    route: '/hobbies-page'
  },
  {
    section: 'Contact',
    area: 'contact__area',
    route: '/contact-page'
  },
]

export const MainPage = () => {
  return (
    <main className="main c9">
      {
        gridTemplate.map(({section, area, route} ) => (
          <div className={`main__sections ${area}`}>
            <NavLink exact to={ route }>
            <h2 className="titles">{ section }</h2>
            </NavLink>
            <div className="info__section c9">
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
