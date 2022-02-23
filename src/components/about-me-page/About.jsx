import React from 'react'
import { aboutMeData } from '../../data/aboutMeData'

export const About = () => {
    const { about_me } = aboutMeData 
  return (
    <div className='about'>
        <h2 className='titles'>About Me</h2>
        <p className="paragraph">{ about_me }</p>
    </div>
  )
}
