import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/dataContext'

export const MenuModal = ({ setOpen }) => {
  const { handleOpenContent } = useContext(DataContext)

  return (
    <div className="modal">
          
          <div className="layout animate__animated animate__fadeInRight" onClick={ () => setOpen(false) }>
          </div>
          <div className="navbar__modal animate__animated animate__fadeInRight" style={{ animationDelay: '.3s' }} >
            <nav className="navbar c9">
              <ul className="navbar__list">
                <li className="navbar--item ">
                  <NavLink exact to="/" activeClassName="active__navigation" >
                      Home
                  </NavLink>
                </li>
                <li className="navbar--item ">
                  <NavLink exact to="/projects" activeClassName="active__navigation" >
                      Projects
                  </NavLink>
                </li>
                <li className="navbar--item ">
                  <NavLink exact to="/skills" activeClassName="active__navigation" >
                      Skills
                  </NavLink>
                </li>
                <li className="navbar--item ">
                  <NavLink exact to="/About" activeClassName="active__navigation" >
                      About Me
                  </NavLink>
                </li>
                <li className="navbar--item " onClick={ handleOpenContent }>
                  Contact
                </li>
              </ul>
            </nav>
            {/* <CircleBackground /> */}
          </div>
        </div>
  )
}
