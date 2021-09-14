import React from 'react'
import { NavLink } from 'react-router-dom'

export const gridTemplate = [
  {
    section: 'Hero section',
    class_name: 'hero__section',
    route: '/'
  },
  {
    section: 'My Projects',
    class_name: 'projects__section',
    route: '/project-page'
  },
  {
    section: 'About Me',
    class_name: 'about__section',
    route: '/about-me-page'
  },
  {
    section: 'My skills',
    class_name: 'knowledge__section',
    route: '/skills-page'
  },
  {
    section: 'Hobbies',
    class_name: 'i__like__section',
    route: '/hobbies-page'
  },
  {
    section: 'Contact',
    class_name: 'contact__section',
    route: '/contact-page'
  },
]

export const MainPage = () => {
  return (
    <main className="main c9">
      {
        gridTemplate.map(({section, class_name, route} ) => (
          <div className={`${class_name}`}>
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
