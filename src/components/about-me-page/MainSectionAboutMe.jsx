import React from 'react'

export const MainSectionAboutMe = () => {
  return (
    <div className="about__me">
      <figure className="about__me__background c10">
        <img className="about--me--background" src="" alt="" />
      </figure>
      <div className="about__me__info c9 fade--in" style={{ animationDelay: '1s' }}>
        <figure className="profile__picture">
          <img className="profile--picture" src="" alt="" />
        </figure>
        <div className="my__data">
          <h2 className="sub--titles">my name</h2>
          <h3 className="sub--titles">occupation</h3>
        </div>
      </div>
    </div>
  )
}
