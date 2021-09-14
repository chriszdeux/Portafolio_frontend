import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Fill as MenuIcon } from "react-icons/ri";
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';

const menuList = [
  {
    section: 'Main',
    class_name: 'projects__section',
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
export const Header = () => {

  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header c10">
        <div className="c9">
          <h2 className="sub-title">Portafolio</h2>
          <MenuIcon 
            className="menu--icon"
            onClick={() => setOpen(!open)}
          />
        </div>
      </header>
      {
        open && 
        <div className="modal">
          
          <CloseIcon 
            className="close--icon"
            onClick={() => setOpen(!open)}
          />
          <div className="layout" onClick={ () => setOpen(false) }>
          </div>
          <div className="navbar__modal">
            <nav className="navbar c9">
              <ul className="navbar__list">
                {
                  menuList.map(({section, route}) => (
                    <NavLink exact to={ route } activeClassName="active__navigation">
                      <li className="navbar--item c10">{ section }</li>
                    </NavLink>
                  ))
                }
              </ul>
            </nav>
          </div>
        </div>
      }

      {/* <section className="desk__menu">
          <div>
            <figure>
              <img src="" alt="" />
            </figure>
            <nav>
              <ul>
                <li>portafolio</li>
                <li>main</li>
                <li>about me</li>
                <li>likes</li>
                <li>contact</li>
              </ul>
            </nav>
          </div>
        </section> */}
    </>
  )
}
