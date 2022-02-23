import React from 'react'
import { aboutMeData } from '../../data/aboutMeData'

export const Hobbies = () => {
  const { hobbies } = aboutMeData
    return (
    <div className='my__skills'>
        <h2 className='titles'>Some of my Hobbies are:</h2>
        <ul className='skill__list'>
            {
                hobbies.map(item => (
                    <li className='skill--item'>
                        { item.hobbie }  
                        {
                            item?.list_hobbie &&  
                            <>  
                                <span>: </span>
                                <ul className='sub--skill'>
                                    {
                                        item.list_hobbie.map(item => (
                                            <li className='sub--skill--item'>  {  item } /</li>
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
