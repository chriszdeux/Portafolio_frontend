import React from 'react'

export const AboutMePage = () => {
  return (
    <section className="about__me__page c10">
      <div className="about__me">
        <figure className="about__me__background c10">
          <img className="about--me--background" src="" alt="" />
        </figure>
        <div className="about__me__info c9">
          <figure className="profile__picture">
            <img className="profile--picture" src="" alt="" />
          </figure>
          <div className="my__data">
            <h2 className="sub--titles">my name</h2>
            <h3 className="sub--titles">occupation</h3>
          </div>
        </div>
      </div>

      <div className="things__about__me c9">
        <h2 className="titles">about me</h2>
        <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, laborum! Nam, repellat vitae dolorum tempore neque excepturi dolor minus architecto? Placeat ut quia ducimus commodi excepturi minus, aut debitis ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem nesciunt dolore quod minus perferendis doloremque, incidunt est, dignissimos, fugiat earum deleniti laudantium et praesentium! Modi dolores non quibusdam ad!</p>
        <div className="about__me__more">
          <button className="btn btn--primary">what i like?</button>
          <button className="btn btn--primary">contact me</button>
        </div>
      </div>
    </section>
  )
}
