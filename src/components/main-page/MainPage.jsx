import React from 'react'

const gridTemplate = [
  {
    section: 'Hero section',
    class_name: 'hero__section'
  },
  {
    section: 'My Projects',
    class_name: 'projects__section'
  },
  {
    section: 'About Me',
    class_name: 'about__section'
  },
  {
    section: 'My skills',
    class_name: 'knowledge__section'
  },
  {
    section: 'Hobbies',
    class_name: 'i__like__section'
  },
  {
    section: 'Contact',
    class_name: 'contact__section'
  },
]

export const MainPage = () => {
  return (
    <main className="main c9">
      {
        gridTemplate.map(({section, class_name} ) => (
          <div className={`${class_name}`}>
            <h2 className="titles">{ section }</h2>
            <div className="info__section c9">
              <div className="info__list c8">
                <h2 className="info--item">project</h2>
                <h2 className="info--item">project</h2>
                <h2 className="info--item">project</h2>
              </div>
              <h3 className="more">More</h3>
            </div>
          </div>
        ))
      }
    </main>
  )
}
