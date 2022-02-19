import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BackgroundAnimation } from '../animations/BackgroundAnimation'
const menuList = [
  {
    section: 'Main',
    class_name: 'projects__section',
    route: '/'
  },
  {
    section: 'My Projects',
    class_name: 'projects__section',
    route: '/projects'
  },
  {
    section: 'About Me',
    class_name: 'about__section',
    route: '/about'
  },
  {
    section: 'My skills',
    class_name: 'knowledge__section',
    route: '/skills'
  },
]
export const Menu = () => {
  return (
    <nav className="nav__menu">
      <ul className="nav__list">
        {
          menuList.map(({section, route}) => (
            <NavLink to={route}>
              <li className="nav--item">{ section }</li>
            </NavLink>
          ))
        }
        
          {/* <li className="nav--item">Projects</li>
          <li className="nav--item">Skills</li>
          <li className="nav--item">About Me</li>
          <li className="nav--item">Hobbies</li>
          <li className="nav--item">Contact</li> */}
      </ul>
        {/* <canvas className="circle" ></canvas> */}
      
    </nav>
  )
}
