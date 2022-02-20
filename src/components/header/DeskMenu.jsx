import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { DataContext } from '../../context/dataContext'

export const DeskMenu = () => {
  const { handleOpenContent } = useContext(DataContext)
  return (
    <nav className="desk__menu c10">
      <ul className="menu__list">
          <li className="menu--item ">
            <NavLink exact to="/" activeClassName="active__navigation" >
                Home
            </NavLink>
          </li>
          <li className="menu--item ">
            <NavLink exact to="/projects" activeClassName="active__navigation" >
                Projects
            </NavLink>
          </li>
          <li className="menu--item ">
            <NavLink exact to="/skills" activeClassName="active__navigation" >
                Skills
            </NavLink>
          </li>
          <li className="menu--item ">
            <NavLink exact to="/About" activeClassName="active__navigation" >
                About Me
            </NavLink>
          </li>
          <li className="menu--item " onClick={ handleOpenContent }>
            Contact
          </li>
      {/* {
        menuList.map(item => (
        ))
      } */}
      </ul>

    </nav>
  )
}
