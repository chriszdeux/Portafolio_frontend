import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiMenu3Fill as MenuIcon } from "react-icons/ri";
import { VscChromeClose as CloseIcon } from 'react-icons/vsc';
import { DataContext } from '../../context/dataContext';
import { Menu } from './Menu'
import { CircleBackground } from '../animations/CircleBackground';
import { MenuModal } from './MenuModal';
import { DeskMenu } from './DeskMenu';

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
    section: 'My skills',
    class_name: 'knowledge__section',
    route: '/skills'
  },
  {
    section: 'About Me',
    class_name: 'about__section',
    route: '/about'
  },
  {
    section: 'Contact',
    class_name: 'contact__section',
    // route: '/contact'
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
          <DeskMenu />
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
        <MenuModal setOpen={ setOpen }/>
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
