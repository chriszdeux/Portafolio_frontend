import React from 'react'
import { skillsData } from '../../data/skillsData'
import { About } from './About'
import { Hobbies } from './Hobbies'
import { MySkills } from './MySkills'
import { SoftSkills } from './SoftSkills'
// import { AboutMeMore } from './AboutMeMore'

export const AboutMeInfo = () => {
  
  return (
    <div className="things__about__me  fade--in animate__animated animate__fadeIn" style={{ animationDelay: '1s' }}>
      <About />
      {/* <MySkills /> */}
      <ul className='skills__grid'>
        {
          skillsData.map(item => (
            <li key={ item.id } className="skill-item" >
              <span className='skill--icon' style={{ color: `${item.color}` }}>
              { item.icon }
              </span>
              <span className='technology--name'>{ item.name }</span>
            </li>
          ))
        }
      </ul>
      {/* <SoftSkills /> */}
      <Hobbies />
    </div>
  )
}
