import React from 'react'

export const Header = () => {
  return (
    <>
      <header className="header">
        <h2>Portafolio</h2>
        <h2>menu</h2>
      </header>
      <nav>
        <ul>
          <li>main</li>
          <li>portafolio</li>
          <li>who I am?</li>
          <li>what I know?</li>
          <li>what I like?</li>
          <li>contact</li>
        </ul>
      </nav>

      <section className="desk__menu">
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
        </section>
    </>
  )
}
