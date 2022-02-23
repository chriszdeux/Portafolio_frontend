import React from 'react'


const image = 'https://firebasestorage.googleapis.com/v0/b/proyects-screenshots.appspot.com/o/portafolio%2Fchris.jpg?alt=media&token=f5d26262-7d30-42a2-b08d-e6a7adc32432';
export const MainSectionAboutMe = () => {
  return (
    <div className="about__me c10 animate__animated animate__fadeIn" style={{ animationDelay: '.5s' }}>
        <figure className="profile__picture">
          <img className="profile--picture" src={ image } alt="profile" />
        </figure>
        <div className='my--name'>
          <h2 className='main--titles'>Hello, I'm Chris</h2>
          <h3>A Front End Developer</h3>
        </div>
      {/* <div className="about__me__info c9" style={{ animationDelay: '1s' }}>
        <div className="my__data">
          <h2 className="sub--titles">my name</h2>
          <h3 className="sub--titles">occupation</h3>
        </div>
      </div> */}
    </div>
  )
}
