import React, { useState } from 'react';
import { RiMenu3Fill as MenuIcon } from "react-icons/ri";
import { GrClose as CloseIcon } from 'react-icons/gr';

export const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="header c10">
        <div className="c9">
          <h2 className="title">Portafolio</h2>
          {
            !open
              ?  <MenuIcon 
                  className="menu--icon"
                  onClick={() => setOpen(!open)}
                />
              :  <CloseIcon 
                  className="close--icon"
                  onClick={() => setOpen(!open)}
                />
          }
        </div>
      </header>
      {
        open && 
        <div className="modal">
          <div className="layout" onClick={ () => setOpen(false) }>
          </div>
          <div className="navbar__modal">
            <nav className="navbar">
              <ul className="navbar__list">
                <li className="navbar--item">main</li>
                <li className="navbar--item">portafolio</li>
                <li className="navbar--item">who I am?</li>
                <li className="navbar--item">what I know?</li>
                <li className="navbar--item">what I like?</li>
                <li className="navbar--item">contact</li>
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
