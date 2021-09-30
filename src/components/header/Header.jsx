import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Fill as MenuIcon } from "react-icons/ri";
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { DataContext } from '../../context/dataContext';
import { Menu } from './Menu'
import { CircleBackground } from '../animations/CircleBackground';

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
    section: 'My skills',
    class_name: 'knowledge__section',
    route: '/skills-page'
  },
  {
    section: 'About Me',
    class_name: 'about__section',
    route: '/about-me-page'
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
  const { animation: { fade_right } } = useContext( DataContext )
  const [open, setOpen] = useState(false)

  const handleClose = () => {

    return setOpen(false)
    debugger
  }
  // debugger
  return (
    <>
      <header className="header c10">
        <div className="c9">
          <h2 className="sub--title">Portafolio</h2>
          <nav className="desk__menu c10">
          <ul className="menu__list">
          {
            menuList.map(({section, route}) => (
              <NavLink exact to={ route } activeClassName="active__navigation" >
                <li className="menu--item c10" >{ section }</li>
              </NavLink>
            ))
          }
          </ul>

        </nav>
          {
            !open 
            ? 
            <MenuIcon 
              className="menu--icon"
              onClick={() => setOpen(!open)}
            />
            :
            <CloseIcon 
              className="close--icon"
              onClick={() => setOpen(!open)}
            />
            
          }
        </div>
        
      </header>
      {
        open && 

        // <Menu />
        <div className="modal">
          
          <div className="layout animate__animated animate__fadeInRight" onClick={ () => setOpen(false) }>
          </div>
          <div className="navbar__modal animate__animated animate__fadeInRight" style={{ animationDelay: '.3s' }} >
            <nav className="navbar c9">
              <ul className="navbar__list">
                {
                  menuList.map(({section, route}) => (
                    <NavLink exact to={ route } activeClassName="active__navigation">
                      <li className="navbar--item c10" onClick={ handleClose }>{ section }</li>
                    </NavLink>
                  ))
                }
              </ul>
            </nav>
            {/* <CircleBackground /> */}
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
