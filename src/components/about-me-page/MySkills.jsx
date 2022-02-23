import React from 'react'
import { aboutMeData } from '../../data/aboutMeData'

export const MySkills = () => {
    const { my_skills, skills } = aboutMeData
  return (
    <div className='my__skills'>
        <h2 className='titles'>{ skills }</h2>
        <ul className='skill__list'>
            {
                my_skills.map(item => (
                    <li className='skill--item'>
                        { item.skill }
                        {
                            item?.list && 
                            <>
                                <span>: </span>
                                <ul className='sub--skill'>
                                    {
                                        item.list.map(item => (
                                            <li className='sub--skill--item'> { item } / </li>
                                            ))
                                        }
                                </ul>
                            </>
                        }
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
